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

const Card = styled.div`
  background-color: ${props => props.theme.colors.mediumBlack};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 62px;
  padding: 1vw;
  position: relative;
  width: 600px;

  .planSection {
    margin-bottom: 76px;
  }
`;

const CardHeader = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const CardTitle = styled.p`
  font-size: 2rem;
`;

const Container = styled.div`
  align-items: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  width: 100%;
`;

const Logout = styled.p`
  color: ${props => props.theme.colors.secondary};
  font-size: 1.1rem;

  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

const PlanPrice = styled.p`
  font-size: 1.3rem;
`;

const Section = styled.div`
  background-color: ${props => props.theme.colors.lightBlack};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  padding: 1vw;
`;

const SectionItem = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 4px;

  svg {
    margin-right: 12px;
  }
`;

const SectionTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5vw;
`;

export { Button, Card, CardHeader, CardTitle, Container, Logout, PlanPrice, Section, SectionItem, SectionTitle };
