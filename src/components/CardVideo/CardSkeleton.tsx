import React from 'react'
import {
  ImageContainer,
  StyledCardVideo,
  Title
} from '../../styles/components/CardVideo/CardSkeleton'

const CardVideoSkeleton: React.FC = () => {
  const arr = []

  for (let i = 0; i < 28; i++) {
    arr[i] = {}
  }

  return (
    <>
      {arr.map((item, index) => {
        return (
          <StyledCardVideo key={index}>
            <ImageContainer />
            <Title />
            <Title />
          </StyledCardVideo>
        )
      })}
    </>
  )
}

export default CardVideoSkeleton
