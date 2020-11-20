import React, { useEffect } from 'react'
import { Container, BodyItem } from '../../styles/components/Hero/HeroBody'
import AOS from 'aos'

export interface HeroBodyProps {
  phrases?: string[]
  img?: any
}

const HeroBody: React.FC<HeroBodyProps> = ({ phrases, img }) => {
  useEffect(() => {
    AOS.init()
  })

  return (
    <Container>
      <BodyItem>
        <div>
          {phrases
            ? phrases.map((phrase, i) => (
                <p key={i} data-aos="fade-up">
                  {phrase}
                </p>
              ))
            : null}
        </div>
        <img src={img} />
      </BodyItem>
    </Container>
  )
}

export default HeroBody
