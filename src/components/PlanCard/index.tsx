import React from 'react';
import { Container, Feature, Header, Name, Price } from '../../styles/components/PlanCard';

interface PlanProps {
  name: string;
  price: string;
  yearPrice: string;
}

const PlanCard: React.FC<PlanProps> = ({ name, price, yearPrice }) => {
  return (
    <Container>
      <Header>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Header>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
      <Feature></Feature>
    </Container>
  );
};

export default PlanCard;
