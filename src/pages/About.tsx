export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-16">
      <div className="prose prose-lg max-w-none">
        <div className="markdown-content space-y-6" style={{ color: 'var(--color-text)' }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8" style={{ color: 'var(--color-text)' }}>
            yo, i'm matei 👋
          </h1>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            full-stack dev who's all about turning ideas into real shit with code. when i'm not grinding on projects, you'll catch me gaming, streaming on twitch, or geeking out on the latest tech.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            what i do
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            i build solid web apps using:
          </p>

          <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-2">
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>frontend</strong>: react, typescript, tailwind css
            </li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>backend</strong>: node.js, python, apis, databases
            </li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>
              <strong style={{ color: 'var(--color-primary)' }}>tools</strong>: git, docker, vs code, and way too many browser tabs
            </li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            my story
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            started coding just for fun, now it's my full-time hustle. clean, maintainable code and smooth user experiences are my vibe. every project teaches me something new and pushes me to level up.
          </p>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            outside the code
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            when i'm off the keyboard, i'm usually:
          </p>

          <ul className="list-disc pl-4 sm:pl-6 mb-4 sm:mb-6 space-y-2">
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>🎮 gaming with friends</li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>📺 streaming on twitch</li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>🎵 vibing to music</li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>🌱 picking up new skills</li>
            <li className="text-base sm:text-lg mb-2" style={{ color: 'var(--color-text)' }}>☕ fueled by way too much tea (i hate coffee)</li>
          </ul>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-8 sm:mt-12 mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            hit me up
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6" style={{ color: 'var(--color-text)' }}>
            always down for cool projects, collabs, or just tech talk. slide into my socials or drop me an email anytime!
          </p>

          <blockquote className="border-l-4 pl-4 sm:pl-6 py-3 sm:py-4 my-6 sm:my-8 italic text-lg sm:text-xl rounded-r-lg" style={{ borderColor: 'var(--color-primary)', backgroundColor: 'var(--color-surface)', color: 'var(--color-textSecondary)' }}>
            "the best code ain't just functional, it's also beautiful."
          </blockquote>
        </div>
      </div>
    </div>
  );
}