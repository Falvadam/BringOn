import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Card } from 'antd'
import { MyContext } from '../../Context'

const All = () => {
  const [bpc, setBPC] = useState([])
  const { changePlace } = useContext(MyContext)
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  useEffect(() => {
    axios.get(`${baseURL}/api/becapremioyconcurso`)
    .then(({data}) => {
        setBPC(prevState => {
          return [
            ...prevState,
            ...data.all[0],
            ...data.all[1]
          ]
        })
    })
    .catch(err => console.log(err))
    changePlace('Home')
  }, [changePlace, baseURL])

  return(
    <div>
      <div className="imgContainer">
      <h2>BECAS, CARGAS</h2>
      </div>
      <div style={{ background: '#ECECEC', padding: '10px' }} className="container">
      {bpc.map(bpc=>{
        return(
          <div key = {bpc._id}>
            <Card bordered={false} style={{ width: 350, height: 280 }} className="card" key = {bpc._id}>
              <h3>{bpc.title}</h3><hr/>
              <p>{bpc.description}</p>
              <Link to={`/${(bpc.classification === undefined) ? 'beca' : 'pc'}/${bpc._id}`}>
              <Button type="primary">Ver detalles</Button>
              </Link>
            </Card>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default All
