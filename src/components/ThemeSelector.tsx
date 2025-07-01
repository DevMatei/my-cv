import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeSelector() {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        aria-label={`Select theme: ${currentTheme.name}`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl border transition-all duration-200 hover:scale-105"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
          color: 'var(--color-text)',
        }}
      >
        <span className="text-sm font-medium">{currentTheme.name}</span>
        <div
          className="transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>

      {isOpen && (
        <div
          className="absolute top-full mt-2 right-0 min-w-[200px] rounded-xl border shadow-xl overflow-hidden opacity-100 scale-100 transition-all duration-200"
          style={{
            borderColor: 'var(--color-border)',
            backgroundColor: 'var(--color-surface)',
          }}
        >
          {themes.map((theme) => (
            <button
              key={theme.name}
              aria-label={`Switch to theme: ${theme.name}`}
              onClick={() => {
                setTheme(theme);
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left flex items-center gap-3 transition-all duration-200 hover:scale-[1.02]"
              style={{
                color: 'var(--color-text)',
                backgroundColor: currentTheme.name === theme.name ? 'var(--color-primary)20' : 'transparent',
              }}
            >
              <div
                className="w-4 h-4 rounded-full shadow-sm"
                style={{ backgroundColor: theme.colors.primary }}
              />
              <span className="text-sm font-medium">{theme.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}