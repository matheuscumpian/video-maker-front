import React from 'react'
import { BeatLoader, ClipLoader } from 'react-spinners'
import StyledButton from '../../styles/components/Button/Button'
import { css } from '@emotion/core'

interface ButtonProps {
  isValid?: boolean
  onClick?: any
  onSubmit?: any
  form?: string
  type?: string
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  isValid,
  onClick,
  children,
  onSubmit,
  form,
  type,
  loading
}) => {
  return (
    <StyledButton
      form={form}
      onSubmit={onSubmit}
      isValid={isValid}
      disabled={!isValid && !loading}
      onClick={onClick}
      isLoading={loading}
      type="submit"
    >
      {!loading ? (
        children
      ) : (
        <BeatLoader size={10} color={'#EB46C0'} loading={true} />
      )}
    </StyledButton>
  )
}

export default Button
