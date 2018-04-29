import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchActivities } from '../store';
import axios from 'axios';

export class PersonalPage extends Component {
    componentDidMount() {
        console.log("THIS.PROPS", this.props)
        const userId = this.props.match.params.userId
        // const activityThunk = fetchActivities(userId);
        // store.dispatch(activityThunk);

        this.props.loadActivities(userId)
    }
    render() {
        const userId = this.props.match.params.userId

        return (

            <div className="home-container">
                {
                    this.props.activities.map((activity, idx) => {
                        return (
                            <span key={idx} className="all-item">
                                <Link to={`/activities/${userId}/${activity.id}`}>
                                    <img src={activity.image} />
                                    <div>
                                        <span>{activity.name}</span>
                                    </div>
                                </Link>
                            </span>
                        )
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("STATE:::::::  ", state)
    return {
        activities: state.activities
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadActivities(userId) {
            dispatch(fetchActivities(userId))
        }
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PersonalPage))