import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MyContext } from '../../Context'
import { Button, Icon, Tag } from 'antd'
import moment from 'moment'
import Swal from 'sweetalert2'

const DetailBeca = (props) => {
  moment.locale('es')
  const [beca, setBeca] = useState({})
  const {changePlace} = useContext(MyContext)
  const {id} = props.match.params
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/beca/`+id)
    .then(({data}) => {
        setBeca(prevState => {
          return {prevState, ...data.beca}
        })
    })
    .catch(err => console.log(err))
    changePlace('Becas')
  }, [changePlace, id, baseURL])

  const deleteBeca = () => {
    Swal.fire({
      title: '¿Deseas eliminar esta carga?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#87d068',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Sí'
    }).then(result => {
      if (result.value) {
  axios.delete(`${baseURL}/api/beca/${id}`)
  .then(({data}) => {
    Swal.fire({title: '¡Carga eliminada!', type: 'success', confirmButtonColor: '#87d068'})
    props.history.push('/becas')
  })
  .catch(err => console.log(err))
} else {
  return
}})}

  return (
  <div className="detailContainer">
  <h1>{beca.title}</h1>
  <div className="imgAndDescription">
    <img src={beca.image} alt="img"/>
    <div className="description">
    <h3>DESCRIPCIÓN</h3>
    <p>{beca.description}</p>
    <h3>TIPO DE CARGA</h3>
    <p>{beca.field}</p>
    <h3>FECHA LÍMITE PARA APLICAR</h3>
    <p>{moment(beca.endDate).format('LL')}</p>
    <Tag color="geekblue">{moment(beca.endDate).endOf('day').fromNow()}</Tag>
    <a href={beca.link} target="blank"><Button>Link Ubicación</Button></a>
    <MyContext.Consumer>
    {({state})=>{
      if(!state.user) return <p style={{textAlign: "center"}}>No hay usuario loggeado</p>
      return (state.user.role==='ADMIN') ? 
      <div className="hola">
        <Button onClick={deleteBeca}><Icon type="delete" /></Button>
        <Button><Link to={`/editBeca/${id}`}><Icon type="edit" theme="twoTone" /></Link></Button>  
      </div> :
    ''}}
  </MyContext.Consumer>
    </div>
  </div>
</div>
  )}

export default DetailBeca
