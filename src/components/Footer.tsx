import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      timeZone: 'Europe/Chisinau',
      hour12: false,
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <footer
      className="border-t mt-16"
      style={{
        borderColor: 'var(--color-border)',
        backgroundColor: 'var(--color-surface)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p 
            className="text-sm"
            style={{ color: 'var(--color-textSecondary)' }}
          >
            UTC+2 (Moldova) — It's currently {formatTime(currentTime)}
          </p>
          
          <p 
            className="text-xs text-center leading-relaxed"
            style={{ color: 'var(--color-textSecondary)' }}
          >
            © 2025 DevMatei. All rights reserved.<br />
            No copying, redistribution, or reuse allowed without explicit permission.
          </p>
        </div>
      </div>
    </footer>
  );
}