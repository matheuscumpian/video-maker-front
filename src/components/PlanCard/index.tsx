import React from 'react';
import Check from '../../assets/check.svg';
import UnChecked from '../../assets/unChecked.svg';
import { Button, Container, Feature, FeatureList, Header, Name, Price } from '../../styles/components/PlanCard';

interface planInterface {
  features: Feature[];
  monthPrice: string;
  onPressButton: any;
  owned: boolean;
  title: string;
}

interface Feature {
  checked: boolean;
  name: string;
}

const PlanCard: React.FC<planInterface> = ({ features, title, monthPrice, onPressButton, owned }) => {
  return (
    <Container>
      <Header>
        <Name>{title}</Name>
        <Price>{monthPrice}</Price>
      </Header>
      <FeatureList>
        {features.map((item: Feature, index) => {
          return (
            <Feature key={index}>
              {item.checked ? <Check /> : <UnChecked />}
              {item.name}
            </Feature>
          );
        })}
      </FeatureList>
      <Button disabled={owned} onClick={onPressButton}>
        {owned ? 'Your Plan' : 'Select Plan'}
      </Button>
    </Container>
  );
};

export { PlanCard };
