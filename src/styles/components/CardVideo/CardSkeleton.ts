import styled from 'styled-components'

const ImageContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.lightBlack};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  height: 107px;
  justify-content: center;
  max-height: 107px;
  width: 100%;
  overflow: hidden;
`

const StyledCardVideo = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.mediumBlack};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 2vw;
  margin-bottom: 4vh;
  width: 190px;
  min-height: 187px;
`

const Title = styled.div`
  align-self: center;
  background-color: ${props => props.theme.colors.lightBlack};
  height: 1.1rem;
  margin-top: 8px;
  width: 90%;
`

export { ImageContainer, StyledCardVideo, Title }
