import React from 'react'

import { Container, Brand, Options } from '../styles/components/Header'
import RobotSVG from '../assets/robot.svg'
import Link from 'next/link'

export interface Option {
  title: string
  link: string
}

export interface HeaderProps {
  options?: Option[]
}

const Header: React.FC<HeaderProps> = ({ options }) => {
  return (
    <Container>
      <Brand>
        <Link href="/">
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
          )
        })}
      </Options>
    </Container>
  )
}

export default Header
