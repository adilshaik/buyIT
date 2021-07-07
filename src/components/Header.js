import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <div className='image'></div>
        <div className='logo'>
          <Link className='logo-link' to='/'>
            buyIT
          </Link>
        </div>
        <ul className='item'>
          <li className='item-group'>
            <Link to='/signin'>
              SignIn
              <i className='fas fa-user'></i>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
