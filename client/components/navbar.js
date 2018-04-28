import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div id="start-logo">

    <div >
      {/* <img alt="logo" src='https://www.gladiatorrealestateclub.com/images/money%20growth.png' /> */}
      <div></div>
      <h1>Plant your future</h1>
    </div>
    <nav >
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          {/* <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a> */}
        </div>
      ) : (
          <div>
            {/* The navbar will show these links before you log in */}
            <Link to="/login">
              <button id="login">Login</button>
            </Link>
            <Link to="/signup" id="signup">Sign Up</Link>
          </div>
        )}
    </nav>
    <body>
    </body>
    {/* <hr /> */}

  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
