import React from 'react'
import { useRouteMatch } from 'react-router'

interface RepositoryParams {
  repository_name: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>()

  return <h1>Repository:{params.repository_name}</h1>
}

export default Repository
