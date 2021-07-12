import axios from 'axios'

type Opts = {
  endpoint: string
  token: string
  select: string
}
export default function movidesk ({ endpoint, token, select }: Opts) {
  const config = {
    baseURL: `https://api.movidesk.com/public/v1/${endpoint}&token=${token}${select && `$select=${select}`}`
  }
  return axios.create(config)
}
