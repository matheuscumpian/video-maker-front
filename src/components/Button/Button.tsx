import React from 'react'
import StyledButton from '../../styles/components/Button/Button'

interface ButtonProps {
  isValid?: boolean
  onClick?: any
  onSubmit?: any
  form?: string
  type?: string
}

const Button: React.FC<ButtonProps> = ({
  isValid,
  onClick,
  children,
  onSubmit,
  form,
  type
}) => {
  return (
    <StyledButton
      form={form}
      onSubmit={onSubmit}
      isValid={isValid}
      onClick={onClick}
      type="submit"
    >
      {children}
    </StyledButton>
  )
}

export default Button
