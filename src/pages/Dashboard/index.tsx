import React from 'react'

import logo from '../../assets/logo-github.svg'

import { Title, Form, Repositories } from './DashboardStyles'

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

      <Repositories>
        <a href="#">
          <img src="https://avatars2.githubusercontent.com/u/32946164?s=400&u=94f8c4fca707024de0c6e94a271219509e39c2f2&v=4" alt="Foto de usuário"/>
          <div>
            <strong>Github-explore</strong>
            <p>Aplicação para explorar repositório de usuários no github.</p>
          </div>
          <span className="icon-rep">{'>'}</span>
        </a>

        <a href="#">
          <img src="https://avatars2.githubusercontent.com/u/32946164?s=400&u=94f8c4fca707024de0c6e94a271219509e39c2f2&v=4" alt="Foto de usuário"/>
          <div>
            <strong>Github-explore</strong>
            <p>Aplicação para explorar repositório de usuários no github.</p>
          </div>
          <span className="icon-rep">{'>'}</span>
        </a>

        <a href="#">
          <img src="https://avatars2.githubusercontent.com/u/32946164?s=400&u=94f8c4fca707024de0c6e94a271219509e39c2f2&v=4" alt="Foto de usuário"/>
          <div>
            <strong>Github-explore</strong>
            <p>Aplicação para explorar repositório de usuários no github.</p>
          </div>
          <span className="icon-rep">{'>'}</span>
        </a>
      </Repositories>
    </>
  )
}

export default Dashboard
