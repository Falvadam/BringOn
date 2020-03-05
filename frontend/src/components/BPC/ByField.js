import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { MyContext } from '../../Context'
import { Link } from 'react-router-dom'
import { Button, Card, Popover } from 'antd'

const ByField = (props) => {
  const [results, setResults] = useState([])
  const { changePlace } = useContext(MyContext)
  const { type } = props.match.params
  const { field } = props.match.params
  const aux = (type === 'becas' ? 'beca': 'pc')
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'
  const content = (
    <div>
      <p>mariianagamino@gmail.com</p>
    </div>
  )

  useEffect(()=>{
    (type === 'becas' ? axios.get(`${baseURL}/api/${type}/${field}`)
    .then(({data}) => {
        setResults(prevState => {
          return [
            ...data.becas
          ]
        })
    })
    .catch(err => console.log(err)):
    axios.get(`${baseURL}/api/${type}/${field}`)
    .then(({data}) => {
        setResults(prevState => {
          return [
            ...data.premios
          ]
        })
    })
    .catch(err => console.log(err)))
    

    changePlace(type)
  }, [changePlace, type, field, baseURL])

  return (
    <div>
    <div className="imgContainer">
    <h2>{(field === 'literatura' ? 'LITERATURA': field=== 'cienciaytecnologia' ? 
    'CIENCIA Y TECNOLOGÍA' : field === 'educacion' ? 'EDUCACIÓN' :
    field === 'emprendimiento' ? 'EMPRENDIMIENTO' : field === 'arteycultura' ?
    'ARTE Y CULTURA': 'OTROS')}</h2>
    </div>
    <div style={{ background: '#ECECEC', padding: '10px' }} className="container">
    {(results.length !== 0 ? results.map(result=>{
        return(
          <div key = {result._id}>
          <Card bordered={false} style={{ width: 350, height: 280 }} className="card" key = {result._id}>
          <h3>{result.title}</h3>
          <hr/>
          <p>{result.description}</p>
          <Link to={`/${aux}/${result._id}`}>
              <Button type="primary">Ver detalles</Button>
          </Link>
          </Card>
          </div>
        )
      }): <div className="default">
        <h3>Aún no hay {(type === 'becas' ? 'becas' : 'premios ni concursos')} en esta sección...¿sabes de {(type === 'becas' ? 'alguna' : 'alguno')}? 
        <br/><br/>
        <Popover content={content} title="Dirección de correo" trigger="hover">
            <a href="mailto:hola@gmail.com?subject=Convocatoria%20de...&amp;body=%C2%A1Hola!%20Quiero%20compartir%20una%20convocatoria.">
              <Button type="primary">Envíanos un correo</Button>
            </a>
        </Popover></h3>
        </div>)
    }
    </div>
    </div>
  )
}

export default ByField

