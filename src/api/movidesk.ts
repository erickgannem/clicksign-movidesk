import axios from 'axios'

const config = {
  baseURL: 'https://api.movidesk.com/public/v1'
}
const movidesk = axios.create(config)

export default movidesk
