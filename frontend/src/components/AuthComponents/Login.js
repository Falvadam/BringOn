import React, { useContext, useEffect } from 'react'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/auth'
import { MyContext } from '../../Context'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

const Login = props => {
  const { changePlace, login } = useContext(MyContext)
  const authService = new AuthService()
  const [form, handleInputs] = useForm()

  useEffect(()=>{
    changePlace('auth')
  },[changePlace])

  const handleLogin = () => {
    authService.login(form)
      .then(response => {
        login(response.data.user)
        localStorage.setItem("USER", JSON.stringify(response.data.user))
        props.history.push('/profile')
      })
      .catch(err => {
        console.log(err)
        // swal({
        //   text: "Oops..." ,  
        //   footer: "¡Checa que hayas completado correctamente ambos campos!" ,
        //   type: "error" })
          swal({
            title: "Oops...",
            text: "¡Checa que hayas completado correctamente ambos campos!",
            icon: "error",
            dangerMode: true,
            timer: 3000,
            button: false
            })
      })
  }

  return (
    <div>
      <div className="auth">
        <div className="signupContainer">
        <h2>Login</h2>
        <input type="text" name="username" placeholder="Usuario" onChange={handleInputs} /> <br/>
        <input type="password" name="password" placeholder="Contraseña" onChange={handleInputs} /> <br/>
        <Button className = "button" onClick={handleLogin}>Login</Button> <br/>
        <p>¿Aún no tienes una cuenta con nosotros? <Link to="/signup">Regístrate</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login

