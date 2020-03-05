import axios from 'axios'
const isProduction = process.env.NODE_ENV === "production"
const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'
// const baseURL = 'https://becasmx.herokuapp.com'

class AuthService{
  constructor(){
    this.service = axios.create({
      baseURL, 
      withCredentials: true
    })
  }
  signup(data){
    return this.service.post('/auth/signup', data)
  }
  login(data) {
    return this.service.post('/auth/login', data)
  }
  logout(){
    return this.service.get('/auth/logout')
  }
  profile(){
    return this.service.get('/auth/profile')
  }
  editProfile(data, id){
    return this.service.put(`/auth/profile/${id}`, data)
  }
}

export default AuthService