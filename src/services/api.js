import axios from 'axios'

export default() => {
  return axios.create({
    // baseURL: 'https://panwenjie.herokuapp.com/'
    baseURL: 'http://localhost:3000'

  })
}
