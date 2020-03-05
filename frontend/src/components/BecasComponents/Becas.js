import React, { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../Context'
import axios from 'axios'
import { Button, Card } from 'antd'
import { Link } from 'react-router-dom'

const Becas = props => {
  const [becas, setBecas] = useState([])
  const { changePlace } = useContext(MyContext)
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/beca`)
    .then(({data}) => {
        setBecas(prevState => {
          return [
            ...prevState,
            ...data.becas
          ]
        })
    })
    .catch(err => console.log(err))
    changePlace('PRINCIPAL')
  }, [changePlace, baseURL])

  return(
    <div>
    <div className="imgContainer">
    <h2>CARGAS</h2>
    </div>
    <div style={{ background: '#ECECEC', padding: '10px' }} className="container">
      {becas.map(beca=>{
        return(
          <Card bordered={false} style={{ width: 350, height: 270 }} className="card" key = {beca._id}>
              <div className="">
              <img src={beca.image} alt="img"/>
              <h3>{beca.title}</h3>
              <hr/>
              <p>{beca.description}</p>
              <hr/>
              <p>{beca.field}</p>
              <hr/>
              <p>{beca.endDate}</p>
              </div>
              <div className="bottom">
              <Link to={`/beca/${beca._id}`}>
              <Button type="primary">Ver detalles</Button>
              </Link>
              </div>
          </Card>
        )
      })}

    </div>
    </div>
  )
}

export default Becas
