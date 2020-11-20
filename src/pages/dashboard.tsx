import React, { useEffect } from 'react'
import Head from 'next/head'
import Axios from '../services/index'

const Dashboard: React.FC = () => {
  useEffect(() => {
    Axios.post('/video', {
      sentence: 'São Paulo Futebol Clube',
      semantic: 'The history of'
    }).then(r => console.log(r))
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <h1>Dashboard</h1>
    </>
  )
}

export default Dashboard
