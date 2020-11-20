import React from 'react'
import Head from 'next/head'
import NotFoundSVG from '../assets/404.svg'
import styled from 'styled-components'
import Header from '../components/Header'

const NotFoundContainer = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
  justify-content: center;

  div {
    display: flex;
    flex-direction: row-reverse;
    h1 {
      text-wrap: none;
      margin-right: 6vw;
      position: absolute;
    }

    svg {
      width: 50vw;
      height: 50vh;
    }
  }
`

const NotFound: React.FC = () => {
  return (
    <>
      <Head>
        <title>Not Found</title>
      </Head>
      <Header options={[{ title: 'Home', link: '/' }]} />
      <NotFoundContainer>
        <div>
          <h1>404 - Not Found</h1>
          <NotFoundSVG />
        </div>
      </NotFoundContainer>
    </>
  )
}

export default NotFound
