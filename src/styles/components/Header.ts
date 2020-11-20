import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 10vh;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => props.theme.colors.background};
`

export const Brand = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition-duration: 0.3s;
  transition-property: transform;
  svg {
    width: 10vw;
    height: 9vh;
  }
  :hover {
    transform: scale(1.03, 1.03);
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: center;
  a {
    margin: 0px 25px;
    transition-duration: 0.3s;
    transition-property: transform;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    color: ${props => props.theme.colors.primary};
    transform: scale(1.2, 1.2);
  }
`
