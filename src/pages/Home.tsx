import { useState } from 'react';
import SocialIcon from '../components/SocialIcon';
import { socialMediaData } from '../data/socialMedia';
import { SocialMedia } from '../types';

export default function Home() {
  const [hoveredSocial, setHoveredSocial] = useState<SocialMedia | null>(null);

  const handleSocialHover = (social: SocialMedia | null) => {
    setHoveredSocial(social);
  };

  const getDisplayText = () => {
    if (!hoveredSocial) return 'devmatei';
    
    // Handle email specially to make it shorter
    if (hoveredSocial.platform === 'email') {
      return 'email me';
    }
    
    return hoveredSocial.handle;
  };

  const getTextSize = () => {
    const text = getDisplayText();
    
    // Responsive text sizing based on content length and screen size
    if (text.length > 15) {
      return 'text-4xl md:text-5xl lg:text-6xl';
    } else if (text.length > 10) {
      return 'text-5xl md:text-6xl lg:text-7xl';
    } else {
      return 'text-6xl md:text-7xl lg:text-8xl';
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6">
      <div className="text-center max-w-4xl mx-auto w-full">
        <div className="mb-8">
          <h1
            className={`${getTextSize()} font-black mb-4 transition-all duration-200`}
            style={{ color: 'var(--color-text)' }}
          >
            {getDisplayText()}
          </h1>
          
          <p
            className="text-lg sm:text-xl md:text-2xl font-medium mb-2"
            style={{ color: 'var(--color-textSecondary)' }}
          >
            full stack developer
          </p>
          
          <p
            className="text-base sm:text-lg"
            style={{ color: 'var(--color-textSecondary)' }}
          >
            building digital experiences with code & creativity
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {socialMediaData.map((social) => (
            <SocialIcon
              key={social.platform}
              social={social}
              onHover={handleSocialHover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}