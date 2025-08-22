import React, { useEffect, useRef } from 'react';
import KeyPersonnel from '../components/KeyPersonnel';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const paragraphs = contentRef.current.querySelectorAll('p');

    paragraphs.forEach((p, i) => {
      gsap.fromTo(
        p,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          delay: i * 0.3, 
          scrollTrigger: {
            trigger: p,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <section className="p-4 pt-24 md:px-16 md:py-10 bg-gray-100">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
        About{' '}
        <span className="bg-gradient-to-r from-[#d81d1d] to-[#d1b34f] bg-clip-text text-transparent">
          Us
        </span>
      </h1>

      <div className="w-40 h-1.5 bg-[#d81d1d] mx-auto rounded-full md:mb-10 mb-5"></div>

      <div
        ref={contentRef}
        className="max-w-4xl mx-auto md:px-4 text-sm text-justify md:text-lg leading-relaxed text-gray-700 md:space-y-5"
      >
        <p>
          Enlivenbot AI Technologies Private Limited (EBAT) was founded with a vision to
          harness the transformative power of AI and drone technology across various sectors.
          Officially incorporated under the Companies Act 2013, EBAT is dedicated to setting
          new milestones in drone applications—from precision farming to advanced cinematography
          and efficient delivery services.
        </p>
        <p>
          Our mission is to revolutionize agriculture, empower creative industries, and enhance
          delivery mechanisms through cutting-edge technology, fostering sustainable and smart
          solutions that integrate seamlessly with traditional practices.
        </p>
        <p>
          Our expertise in digital transformation empowers businesses to navigate change and
          achieve real growth. With a vast ecosystem of knowledge and contextual understanding,
          we provide effective solutions that draw on both experience and innovation.
        </p>
      </div>

      <KeyPersonnel />
    </section>
  );
};

export default About;
