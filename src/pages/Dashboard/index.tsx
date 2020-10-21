import React from 'react'

import logo from '../../assets/logo-github.svg'

import { Title, Form } from './DashboardStyles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt='Logotipo github explore'/>
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input
          type='text'
          name='repository'
          placeholder='Digite o nome do repositorio'
        />
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard
