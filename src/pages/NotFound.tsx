import React from 'react';
import { Link } from 'react-router-dom';

const funMessages = [
  "This shit’s gone. Poof.",
  "404? what the fuck.",
  "Ain’t shit here, keep it moving.",
  "How the hell did you get here?"
];

export default function NotFound() {
  const msgIdx = Math.floor(Math.random() * funMessages.length);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-[var(--color-bg)]">
      <h1 className="text-6xl md:text-7xl font-black mb-4" style={{ color: 'var(--color-primary)' }}>
        404
      </h1>
      <p className="text-xl md:text-2xl mb-6" style={{ color: 'var(--color-textSecondary)' }}>
        page not found
      </p>
      <Link
        to="/"
        className="px-6 py-2 rounded-lg font-bold text-lg bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] transition"
      >
        go home
      </Link>
      <div className="mt-10 text-center">
        <span className="text-sm text-[var(--color-textSecondary)]">{funMessages[msgIdx]}</span>
      </div>
    </div>
  );
}
