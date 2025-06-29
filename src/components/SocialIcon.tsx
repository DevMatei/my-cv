import { motion } from 'framer-motion';
import { SocialMedia } from '../types';

interface SocialIconProps {
  social: SocialMedia;
  onHover: (social: SocialMedia | null) => void;
}

export default function SocialIcon({ social, onHover }: SocialIconProps) {
  return (
    <motion.a
      href={social.url}
      target={social.platform !== 'email' ? '_blank' : undefined}
      rel={social.platform !== 'email' ? 'noopener noreferrer' : undefined}
      className="flex items-center justify-center w-16 h-16 rounded-2xl border-2 transition-all duration-200"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
      whileHover={{ 
        scale: 1.05,
        borderColor: social.color,
      }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => onHover(social)}
      onMouseLeave={() => onHover(null)}
      title={`${social.platform}: ${social.handle}`}
    >
      <img 
        src={social.iconUrl}
        alt={social.platform}
        className="w-7 h-7 transition-opacity duration-200"
        style={{ filter: `brightness(0) saturate(100%) invert(1)` }}
      />
    </motion.a>
  );
}