import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import ColafoSm from '@/images/colafo-sm.png';
import ColafoLg from '@/images/colafo-lg.png';

export function Hero({ language }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative mx-auto items-center max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <Container className="relative">
        <div className="max-w-4xl lg:max-w-7xl mx-auto md:mx-10">
          <Image
            src={isMobile ? ColafoSm : ColafoLg}
            alt="colafo-logo"
            unoptimized
            priority={isMobile ? true : undefined}
          />
        </div>
      </Container>
    </div>
  );
}
