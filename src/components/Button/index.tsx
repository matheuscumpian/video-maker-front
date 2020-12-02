import React from 'react';
import { BeatLoader } from 'react-spinners';
import StyledButton from '../../styles/components/Button/Button';

interface ButtonProps {
  color?: string;
  form?: string;
  isValid?: boolean;
  loading?: boolean;
  onClick?: any;
  onSubmit?: any;
  type?: string;
}

const Button: React.FC<ButtonProps> = ({ color, isValid, onClick, children, onSubmit, form, type, loading }) => {
  return (
    <StyledButton
      color={color}
      form={form}
      onSubmit={onSubmit}
      isValid={isValid}
      disabled={!isValid && !loading}
      onClick={onClick}
      isLoading={loading}
      type={'submit'}
    >
      {!loading ? children : <BeatLoader size={10} color={'#EB46C0'} loading={true} />}
    </StyledButton>
  );
};

export { Button };
