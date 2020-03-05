import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm'

const EditPremio = props => {
  const [pc, setPC] = useState({})
  const [form, handleInputs, uploadPhoto] = useForm()
  const {id} = props.match.params
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/pc/${id}`)
    .then(({data}) => {
        setPC(prevState => {
          return {prevState, ...data.pc}
        })
    })
    .catch(err => console.log(err))
    // changePlace('Premios')
  }, [baseURL, id])

  const updatePremio = () => {
    axios.put(`${baseURL}/api/pc/${id}`, form)
      .then(({ data }) => {
        setPC(prevState => {
          return {
            ...prevState,
            ...data.pc
          }
        })
        props.history.push(`/pc/${id}`)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
<div className="create">
    <div className="createContainer">
      <div className="">
    <h1>Editar Premio</h1>
    </div>
    <div className="table">
    <table>
      <tbody>
          <tr><td style={{textAlign: "right"}}><label>Título:</label></td> <td><input type="text" name="title" onChange={handleInputs} defaultValue={pc.title} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Descripción:</label></td><td><input type="text" name="description" onChange={handleInputs} required defaultValue={pc.description}/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Imagen:</label></td><td><input type="file" name="image" onChange={uploadPhoto} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Campo:</label></td>
            <td>
            <select defaultValue={pc.field} name="field" onChange={handleInputs} required>
            <option value="-" disabled>---</option>
            <option value="literatura">Literatura</option>
            <option value="arteycultura">Arte y Cultura</option>
            <option value="cienciaytecnologia">Ciencia y Tecnología</option>
            <option value="emprendimiento">Emprendimiento</option>
            <option value="educacion">Educación</option>
            <option value="otros">Otro</option>
            </select>
            </td></tr>
          <tr><td style={{textAlign: "right"}}><label>Premio:</label></td><td><input type="text" name="prize" onChange={handleInputs} defaultValue={pc.prize} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Tipo de cambio:</label></td>
          <td>
          <select defaultValue={pc.prizeCurrency} name="prizeCurrency" onChange={handleInputs} required>
            <option value="-" disabled>---</option>
            <option value="MXN">MXN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          </td></tr>
          <tr><td style={{textAlign: "right"}}><label>Último día para aplicar:</label></td><td><input type="date" name="endDate" onChange={handleInputs} required/></td></tr>
          <tr><td style={{textAlign: "right"}}><label>Link de la convocatoria:</label></td><td><input type="text" name="link" onChange={handleInputs} defaultValue={pc.link} required/></td></tr>
      </tbody>
    </table>
    {!form.image ? <img src={pc.image} alt="photo_url" height="100"/> : <img src={form.image} alt="photo_url" height="100"/>}
    </div>
    <button className="button" onClick={updatePremio}>GUARDAR</button>
    </div>
  </div>
  )
}

export default EditPremio
