import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm'

const EditBeca = props => {
  const [beca, setBeca] = useState({})
  const [form, handleInputs, uploadPhoto] = useForm()
  const {id} = props.match.params
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/beca/${id}`)
    .then(({data}) => {
        setBeca(prevState => {
          return {prevState, ...data.beca}
        })
    })
    .catch(err => console.log(err))
    // changePlace('Becas')
  }, [baseURL, id])

  const updateBeca = () => {
    axios.put(`${baseURL}/api/beca/${id}`, form)
      .then(({ data }) => {
        setBeca(prevState => {
          return {
            ...prevState,
            ...data.pc
          }
        })
        props.history.push(`/beca/${id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
<div className="create">
    <div className="createContainer">
      <div className="">
    <h1>Editar Beca</h1>
    </div>
    <div className="table">
    <table>
      <tbody>
          <tr><td style={{textAlign: "right"}}><label>Producto:</label></td> <td><input type="text" name="title" onChange={handleInputs} defaultValue={beca.title} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Descripción:</label></td><td><input type="text" name="description" onChange={handleInputs} defaultValue={beca.description}  required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Imagen:</label></td><td><input type="file" name="image" onChange={uploadPhoto} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Tipo de Carga:</label></td>
            <td>
            <select defaultValue={beca.field} name="field" onChange={handleInputs} required>
            <option value="-" disabled>---</option>
            <option value="Carnicos">Carnicos</option>
              <option value="Eventos">Eventos</option>
              <option value="Ciencia y Tecnología">Ciencia y Tecnología</option>
              <option value="Expos">Emprendimiento</option>
              <option value="Paqueteria">Paqueteria</option>
              <option value="Otros">Otro</option>
            </select>
            </td></tr>
          <tr><td style={{textAlign: "right"}}><label>Día de recogida::</label></td><td><input type="date" name="endDate" onChange={handleInputs} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Link de Google Maps:</label></td><td><input type="text" name="link" onChange={handleInputs} defaultValue={beca.link} required/></td></tr>
      </tbody>
    </table>
    {!form.image ? <img src={beca.image} alt="photo_url" height="100"/> : <img src={form.image} alt="photo_url" height="100"/>}
    </div>
    <button className="button" onClick={updateBeca}>GUARDAR</button>
    </div>
  </div>
  )
}

export default EditBeca
