import React from 'react';
import Check from '../../assets/check.svg';
import { Button, Container, Feature, FeatureList, Header, Name, Price } from '../../styles/components/PlanCard';

interface Feature {
  label: string;
}

interface PlanProps {
  name: string;
  price: string;
  yearPrice: string;
  feature: Feature[];
}

const PlanCard: React.FC<PlanProps> = ({ name, price, yearPrice }) => {
  return (
    <Container>
      <Header>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Header>
      <FeatureList>
        <Feature>
          <Check />
          Lorem ipsum
        </Feature>
        <Feature>
          <Check /> Lorem ipsum
        </Feature>
        <Feature>
          <Check /> Lorem ipsum
        </Feature>
        <Feature>
          <Check /> Lorem ipsum
        </Feature>
        <Feature>
          <Check /> Lorem ipsum
        </Feature>
      </FeatureList>
      <Button>Select Plan</Button>
    </Container>
  );
};

export default PlanCard;
