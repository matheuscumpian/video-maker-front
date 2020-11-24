import React, { useState } from 'react';

import * as Yup from 'yup';
import Button from '../components/Button/Button';
import Head from 'next/head';
import Header from '../components/Header';
import Input from '../components/Input/Input';
import Link from 'next/link';
import RobotSVG from '../assets/robot.svg';
import SignUpSVG from '../assets/signup.svg';
import { useRouter } from 'next/router';
import { Container } from '../styles/pages/Login';
import { postAuth } from '../store/states/auth';
import { registerUser } from '../store/states/register';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { ApplicationState } from '../store';
import { RegisterState, UserState } from '../models/User';
import { useUpdateEffect } from '../hooks';

export interface LoginProps {
  name?: string;
}

interface LoginState {
  email: string;
  password: string;
  valid: boolean;
}

const validationSchema = Yup.object({
  email: Yup.string().email().required('Invalid e-mail'),
  name: Yup.string().required('Name is required'),
  password: Yup.string().required('Password is required'),
  passwordConfirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
});

const Register: React.FC<LoginProps> = () => {
  const dispatch = useDispatch();
  const stateAuth = useSelector<ApplicationState, UserState>(state => state.auth);
  const stateRegister = useSelector<ApplicationState, RegisterState>(state => state.register);
  const [errorMessage, setErrorMessage] = useState('');
  const [isValidForm, setIsValidForm] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      passwordConfirm: '',
    },
    onSubmit: values => submitForm(values),
    validationSchema,
    validateOnChange: true,
    validateOnBlur: false,
  });

  const submitForm = async values => {
    dispatch(
      registerUser({
        email: values.email,
        name: values.name,
        password: values.password,
      }),
    );
  };

  useUpdateEffect(() => {
    if (stateRegister.status === 'SUCCESS') {
      setTimeout(() => {
        dispatch(
          postAuth({
            email: formik.values.email,
            password: formik.values.password,
          }),
        );
      }, 150);
    }
  }, [stateRegister]);

  useUpdateEffect(() => {
    if (stateAuth.status === 'SUCCESS') {
      router.push('/dashboard');
    }
  }, [stateAuth]);

  useUpdateEffect(() => {
    if (formik.touched.name && formik.errors.name) {
      setErrorMessage(formik.errors.name);
      setIsValidForm(false);
      return;
    }
    if (formik.touched.email && formik.errors.email) {
      setErrorMessage(formik.errors.email);
      setIsValidForm(false);
      return;
    }
    if (formik.touched.password && formik.errors.password) {
      setErrorMessage(formik.errors.password);
      setIsValidForm(false);
      return;
    }
    if (formik.touched.passwordConfirm && formik.errors.passwordConfirm) {
      setErrorMessage(formik.errors.passwordConfirm);
      setIsValidForm(false);
      return;
    }

    if (
      validationSchema.isValidSync({
        name: formik.values.name,
        email: formik.values.email,
        password: formik.values.password,
        passwordConfirm: formik.values.passwordConfirm,
      })
    ) {
      setErrorMessage('');
      setIsValidForm(true);
    }
  }, [formik]);

  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <Header
        options={[
          { title: 'Home', link: '/' },
          { title: 'Login', link: '/login' },
        ]}
      />
      <Container primary={true}>
        <SignUpSVG />
        <div className='loginPanel'>
          <div className='loginPanelHeader'>
            <RobotSVG />
            <p>Sign Up</p>
          </div>
          <form action='' onSubmit={formik.handleSubmit} id='loginForm'>
            {!isValidForm && <p id='error'>{errorMessage}</p>}
            <div className='inputs'>
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
            <div className='buttons'>
              <Button type='submit' isValid={isValidForm}>
                Register
              </Button>
            </div>
          </form>
          <div className='registerTip'>
            <p>
              Already registered ?
              <Link href='/login'>
                <a> Sign in</a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Register;
