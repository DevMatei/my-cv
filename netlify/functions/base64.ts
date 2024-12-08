import { Handler } from '@netlify/functions';
import { promises as fs } from 'fs';
import { join } from 'path';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

const DAILY_LIMIT = 10;
const ADMIN_API_KEY = process.env.ADMIN_API_KEY || 'melishy_bot';
const RATE_LIMIT_FILE = '/tmp/rate_limits.json';

interface RateLimit {
  [key: string]: {
    count: number;
    date: string;
  };
}

const isBase64 = (str: string): boolean => {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(str) && str.length % 4 === 0;
};

async function checkRateLimit(ip: string): Promise<boolean> {
  try {
    let rateLimits: RateLimit = {};
    const today = new Date().toISOString().split('T')[0];

    // Try to read existing rate limits
    try {
      const data = await fs.readFile(RATE_LIMIT_FILE, 'utf8');
      rateLimits = JSON.parse(data);
    } catch (error) {
      // File doesn't exist or is invalid, start fresh
      rateLimits = {};
    }

    // Clean up old entries
    for (const key in rateLimits) {
      if (rateLimits[key].date !== today) {
        delete rateLimits[key];
      }
    }

    // Check and update rate limit for current IP
    if (!rateLimits[ip] || rateLimits[ip].date !== today) {
      rateLimits[ip] = { count: 1, date: today };
    } else if (rateLimits[ip].count >= DAILY_LIMIT) {
      return false;
    } else {
      rateLimits[ip].count++;
    }

    // Save updated rate limits
    await fs.writeFile(RATE_LIMIT_FILE, JSON.stringify(rateLimits));
    return true;
  } catch (error) {
    console.error('Rate limit check failed:', error);
    return true; // Allow request if rate limiting fails
  }
}

export const handler: Handler = async (event) => {
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
          isAdmin
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
          isAdmin
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