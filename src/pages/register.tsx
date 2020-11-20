import React, { useEffect, useState } from 'react'

import { Container } from '../styles/pages/Login'
import Input from '../components/Input/Input'
import SignUpSVG from '../assets/signup.svg'
import Header from '../components/Header'
import Head from 'next/head'
import Button from '../components/Button/Button'
import Link from 'next/link'
import RobotSVG from '../assets/robot.svg'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export interface LoginProps {
  name?: string
}

interface LoginState {
  email: string
  password: string
  valid: boolean
}

const validationSchema = Yup.object({
  email: Yup.string().email().required('Invalid e-mail'),
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirm: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
})

const Register: React.FC<LoginProps> = ({ name }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      passwordConfirm: ''
    },
    onSubmit: values => submitForm(values),
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false
  })

  const [errorMessage, setErrorMessage] = useState('')
  const [isValidForm, setIsValidForm] = useState(false)

  const submitForm = async values => {
    toast.info('🦄 Register!', {
      autoClose: 5000,
      position: 'top-center',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    })
  }

  useEffect(() => {
    if (formik.touched.name && formik.errors.name) {
      setErrorMessage(formik.errors.name)
      setIsValidForm(false)
      return
    }
    if (formik.touched.email && formik.errors.email) {
      setErrorMessage(formik.errors.email)
      setIsValidForm(false)
      return
    }
    if (formik.touched.password && formik.errors.password) {
      setErrorMessage(formik.errors.password)
      setIsValidForm(false)
      return
    }
    if (formik.touched.passwordConfirm && formik.errors.passwordConfirm) {
      setErrorMessage(formik.errors.passwordConfirm)
      setIsValidForm(false)
      return
    }

    if (
      validationSchema.isValidSync({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        passwordConfirm: formik.values.passwordConfirm
      })
    ) {
      setErrorMessage('')
      setIsValidForm(true)
    }
  }, [formik])

  useEffect(() => {
    setIsValidForm(false)
  }, [])

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Header
        options={[
          { title: 'Home', link: '/' },
          { title: 'Login', link: '/login' }
        ]}
      />
      <Container primary={true}>
        <SignUpSVG />
        <div className="loginPanel">
          <div className="loginPanelHeader">
            <RobotSVG />
            <p>Sign Up</p>
          </div>
          <form action="" onSubmit={formik.handleSubmit} id="loginForm">
            {!isValidForm && <p id="error">{errorMessage}</p>}
            <div className="inputs">
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={'name'}
                defaultValue={'Name'}
                type={'text'}
                value={formik.values.name}
                icon={'person'}
              />
              <Input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={'email'}
                defaultValue={'E-mail'}
                type={'email'}
                value={formik.values.email}
                icon={'mail'}
              />
              <Input
                defaultValue={'Password'}
                onBlur={formik.handleBlur}
                name={'password'}
                type={'password'}
                icon={'vpn'}
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              <Input
                defaultValue={'Confirm password'}
                onBlur={formik.handleBlur}
                name={'passwordConfirm'}
                type={'password'}
                icon={'vpn'}
                value={formik.values.passwordConfirm}
                onChange={formik.handleChange}
              />
            </div>
            <div className="buttons">
              <Button type="submit" isValid={isValidForm}>
                Register
              </Button>
            </div>
          </form>
          <div className="registerTip">
            <p>
              Already registered ?
              <Link href="/login">
                <a> Sign in</a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Register
