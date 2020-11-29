import styled, { css } from 'styled-components';

export interface ButtonProps {
  color: string;
  isValid: boolean;
  isLoading: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  background-color: ${props => (props.isValid ? (props.color ? props.color : props.theme.colors.secondary) : props.theme.colors.icon)};
  border-radius: 4px;
  border: 0px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: inline-block;
  display: flex;
  font-weight: bold;
  font-size: 17px;
  justify-content: center;
  padding: 11px 0;
  position: relative;
  text-decoration: none;
  width: 300px;

  :focus {
    outline: 0;
  }

  :hover {
    ${props =>
      props.isValid
        ? css`
            background-color: ${props => (props.color ? props.color : props.theme.colors.third)};
          `
        : css`
            cursor: not-allowed;
          `}
  }
`;

export default StyledButton;
