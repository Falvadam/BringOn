import React, {Component} from 'react'
import { Menu, Icon } from 'antd'
import {NavLink} from 'react-router-dom'

const { SubMenu } = Menu

export default class MenuC extends Component {
  state = {
    current: '',
  }

  handleClick = e => {
    if(e.key === 'all'){
      this.setState({current:''})
    } else {
    this.setState({
      current: e.key
    })}
  }

  render(){
    return (
      <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" theme="dark">

        <SubMenu key="becas"
          title={   
            <span className="submenu-title-wrapper">
            <Icon type="container" />
            <NavLink exact to="/becas">
                CARGAS
            </NavLink>
            </span>    
          }
        >
        </SubMenu>

        <SubMenu key="pc"
          title={
            <span className="submenu-title-wrapper">
              <NavLink exact to="/pc"></NavLink>
              <Icon type="container" />
              <NavLink exact to="/pc">
                CONDUCTORES
              </NavLink>
            </span>
          }
        >
        </SubMenu>
      </Menu>
    )
  }
}

