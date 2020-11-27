import React from 'react';

import { StyledInput, Container } from '../../styles/components/Input/Input';
import VpnSVG from '../../assets/vpn.svg';
import MailSVG from '../../assets/mail.svg';
import PersonSVG from '../../assets/person.svg';

export interface InputProps {
  type: string;
  defaultValue: string;
  icon?: 'vpn' | 'mail' | 'person';
  onChange: any;
  name?: string;
  value?: any;
  onBlur;
}

const Input: React.FC<InputProps> = ({ defaultValue, type, icon, onChange, name, value, onBlur }) => {
  return (
    <Container>
      {icon === 'vpn' ? <VpnSVG /> : icon === 'mail' ? <MailSVG /> : icon === 'person' ? <PersonSVG /> : null}
      <StyledInput placeholder={defaultValue} type={type} onChange={onChange} name={name} value={value} onBlur={onBlur} />
    </Container>
  );
};

export { Input };
