import React, { useEffect, useState } from 'react'

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
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
