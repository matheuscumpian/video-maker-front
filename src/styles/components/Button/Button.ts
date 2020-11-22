import styled, { css } from 'styled-components'

export interface ButtonProps {
  isValid: boolean
  isLoading: boolean
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${props =>
    props.isValid ? props.theme.colors.secondary : props.theme.colors.icon};
  border-radius: 8px;
  border: 0px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  display: inline-block;
  cursor: pointer;
  color: ${props => props.theme.colors.text};
  font-size: 17px;
  padding: 11px 0;
  text-decoration: none;
  font-weight: bold;

  :focus {
    outline: 0;
  }

  :hover {
    ${props =>
      props.isValid
        ? css`
            background-color: ${props => props.theme.colors.third};
          `
        : css`
            cursor: not-allowed;
          `}
  }
`

export default StyledButton
