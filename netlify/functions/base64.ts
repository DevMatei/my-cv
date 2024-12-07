import { Handler } from '@netlify/functions';
import { getKVStore } from '@netlify/functions';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

const DAILY_LIMIT = 10;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY;

const isBase64 = (str: string): boolean => {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(str) && str.length % 4 === 0;
};

async function checkRateLimit(ip: string): Promise<boolean> {
  const store = getKVStore();
  const today = new Date().toISOString().split('T')[0];
  const key = `ratelimit:${ip}:${today}`;
  
  try {
    const currentCount = parseInt(await store.get(key) || '0');
    
    if (currentCount >= DAILY_LIMIT) {
      return false;
    }
    
    await store.put(key, (currentCount + 1).toString(), {
      expirationTtl: 86400 // 24 hours in seconds
    });
    
    return true;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow request if rate limiting fails
  }
}

export const handler: Handler = async (event) => {
  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 204, headers };
  }

  const { text, action } = event.queryStringParameters || {};
  const apiKey = event.headers['x-api-key'];
  const clientIp = event.headers['x-nf-client-connection-ip'] || 'unknown';

  // Check if it's an admin request
  const isAdmin = apiKey === ADMIN_API_KEY;

  // Check rate limit for non-admin requests
  if (!isAdmin) {
    const isAllowed = await checkRateLimit(clientIp);
    if (!isAllowed) {
      return {
        statusCode: 429,
        headers,
        body: JSON.stringify({
          error: 'Daily rate limit exceeded. Try again tomorrow.'
        })
      };
    }
  }

  if (!text) {
    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: 'Text parameter is required'
      })
    };
  }

  try {
    if (action === 'encode') {
      const encoded = Buffer.from(text).toString('base64');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          input: text,
          encoded,
          remaining: isAdmin ? 'unlimited' : (DAILY_LIMIT - (await getRemainingRequests(clientIp)))
        })
      };
    } else if (action === 'decode') {
      if (!isBase64(text)) {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            error: 'Invalid Base64 string provided'
          })
        };
      }

      const decoded = Buffer.from(text, 'base64').toString('utf-8');
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          input: text,
          decoded,
          remaining: isAdmin ? 'unlimited' : (DAILY_LIMIT - (await getRemainingRequests(clientIp)))
        })
      };
    }

    return {
      statusCode: 400,
      headers,
      body: JSON.stringify({
        error: 'Invalid action parameter. Use "encode" or "decode"'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: 'Internal server error'
      })
    };
  }
};

async function getRemainingRequests(ip: string): Promise<number> {
  const store = getKVStore();
  const today = new Date().toISOString().split('T')[0];
  const key = `ratelimit:${ip}:${today}`;
  
  try {
    const currentCount = parseInt(await store.get(key) || '0');
    return currentCount;
  } catch (error) {
    return 0;
  }
} 