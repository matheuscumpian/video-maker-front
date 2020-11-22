import React from 'react'
import { Container } from '../../styles/components/Hero/HeroHeader'

export interface HeroHeaderProps {
  logo?: string
  name?: string
}

const HeroHeader: React.FC<HeroHeaderProps> = ({ logo, name }) => <Container />

export default HeroHeader
