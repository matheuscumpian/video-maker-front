import React, { useState } from 'react';
import Head from 'next/head';
import RadioOn from '../../../assets/radioon.svg';
import RadioOff from '../../../assets/radiooff.svg';
import { Header } from '../../../components';
import { DragAndDrop } from '../../../components';
import { Button, Container, ContainerForm, Form, InputContainer, Item, ItemLabel, Section } from '../../../styles/pages/CreateVideo';
import { DetailsTitle, SectionTitle } from '../../../styles/pages/Video';
import { useMount } from '../../../hooks';
import { useDispatch, useSelector } from "react-redux";
import { actions } from '../../../store/states/auth';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import NProgress from 'nprogress';
import { Semantic, VideoParams } from '../../../models/Video';
import { VideoService } from '../../../services/Video';
import { toast } from 'react-toastify';
import { ApplicationState } from "../../../store";
import { UserState } from "../../../models/User";

const validationSchema = Yup.object({
  name: Yup.string().email().required('Invalid e-mail'),
  sentence: Yup.string().required('Password required'),
  semantic: Yup.string().required(),
});

const CreateVideo: React.FC = () => {
  const [checked, setChecked] = useState('');
  const items = ['What is', 'Who is', 'The history of'];
  const dispatch = useDispatch();
  const [file, setFile] = useState<any>();

  const formik = useFormik({
    initialValues: {
      name: '',
      semantic: '',
      sentence: '',
    },
    onSubmit: values => console.log('submit'),
    validationSchema,
    validateOnMount: true,
  });

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  const handleSubmit = e => {
    e.preventDefault();
    NProgress.start();
    const createVideoPayload: VideoParams = {
      name: formik.values.name,
      semantic: (formik.values.semantic as unknown) as Semantic,
      sentence: formik.values.sentence,
      image: '',
      id: ,
    };
    VideoService.createVideo(createVideoPayload)
      .then(r => NProgress.end())
      .catch(err =>
        toast.error(`😐 ${err.message}`, {
          autoClose: 4000,
          position: 'top-center',
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
        }),
      );
  };

  const onClick = (item: string) => {
    formik.setFieldValue('semantic', item);
    setChecked(item);
  };
  return (
    <>
      <Head>
        <title>Video</title>
      </Head>
      <Header
        options={[
          { title: 'Dashboard', link: '/dashboard' },
          { title: 'My Account', link: '/dashboard/my-account' },
        ]}
      />

      <Container>
        <ContainerForm>
          <Form>
            <DetailsTitle>Creating Video</DetailsTitle>
            <SectionTitle>Name</SectionTitle>
            <InputContainer>
              <input
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                placeholder='Video of Ayrton Senna'
              />
            </InputContainer>
            <SectionTitle>Sentence</SectionTitle>
            <InputContainer>
              <input
                name='sentence'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.sentence}
                placeholder='Ayrton Senna Formula 1'
              />
            </InputContainer>
            <SectionTitle>Semantic</SectionTitle>
            <Section>
              {items.map((item, index) => {
                return (
                  <Item onClick={() => onClick(item)} key={index}>
                    {item === checked ? <RadioOn /> : <RadioOff />}
                    <ItemLabel>{item}</ItemLabel>
                  </Item>
                );
              })}
            </Section>
          </Form>
          <Button onClick={e => handleSubmit(e)} type='submit'>
            Create Video
          </Button>
        </ContainerForm>
        <DragAndDrop file={file} setFile={setFile}></DragAndDrop>
      </Container>
    </>
  );
};

export default CreateVideo;
