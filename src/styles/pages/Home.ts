import styled from 'styled-components';

export interface HomeProps {
  primary?: boolean;
}

export const Container = styled.div<HomeProps>`
  width: 100vw;
  height: 100vh;

  .header {
    width: 100vw;
  }

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  background-color: ${(props: any) => (props.primary ? props.theme.colors.background : props.theme.colors.secondary)};
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.text};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`;
