import React, { useContext, useState } from 'react'
import { MyContext } from '../../Context'
import{ Button, Tag  } from 'antd'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import AuthService from '../../services/auth'
import Swal from 'sweetalert2'
const { CheckableTag } = Tag

const Profile = props => {
  const { state } = useContext(MyContext)
  const [selectedTags, setSelectedTags] = useState([])
  const [profile, setProfile] = useState({})
  const [form,  , uploadPhoto] = useForm()
  const authService = new AuthService()
  const user = JSON.parse(localStorage.getItem("USER"))
  const tagsFromServer = ['Carnicos', 'Eventos', 'Paqueteria', 
  'Ciencia y Tecnología', 'Expo', 'Otros']

  const updateProfile = () => {
   authService.editProfile(form, user._id)
      .then(({ data }) => {
        setProfile(prevState => {
          return {
            ...prevState,
            ...data.user
          }
        })
        Swal.fire({
          position: 'top-end',
          type: 'success',
          title: '¡Imagen de perfil editada!',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag)
    console.log('Estás interesado en: ', nextSelectedTags)
    setSelectedTags(prevState => ({
      nextSelectedTags
    }))
  }

 if(!state.user)return <p>Loading...</p>
 return(
  <div className="profile">
    <div className="profileContainer">

      <div className="imgAndName">
      {form.image ? <img src={form.image} alt="profile"/> : <img src={state.user.image} alt="profile"/>}
        <h1>{state.user.username}</h1>
        <MyContext.Consumer>
        {({state}) => (
          (state.user.role === 'ADMIN' || 'USER' ? <div>
            <Tag color="#1890ff">
              <Link to="/createBecas">
                OFRECER CARGA
              </Link>
            </Tag> <br/><br/>
            <Tag color="#3B57B7">
              <Link to="/createPremio">
                OFRECER SERVICIOS
              </Link>
            </Tag>
            </div> : <div className="intro">
            </div>)
        )}
        </MyContext.Consumer>
      </div>


      {/* ----------------------INTERESES----------------------- */}
      <div className="interests">      
        <div>
        <br/>
        <h2>Áreas de interés</h2>
        {tagsFromServer.map(tag => (
          <CheckableTag
            className="pointer"
            key={tag}
            checked={true}
            // onChange={checked => handleChange(tag, checked)}
          >
            {tag}
          </CheckableTag>
        ))}
        </div>
          <br/><br/>
        <label>* Si deseas cambiar tu foto de perfil, selecciona la nueva aquí.</label>
        <input type="file" name="image" onChange={uploadPhoto} required/>
        {form.image ? <Button onClick={updateProfile}>Guardar</Button> : ''}
      </div>


    </div>
  </div>
)
}

export default Profile