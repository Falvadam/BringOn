import React, { useContext, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/auth'
import { MyContext } from '../../Context'
import { Button } from 'antd'


const Signup = props => {
  const { changePlace, login } = useContext(MyContext)
  const authService = new AuthService()
  const [form, handleInputs] = useForm()

  useEffect(()=>{
    changePlace('auth')
  },[changePlace])

  const handleSignup = () => {
    authService.signup(form)
      .then(response => {
        login(response.data.user)
        localStorage.setItem("USER", JSON.stringify(response.data.user))
        props.history.push('/profile')
      })
      .catch(err => {
        console.log(form)
        console.log(err)
      })
  }

  return (
    <div className="auth">
        <div className="signupContainer">
        <h2>¡Crea tu cuenta!</h2>
        <input type="text" name="username" placeholder="Usuario" onChange={e => handleInputs(e)} /> <br/>
        <input type="email" name="email" placeholder="Email" onChange={e => handleInputs(e)} /> <br/>
        <input type="password" name="password" placeholder="Contraseña" onChange={e => handleInputs(e)} 
        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        required="true"/> <br/>
        <select type="text" name="role" onChange={e => handleInputs(e)}>
        <option>USER</option>
        <option>ADMIN</option>
        </select> <br/>
        <Button className="button" onClick={handleSignup}>Signup</Button>
        </div>
    </div>
  )
}

export default Signup

