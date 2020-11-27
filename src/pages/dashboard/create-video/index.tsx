import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../../../components/Header';
import RadioOn from '../../../assets/radioon.svg';
import RadioOff from '../../../assets/radiooff.svg';
import { DragAndDrop } from '../../../components';
import { Button, Container, ContainerForm, Form, InputContainer, Item, ItemLabel, Section } from '../../../styles/pages/CreateVideo';
import { DetailsTitle, SectionTitle } from '../../../styles/pages/Video';
import { useMount } from '../../../hooks';
import { useDispatch } from 'react-redux';
import { actions } from '../../../store/states/auth';

const CreateVideo: React.FC = () => {
  const [sentence, setSentence] = useState('');
  const [checked, setChecked] = useState('');
  const items = ['What is', 'Who is', 'The history of'];
  const dispatch = useDispatch();

  useMount(() => {
    const token = localStorage.getItem('access_token');
    dispatch(actions.updateUserAuth(token));
  });

  const onChange = e => {
    setSentence(e.target.value);
  };

  const onClick = (item: string) => {
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
            <DetailsTitle>Creating Video:</DetailsTitle>
            <SectionTitle>Sentence</SectionTitle>
            <InputContainer>
              <input onChange={onChange} value={sentence} placeholder='Ayrton Senna Formula 1' />
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
          <Button>Create Video</Button>
        </ContainerForm>
        <DragAndDrop></DragAndDrop>
      </Container>
    </>
  );
};

export default CreateVideo;
