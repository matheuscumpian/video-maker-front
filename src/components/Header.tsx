import React, { useEffect, useState } from 'react';

import { Container, Brand, Options } from '../styles/components/Header';
import RobotSVG from '../assets/robot.svg';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

export interface Option {
  title: string;
  link: string;
}

export interface HeaderProps {
  options?: Option[];
}

const Header: React.FC<HeaderProps> = ({ options }) => {
  const [showHeader, setShowHeader] = useState(true);
  const handleScroll = () => {
    const position = window.pageYOffset;
    console.log(position);
    if (position <= 0) setShowHeader(true);
    else setShowHeader(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.div
          className='header'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Container>
            <Brand>
              <Link href='/'>
                <a>
                  <RobotSVG />
                </a>
              </Link>
            </Brand>

            <Options>
              {options.map((option: Option, index) => {
                return (
                  <Link key={index} href={option.link}>
                    <a>{option.title}</a>
                  </Link>
                );
              })}
            </Options>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
