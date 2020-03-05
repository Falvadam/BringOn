import React, { useEffect, useContext } from 'react'
import { MyContext } from '../../Context'
import useForm from '../../hooks/useForm'
import axios from 'axios'


const CreateBeca = props => {
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

  const createBeca = () => {
    axios.post(`${baseURL}/api/beca`, form)
    .then(({data})=>{
      props.history.push(`/beca/${data.beca._id}`)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <div className="create">
      <div className="createContainer">
        <div className="">
        <h1>Crear Carga</h1>
        </div>
      <div className="table">
      <table>
        <tbody>
            <tr><td style={{textAlign: "right"}}><label>Producto:</label></td> <td><input type="text" name="title" onChange={handleInputs} required/></td></tr>
            <tr><td style={{textAlign: "right"}}><label>Descripción:</label></td><td><textarea type="text" name = "description" onChange={handleInputs} required/></td></tr>
            <tr><td style={{textAlign: "right"}}><label>Imagen:</label></td><td><input type="file" name="image" onChange={uploadPhoto} required/></td></tr>
            <tr><td style={{textAlign: "right"}}><label>Tipo de Carga:</label></td>
              <td>
              <select defaultValue="-" name="field" onChange={handleInputs} required>
              <option value="-" disabled>---</option>
              <option value="Carnicos">Carnicos</option>
              <option value="Eventos">Eventos</option>
              <option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
              <option value="Expos">Emprendimiento</option>
              <option value="Paqueteria">Paqueteria</option>
              <option value="Otros">Otro</option>
              </select>
              </td></tr>
            <tr><td style={{textAlign: "right"}}><label>Día de recogida:</label></td><td><input type="date" name="endDate" onChange={handleInputs} required/></td></tr>
            <tr><td style={{textAlign: "right"}}><label>Link de Google Maps:</label></td><td><input type="text" name="link" onChange={handleInputs} required/></td></tr>
        </tbody>
      </table>
      {form.image && <img src={form.image} alt="photo_url" height="100"/>}
      </div>
      <button className="button" onClick={createBeca} disabled={(form.image)? false : true}>CREAR</button>
      </div>
    </div>
  )
}

export default CreateBeca
