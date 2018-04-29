import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store, { me } from '../store';
import { SingleActivity, PersonalPage, Home, UserHome, Navbar, Login } from './index.js';


class Main extends Component {

    componentDidMount() {

        this.props.loadInitialData()

    }

    render() {
        const { isLoggedIn } = this.props

        return (
            <div>
                <Navbar />
                <main>
                    <Switch>

                        <Route exact path="/" component={Home} />
                        <Route path="/activities/:userId/:activityId" component={SingleActivity} />
                        <Route path="/activities/:userId/" component={PersonalPage} />
                        {
                            isLoggedIn &&
                            <Switch>
                                {/* Routes placed here are only available after logging in */}
                                <Route path="/Home" component={UserHome} />
                            </Switch>
                        }
                        {/* Displays our Login component as a fallback */}

                        <Route component={Login} />

                        <Redirect to="/" />
                    </Switch>
                </main>
            </div>
        );
    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
        // Otherwise, state.user will be an empty object, and state.user.id will be falsey
        isLoggedIn: !!state.user.id,
        userId: state.user.id
    }
}

const mapDispatch = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(me())
        }

    }
}


// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))

/**
 * PROP TYPES
 */
Main.propTypes = {
    loadInitialData: PropTypes.func.isRequired,
    isLoggedIn: PropTypes.bool.isRequired
}


