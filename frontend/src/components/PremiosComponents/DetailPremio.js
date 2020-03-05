import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { MyContext } from '../../Context'
import { Button, Icon, Tag } from 'antd'
import moment from 'moment'
import Swal from 'sweetalert2'

const DetailPremio = (props) => {
  const [pc, setPC] = useState({})
  const {changePlace} = useContext(MyContext)
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
    changePlace('Premios')
  }, [changePlace, id, baseURL])

  const deletePremio = () => {
    Swal.fire({
      title: '¿Deseas eliminar este premio?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#87d068',
      cancelButtonColor: '#d33',
      cancelButtonText: 'No',
      confirmButtonText: 'Sí'
    }).then(result => {
      if (result.value) {
    axios.delete(`${baseURL}/api/pc/${id}`)
    .then(({data}) => {
      Swal.fire({title: '¡Premio eliminado!', type: 'success', confirmButtonColor: '#87d068'})
      props.history.push('/pc')
    })
    .catch(err => console.log(err))
    } else {
    return
  }})}

  return (
    <div className="detailContainer">
    <h1>{pc.title}</h1>
    <div className="imgAndDescription">
      <img src={pc.image} alt="img"/>
      <div className="description">
      <h3>DESCRIPCIÓN</h3>
      <p>{pc.description}</p>
      <h3>PREMIO</h3>
      <p>${pc.prize}.00 {pc.prizeCurrency}</p>
      <h3>FECHA LÍMITE PARA APLICAR</h3>
      <p>{moment(pc.endDate).format('LL')}</p>
      <Tag color="geekblue">{moment(pc.endDate).endOf('day').fromNow()}</Tag>
      <a href={pc.link} target="blank"><Button>Convocatoria</Button></a>
      <MyContext.Consumer>
      {({state})=>{
        if(!state.user) return <p style={{textAlign: "center"}}>No hay usuario loggeado</p>
        return (state.user.role==='ADMIN') ? 
        <div className="hola">
          <Button onClick={deletePremio}><Icon type="delete" /></Button>
          <Button><Link to={`/editPremio/${id}`}><Icon type="edit" theme="twoTone" /></Link></Button>     
        </div> :
      ''}}
    </MyContext.Consumer>
      </div>
    </div>
    </div>
  )
}

export default DetailPremio
