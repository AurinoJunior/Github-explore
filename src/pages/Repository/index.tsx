import React from 'react'
import { useRouteMatch } from 'react-router'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo-github.svg'

import { Header, RepositoryInfo, Issues } from './RepositoryStyles'

interface RepositoryParams {
  repository_name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return (
    <>
      <Header>
        <img src={logo} alt="Logotipo github explore"/>
        <Link to="/">
          <span className="icon-back">{'<'}</span>
        VOLTAR
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars2.githubusercontent.com/u/32946164?s=400&u=94f8c4fca707024de0c6e94a271219509e39c2f2&v=4" alt="Foto do autor" />
          <div>
            <h2>AurinoJunior/github-explorer</h2>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to='#' target="blank">
          <div>
            <strong>djasaun</strong>
            <p>spjdas</p>
          </div>
          <span className="icon-rep">{'>'}</span>
        </Link>
      </Issues>
    </>
  )
}

export default Repository
