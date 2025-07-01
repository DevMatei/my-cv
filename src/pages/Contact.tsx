import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);
      
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
    
    // Reset success message after 5 seconds
    if (isSubmitted) {
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="text-center mb-8 sm:mb-16">
        <h1 
          className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6"
          style={{ color: 'var(--color-text)' }}
        >
          let's chat!
        </h1>
        <p 
          className="text-lg sm:text-xl leading-relaxed px-4"
          style={{ color: 'var(--color-textSecondary)' }}
        >
          wanna collab, talk dev, or just vibe? hit me up! i'm always down for interesting conversations and cool projects.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {isSubmitted ? (
          <div
            className="text-center p-8 sm:p-12 rounded-2xl border"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-primary)',
            }}
          >
            <div className="text-4xl sm:text-6xl mb-4 sm:mb-6">🎉</div>
            <h2 
              className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
              style={{ color: 'var(--color-text)' }}
            >
              thanks for reaching out!
            </h2>
            <p 
              className="text-base sm:text-lg"
              style={{ color: 'var(--color-textSecondary)' }}
            >
              i'll get back to you soon. in the meantime, feel free to check out my projects or connect on social media!
            </p>
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            className="p-6 sm:p-8 rounded-2xl border space-y-6"
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            
            <div>
              <label 
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:scale-[1.01] focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
                placeholder="what should i call you?"
              />
            </div>

            <div>
              <label 
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:scale-[1.01] focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label 
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: 'var(--color-text)' }}
              >
                message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:scale-[1.01] resize-none focus:border-opacity-100"
                style={{
                  backgroundColor: 'var(--color-background)',
                  borderColor: 'var(--color-border)',
                  color: 'var(--color-text)',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'var(--color-primary)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--color-border)';
                }}
                placeholder="tell me about your project, ask a question, or just say hi!"
              />
            </div>

            <button
              type="submit"
              aria-label="Send message"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-medium flex items-center justify-center gap-3 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02]"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-background)',
              }}
            >
              {isSubmitting ? (
                <div 
                  className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"
                />
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  send message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}