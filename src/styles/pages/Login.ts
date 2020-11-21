import styled from 'styled-components'

export interface LoginProps {
  primary?: boolean
}

export const Container = styled.div<LoginProps>`
  width: 100vw;
  height: 90vh;
  opacity: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  background-color: ${(props: any) =>
    props.primary
      ? props.theme.colors.background
      : props.theme.colors.secondary};
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
    margin-top: 40px;
  }

  button {
    margin: 40px;
  }

  .buttons {
    padding: 10px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }

  .loginPanelHeader {
    p {
      color: ${props => props.theme.colors.textDark};
      margin-top: 12px;
      margin-left: 6px;
      font-size: 2.2rem;
    }
    svg {
      width: 60px;
      height: 60px;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #error {
      font-size: 1rem;
      color: red;
      margin: 0px;
      line-height: 0px;
    }

    svg {
      height: 22px;
      width: 22px;
    }
  }

  .inputs {
    margin-top: 20px;
  }

  .loginPanel {
    background-color: #fff;
    border-radius: 10px;
    width: 400px;
    min-height: 460px;
    box-shadow: 0px 0px 4px #f5f5f5;
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .registerTip {
    p {
      color: ${props => props.theme.colors.textDark};
      font-size: 1.1rem;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.colors.secondary};
      font-weight: bold;
      font-size: 1.1rem;
    }
  }

  svg {
    width: 40vw;
    height: 40vh;
  }
`
