import styled from 'styled-components';

const Button = styled.button`
  align-self: flex-end;
  align-items: center;
  background-color: ${props => props.theme.colors.secondary};
  border: 0;
  border-radius: 4px;
  bottom: 16px;
  right: 16px;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  display: flex;
  font-size: 17px;
  font-weight: bold;
  justify-content: center;
  padding: 11px 0;
  position: absolute;
  text-align: flex-end;
  text-decoration: none;
  width: 200px;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: ${props => props.theme.colors.third};
  }
`;

const Container = styled.div`
  align-items: flex-start;
  display: flex;
  height: 100vh;
  justify-content: space-between;
  margin-top: 15vh;
  padding-left: 2vw;
  padding-right: 2vw;
  position: relative;
  width: 100vw;
`;

const ContainerForm = styled.div`
  background-color: ${props => props.theme.colors.mediumBlack};
  border-radius: 4px;
  position: relative;
`;

const Form = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  width: 520px;
  margin-bottom: 160px;
`;

const InputContainer = styled.div`
  align-items: center;
  background-color: ${props => props.theme.colors.lightBlack};
  border-radius: 5px;
  display: flex;
  width: 100%;
  margin-bottom: 5px;
  margin-top: 5px;
  min-height: 50px;

  input {
    background-color: ${props => props.theme.colors.lightBlack};
    border: 0;
    color: #fff;
    font-size: 15px;
    text-indent: 10px;
    outline: none;
    width: 100%;
  }

  &:focus-within {
    outline: none;
  }
`;

const Section = styled.div`
  background-color: ${props => props.theme.colors.lightBlack};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  width: 100%;
`;

const Item = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 8px;

  :hover {
    cursor: pointer;
  }

  svg {
    height: auto;
    margin-right: 8px;
    width: 24px;
  }
`;

const ItemLabel = styled.p`
  color: #fff;
`;
export { Button, Container, ContainerForm, Form, InputContainer, Item, ItemLabel, Section };
