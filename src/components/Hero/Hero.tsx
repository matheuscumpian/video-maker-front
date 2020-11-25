import HeroBody, { HeroBodyProps } from './HeroBody';
import HeroHeader, { HeroHeaderProps } from './HeroHeader';

import React from 'react';
import { Container } from '../../styles/components/Hero/Hero';
import Rocket from '../../assets/rocket.svg';

interface HeroProps {
  header?: HeroHeaderProps;
  body?: HeroBodyProps;
  image: boolean;
}

const Hero: React.FC<HeroProps> = ({ header, body, image = false }) => (
  <Container>
    <HeroHeader name={header?.name} logo={header?.logo} />
    <HeroBody phrases={body?.phrases} img={body?.img} />
    {image ? <Rocket /> : null}
  </Container>
);

export default Hero;
