import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from 'antd'
import { MyContext } from '../../Context'

const Premios = () => {
  const [pcs, setPC] = useState([])
  const {changePlace} = useContext(MyContext)
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/pc`)
    .then(({data}) => {
        setPC(prevState => {
          return [
            ...prevState,
            ...data.pcs
          ]
        })
    })
    .catch(err => console.log(err))
    changePlace('Principal')
  }, [changePlace, baseURL])

  return(
    <div>
      <div className="imgContainer">
      <h2>Conductores</h2>
      </div>
      <div style={{ background: '#ECECEC', padding: '10px' }} className="container">
      {pcs.map(pc=>{
        return(
          <Card bordered={false} style={{ width: 350, height: 280 }} className="card" key = {pc._id}>
            <h3>{pc.title}</h3>
            <hr/>
            <p>{pc.description}</p>
              <Link to={`/pc/${pc._id}`}>
              <Button type="primary" className="button">Ver detalles</Button>
              </Link>
          </Card>
        )
      })}
      </div>
    </div>
  )
}

export default Premios

