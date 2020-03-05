import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../Context'
import useForm from '../../hooks/useForm'
import axios from 'axios'


const CreatePremio = props => {
  const { changeIsLogged } = useContext(MyContext)
  const [form, handleInputs, uploadPhoto] = useForm()
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(()=>{
    let user = JSON.parse(localStorage.getItem("USER"))
    if(!user || user.role === 'USER' ){
      changeIsLogged(true)
      props.history.push('/')
    }
  })

  const createPremio = () => {
    console.log('clicked')
    axios.post(`${baseURL}/api/pc`, form)
    .then(({data})=>{
      //Swal.fire('Created', 'FoodCreated', 'success')
      props.history.push(`/pc/${data.pc._id}`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="create">
    <div className="createContainer">
      <div className="">
    <h1>Crear Targeta Driver</h1>
    </div>
    <div className="table">
    <table>
      <tbody>
          <tr><td style={{textAlign: "right"}}><label>Nombre:</label></td> <td><input type="text" name="title" onChange={handleInputs} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Descripción:</label></td><td><textarea type="text" name = "description" onChange={handleInputs} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Foto:</label></td><td><input type="file" name="image" onChange={uploadPhoto} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Tamaño Camioneta:</label></td>
            <td>
            <select defaultValue="-" name="field" onChange={handleInputs} required>
            <option value="-" disabled>---</option>
            <option value="3 Toneladas">3 Toneladas</option>
            <option value="5 Toneladas">5 Toneladas</option>
            <option value="8 Toneladas">8 Toneladas</option>
            <option value="10 Toneladas">10 Toneladas</option>
            <option value="12 Toneladas">12 Toneladas</option>
            <option value="Otros">Otro</option>
            </select>
            </td></tr>
          <tr><td style={{textAlign: "right"}}><label>Cobro por viaje:</label></td><td><input type="text" name="prize" onChange={handleInputs} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Tipo de cambio:</label></td>
          <td>
          <select defaultValue="-" name="prizeCurrency" onChange={handleInputs} required>
            <option value="-" disabled>---</option>
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          </td></tr>
          <tr><td style={{textAlign: "right"}}><label>Link de Google Maps:</label></td><td><input type="text" name="link" onChange={handleInputs} required/></td></tr>
      </tbody>
    </table>
    {form.image && <img src={form.image} alt="photo_url" height="100"/>}
    </div>
    <button className="button" onClick={createPremio}>CREAR</button>
    </div>
  </div>
  )
}

export default CreatePremio