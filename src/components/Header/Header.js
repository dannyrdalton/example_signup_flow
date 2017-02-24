import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Example Signup Flow</h1>
    <Link to='/pinfo' activeClassName='route--active'>
      Start Signup
    </Link>
  </div>
)

export default Header
