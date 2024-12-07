import { Router } from 'express';
import { checkPasswordStrength } from '../services/passwordService';

const router = Router();

router.post('/password-strength', (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({
      error: 'Password is required'
    });
  }

  const result = checkPasswordStrength(password);
  res.json(result);
});

export const passwordStrengthRouter = router; 