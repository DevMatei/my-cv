import { Handler } from '@netlify/functions';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

const isBase64 = (str: string): boolean => {
  const base64Regex = /^[A-Za-z0-9+/]*={0,2}$/;
  return base64Regex.test(str) && str.length % 4 === 0;
};

export const handler: Handler = async (event) => {
  // Handle OPTIONS request for CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers
    };
  }

  const { text, action } = event.queryStringParameters || {};

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
          encoded
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
          decoded
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