import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.colors.mediumBlack};
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 64px;
  padding-bottom: 32px;
  width: 50%;
`;

const Feature = styled.div`
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
`;

const Header = styled.div`
  align-items: center;
  background-color: rgba(0, 219, 168, 0.75);
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

export { Container, Feature, Header, Name, Price };
