import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, Icon } from 'antd'
import { MyContext } from '../../Context'

const SecondaryMenu = () => {
  const [current, setCurrent] = useState('Main')

   const handleClick = e => {
    setCurrent(e.key)
  }

    return (
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
        <Menu.Item key="Main">
          <MyContext.Consumer>
            {({state})=> (state.place === 'Becas' || state.place === 'becas' ? 
            <NavLink exact to="/">
              <Icon type="container" />
              <MyContext.Consumer>{({state})=>(state.place).toUpperCase()}</MyContext.Consumer>
            </NavLink> :               
            <NavLink exact to="/">
              <Icon type="container" />
              <MyContext.Consumer>{({state})=>state.place.toUpperCase()}</MyContext.Consumer>
            </NavLink>)}
          </MyContext.Consumer>
        </Menu.Item>
      </Menu>
    )
  }

  export default SecondaryMenu
