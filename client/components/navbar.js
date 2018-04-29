import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

function Navbar(props) {
    console.log("inside the navbar")
    const { user } = props;

    return (

        <div >
            <Link to={'/'}>
                <img src="https://www.gladiatorrealestateclub.com/images/money%20growth.png" className="logo" />
            </Link>
        </div>
    );
}

const mapStateToProps = function (state) {
    return {
        userId: state.userId
    };
};

export default connect(mapStateToProps)(Navbar);

