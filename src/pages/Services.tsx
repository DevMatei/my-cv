import { Check } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'why async only?',
      answer: "because meetings are a waste of time for both of us. i work better without them and you get your stuff done faster. everything happens over text (email, discord, whatever works for you). you get updates and previews, leave feedback whenever you want.",
    },
    {
      question: 'how do we actually communicate?',
      answer: "pick whatever works for you: email, discord, slack, doesn't matter. i send regular updates with screenshots or screen recordings so you always know what's going on. no scheduling, no awkward calls.",
    },
    {
      question: "how long does it take?",
      answer: "most projects wrap up in 1-3 weeks. no meeting overhead means more time actually building. i'll keep you updated throughout so you're not left wondering what's happening.",
    },
    {
      question: 'what if i want changes?',
      answer: "both plans come with revision rounds. leave feedback async, i fix it, done. the clearer the feedback the faster it goes. if something isn't clear i'll just ask.",
    },
    {
      question: 'do you use figma or templates?',
      answer: "no templates, ever. everything is custom coded from scratch. i build directly in code. if you have a figma file bring it over and i'll implement it. if not, i design as i build.",
    },
    {
      question: "what if my project doesn't fit either plan?",
      answer: "just message me through the contact page and describe what you need. if it's somewhere in between or something totally different we can sort out a custom price. no obligations.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Hero Section */}
      <div className="text-center mb-16 sm:mb-24">
        <div className="mb-6">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-primary)',
            }}
          >
            no meetings, just results
          </span>
        </div>

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
          style={{ color: 'var(--color-text)' }}
        >
          high-performance builds,
          <br />
          <span style={{ color: 'var(--color-primary)' }}>zero meetings.</span>
        </h1>

        <p
          className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed"
          style={{ color: 'var(--color-textSecondary)' }}
        >
          ship fast, stay focused. fully async development that respects your time
          and delivers clean, production-ready code.
        </p>
      </div>

      {/* Pricing Bento Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-20">
        {/* Essential Tier */}
        <div
          className="rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }}
        >
          <div className="mb-6">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              essential
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span
                className="text-5xl font-black"
                style={{ color: 'var(--color-primary)' }}
              >
                $200
              </span>
              <span style={{ color: 'var(--color-textSecondary)' }}>
                per project
              </span>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-textSecondary)' }}
            >
              a single, clean landing page. good for getting online fast.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              'single landing page',
              'custom code, no templates',
              'responsive design',
              '2 revision rounds',
              'production deployment',
              '14 days post-launch support',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--color-primary)' }}
                />
                <span style={{ color: 'var(--color-text)' }}>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="w-full inline-block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
            }}
          >
            get started
          </Link>
        </div>

        {/* Everything Tier */}
        <div
          className="rounded-2xl p-8 border-2 relative transition-all duration-300 hover:scale-[1.02]"
          style={{
            backgroundColor: 'var(--color-surface)',
            borderColor: 'var(--color-primary)',
          }}
        >
          <div
            className="absolute -top-3 right-8 px-4 py-1 rounded-full text-xs font-bold"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
            }}
          >
            most popular
          </div>

          <div className="mb-6">
            <h3
              className="text-2xl font-bold mb-2"
              style={{ color: 'var(--color-text)' }}
            >
              everything
            </h3>
            <div className="flex items-baseline gap-2 mb-4">
              <span
                className="text-5xl font-black"
                style={{ color: 'var(--color-primary)' }}
              >
                $400
              </span>
              <span style={{ color: 'var(--color-textSecondary)' }}>
                per project
              </span>
            </div>
            <p
              className="text-base leading-relaxed"
              style={{ color: 'var(--color-textSecondary)' }}
            >
              multi-page site with animations and the full package.
            </p>
          </div>

          <ul className="space-y-4 mb-8">
            {[
              'multi-page site',
              'custom code, no templates',
              'animations & interactions',
              'responsive design',
              'full documentation',
              '4 revision rounds',
              'production deployment',
              '30 days post-launch support',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <Check
                  className="w-5 h-5 mt-0.5 flex-shrink-0"
                  style={{ color: 'var(--color-primary)' }}
                />
                <span style={{ color: 'var(--color-text)' }}>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="w-full inline-block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
            style={{
              backgroundColor: 'var(--color-primary)',
              color: 'var(--color-background)',
            }}
          >
            get started
          </Link>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto">
        <h2
          className="text-3xl sm:text-4xl font-black mb-3 text-center"
          style={{ color: 'var(--color-text)' }}
        >
          frequently asked
        </h2>
        <p
          className="text-center mb-12 text-lg"
          style={{ color: 'var(--color-textSecondary)' }}
        >
          how the async workflow actually works
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden border transition-all duration-200"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: openFaq === index ? 'var(--color-primary)' : 'var(--color-border)',
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 transition-colors duration-200"
              >
                <span
                  className="font-semibold text-lg"
                  style={{ color: 'var(--color-text)' }}
                >
                  {faq.question}
                </span>
                <span
                  className="text-2xl flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: 'var(--color-primary)',
                    transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  }}
                >
                  +
                </span>
              </button>

              {openFaq === index && (
                <div
                  className="px-6 pb-5 leading-relaxed"
                  style={{ color: 'var(--color-textSecondary)' }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3
          className="text-2xl sm:text-3xl font-bold mb-4"
          style={{ color: 'var(--color-text)' }}
        >
          ready to build?
        </h3>
        <p
          className="text-lg mb-8"
          style={{ color: 'var(--color-textSecondary)' }}
        >
          drop me a message. no calls, no forms with 12 fields, just tell me what you need.
        </p>
        <Link
          to="/contact"
          className="inline-block py-3 px-8 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          style={{
            backgroundColor: 'var(--color-primary)',
            color: 'var(--color-background)',
          }}
        >
          get in touch
        </Link>
      </div>
    </div>
  );
}
