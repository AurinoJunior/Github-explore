import React, { FormEvent, useState } from 'react'

import githubApi from '../../services/githubApi'
import logo from '../../assets/logo-github.svg'

import { Title, Form, Repositories } from './DashboardStyles'

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
    html_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('')
  const [repositories, setRepositories] = useState<Repository[]>([])

  async function handleAddRepository (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const { data } = await githubApi.get(`repos/${newRepo}`)

    const repository = data as Repository

    setRepositories([...repositories, repository])
    setNewRepo('')
  }

  return (
    <>
      <img src={logo} alt='Logotipo github explore'/>
      <Title>Explore repositórios no Github.</Title>
      <Form action="" onSubmit={handleAddRepository}>
        <input
          type='text'
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder='Digite o nome do repositorio'
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map(repository => (
          <a key={repository.id} href={repository.owner.html_url} target="blank">
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <span className="icon-rep">{'>'}</span>
          </a>
        ))}
      </Repositories>
    </>
  )
}

export default Dashboard
