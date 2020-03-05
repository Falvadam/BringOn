import React, {useContext, useEffect} from 'react'
import CarouselC from './HomeComponents/CarouselC';
import { MyContext } from '../Context'
import { Tabs, size, large ,Button, Popover } from 'antd'
import { NavLink } from 'react-router-dom'

const Home = () => {
    const {changePlace } = useContext(MyContext)

    useEffect(() => {
      changePlace('Home')
      
    }, [changePlace])
    return (
      
    <div>
     <CarouselC/>
        <Button type="primary" size="large">
            <NavLink exact to="/signup" activeClassName = "nav-active">
                Signup
            </NavLink>
        </Button>
        <Button type="primary" size="large">
            <NavLink exact to="/login" activeClassName = "nav-active">
                Login
            </NavLink>
        </Button>
    </div>
    )
  }

export default Home
