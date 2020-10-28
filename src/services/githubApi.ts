import axios from 'axios'

const githubApi = axios.create({
  baseURL: 'http://api.github.com'
})

export default githubApi
