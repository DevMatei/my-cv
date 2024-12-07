import { Router } from 'express';
import { isBase64 } from '../utils/validators';

const router = Router();

router.get('/encode', (req, res) => {
  const { text } = req.query;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({
      error: 'Text parameter is required and must be a string'
    });
  }

  try {
    const encoded = Buffer.from(text).toString('base64');
    res.json({
      input: text,
      encoded
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to encode text'
    });
  }
});

router.get('/decode', (req, res) => {
  const { text } = req.query;

  if (!text || typeof text !== 'string') {
    return res.status(400).json({
      error: 'Text parameter is required and must be a string'
    });
  }

  if (!isBase64(text)) {
    return res.status(400).json({
      error: 'Invalid Base64 string provided'
    });
  }

  try {
    const decoded = Buffer.from(text, 'base64').toString('utf-8');
    res.json({
      input: text,
      decoded
    });
  } catch (error) {
    res.status(500).json({
      error: 'Failed to decode text'
    });
  }
});

export const base64Router = router; 