import styled from 'styled-components'

const StyledInput = styled.input`
  font-size: 15px;
  text-indent: 10px;
  border: 0;
  outline: none;
  width: 100%;
`

const Container = styled.div`
  min-width: 300px;
  max-width: 300px;
  margin-bottom: 5px;
  margin-top: 5px;
  min-height: 50px;
  border-radius: 5px;
  border: 1px solid #f1f1f1;
  transition-duration: 0.3s;
  transition-property: border;

  svg {
    width: 22px;
    height: 22px;
    margin-left: 12px;
    fill: ${props => props.theme.colors.icon};
    transition-duration: 0.2s;
    transition-property: fill;
  }

  display: flex;
  align-items: center;

  &:focus-within {
    outline: none;

    svg {
      fill: ${props => props.theme.colors.secondary};
    }
  }
`

export { StyledInput, Container }
