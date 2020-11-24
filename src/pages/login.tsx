import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from '../styles/pages/Login';
import Input from '../components/Input/Input';
import LoginSVG from '../assets/login.svg';
import Header from '../components/Header';
import Head from 'next/head';
import Button from '../components/Button/Button';
import Link from 'next/link';
import RobotSVG from '../assets/robot.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { actions, postAuth } from '../store/states/auth';
import { UserState } from '../models/User';
import { ApplicationState } from '../store';

const validationSchema = Yup.object({
  email: Yup.string().email().required('Invalid e-mail'),
  password: Yup.string().required('Password required'),
});

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector<ApplicationState, UserState>(state => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: values => submitForm(values),
    validationSchema,
    validateOnMount: true,
  });

  const router = useRouter();

  const submitForm = async values => {
    dispatch(
      postAuth({
        email: values.email,
        password: values.password,
      }),
    );
  };

  useEffect(() => {
    if (state.status === 'SUCCESS') {
      setIsLoading(false);
      router.push('/dashboard').then(() => dispatch(actions.changeStatus('NONE')));
    }

    if (state.status === 'LOADING') {
      setIsLoading(true);
    }

    if (state.status === 'ERROR') {
      setIsLoading(false);
    }

    formik.values.email = '';
    formik.values.password = '';
  }, [state.status]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Header
        options={[
          { title: 'Home', link: '/' },
          { title: 'Register', link: '/register' },
        ]}
      />
      <Container primary={true}>
        <LoginSVG />
        <div className='loginPanel'>
          <div className='loginPanelHeader'>
            <RobotSVG />
            <p>Sign In</p>
          </div>
          <form action='' onSubmit={formik.handleSubmit} id='loginForm'>
            {formik.touched.email && formik.errors.email ? (
              <p id='error'>{formik.errors.email}</p>
            ) : formik.touched.password && formik.errors.password ? (
              <p id='error'>{formik.errors.password}</p>
            ) : null}
            <div className='inputs'>
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
            </div>
            <div className='buttons'>
              <Button
                type='submit'
                isValid={!(formik.errors.email || formik.errors.password) && !!(formik.values.email && formik.values.password)}
                loading={isLoading}
              >
                Login
              </Button>
            </div>
          </form>
          <div className='registerTip'>
            <p>
              {"Don't have an account ?"}
              <Link href='/register'>
                <a> Sign up</a>
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
