import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

const Navbar = ({ userId, isLoggedIn, handleClick }) => (

    < div >
        <nav className="header-container">
            <span>
                <Link to={'/'}>
                    <img src="https://www.gladiatorrealestateclub.com/images/money%20growth.png" className="logo" />
                </Link>
            </span>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle btn-lg" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
</button>
                <div className="dropdown-menu dropdown-menu-right " aria-labelledby="dropdownMenuButton">
                    {isLoggedIn
                        ? <Link to="/home" className="dropdown-item">Account Home</Link>
                        : <Link to="/login" className="dropdown-item" >Login</Link>}
                    {isLoggedIn
                        ? <a href="#" onClick={handleClick} className="dropdown-item" >Logout</a>
                        : <Link to="/signup" className="dropdown-item">Sign Up</Link>}
                </div>

            </div>

        </nav>
        <hr />
    </div >
);


const mapStateToProps = function (state) {
    return {
        userId: state.userId,
        isLoggedIn: !!state.user.id,
    };
};
const mapDispatchToProps = dispatch => {
    return {
        handleClick() {
            dispatch(logout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

Navbar.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}
