import zxcvbn from 'zxcvbn';

interface PasswordStrengthResult {
  score: number;
  strength: 'Weak' | 'Moderate' | 'Strong';
  suggestions: string[];
}

const COMMON_PASSWORDS = new Set([
  'password',
  '123456',
  'qwerty',
  'admin',
  'letmein',
  'welcome'
]);

export function checkPasswordStrength(password: string): PasswordStrengthResult {
  // Use zxcvbn for initial analysis
  const analysis = zxcvbn(password);
  
  // Custom criteria checks
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const isCommon = COMMON_PASSWORDS.has(password.toLowerCase());
  
  let score = analysis.score * 2; // Convert zxcvbn's 0-4 scale to 0-8
  const suggestions: string[] = [];

  // Additional scoring criteria
  if (password.length >= 12) score += 1;
  if (hasUpperCase && hasLowerCase && hasNumbers && hasSymbols) score += 1;
  if (isCommon) score = 1;
  if (password.length < 8) score = 1;

  // Cap score at 10
  score = Math.min(10, score);

  // Generate suggestions
  if (!hasUpperCase) suggestions.push('Add uppercase letters');
  if (!hasLowerCase) suggestions.push('Add lowercase letters');
  if (!hasNumbers) suggestions.push('Add numbers');
  if (!hasSymbols) suggestions.push('Add special characters');
  if (password.length < 12) suggestions.push('Make password at least 12 characters long');

  // Determine strength label
  let strength: 'Weak' | 'Moderate' | 'Strong';
  if (score <= 3) strength = 'Weak';
  else if (score <= 6) strength = 'Moderate';
  else strength = 'Strong';

  return {
    score,
    strength,
    suggestions: suggestions.length > 0 ? suggestions : []
  };
} 