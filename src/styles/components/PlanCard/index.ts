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
  width: 160px;

  :focus {
    outline: 0;
  }

  :hover {
    background-color: ${props => props.theme.colors.third};
  }
`;

const Container = styled.div`
  background-color: ${props => props.theme.colors.mediumBlack};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  position: relative;
  width: 50%;
`;

const FeatureList = styled.div`
  padding: 32px;
`;

const Feature = styled.div`
  align-items: center;
  flex-direction: row;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 4px;

  svg {
    margin-right: 16px;
  }
`;

const Header = styled.div`
  align-items: center;
  /* background-color: rgba(0, 219, 168, 0.75); */
  background-color: ${props => props.theme.colors.secondary};
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  flex-direction: row;
  padding: 32px;
  justify-content: space-between;
`;

const Name = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Price = styled.p`
  font-size: 1.3rem;
`;

export { Button, Container, Feature, FeatureList, Header, Name, Price };
