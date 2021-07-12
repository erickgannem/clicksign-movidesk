import axios from 'axios'

const config = {
  baseURL: 'https://api.movidesk.com/public/v1'
}

export default axios.create(config)
