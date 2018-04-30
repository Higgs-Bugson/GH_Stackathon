import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email, userId, name } = props

  return (
    <div>
      <h1>Welcome, {name}</h1>
      <button id="adventure">Create a new Adventure</button>
      <Link to={`/activities/${props.userId}`}>
        <button id="adventure2">Adventures</button>
      </Link>
      <button id="subadv1">Active</button>
      <button id="subadv2">Completed</button>
      <button id="subadv3">Join Acitivity</button>
    </div>


  )
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
    userId: state.user.id,
    name: state.user.name
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
