import React from 'react'

import logo from '../../assets/logo.svg'
import { Title, Form } from './DashboardStyles'

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="github explore logotipo"/>
      <Title>Explore repositórios no Github.</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>
    </>
  )
}

export default Dashboard
