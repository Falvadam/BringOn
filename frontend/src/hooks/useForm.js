import { useState } from 'react'
import axios from 'axios'

const useForm = () => {
  const [form, setForm] = useState({})
  const isProduction = process.env.NODE_ENV === "production"
  const baseURL = isProduction ? 'https://becasmx.herokuapp.com' : 'http://localhost:3000'

  const handleInputs = e => {
    e.persist()
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const uploadPhoto = async e => {
    const file = new FormData()
    file.append('image', e.target.files[0])
    const {data: { image }} = await axios.post(`${baseURL}/upload`, file)
    setForm(prevState => ({
      ...prevState,
      image
    }))
  }

  return [form, handleInputs, uploadPhoto]
}

export default useForm