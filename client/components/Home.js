import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Home = ({ handleClick, isLoggedIn }) => (
  <div id="start-logo">
    <div>
      <h1>Plant your adventure</h1>
      <hr />
      <br />
      <br />
      <h5> Think about the experience, not the bills</h5>

    </div>

    <nav >
      {isLoggedIn ? (
        <div>
          {/* The Home will show these links after you log in */}
          {/* <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a> */}
        </div>
      ) : (
          <div>
            {/* The Home will show these links before you log in */}
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

export default connect(mapState, mapDispatch)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
