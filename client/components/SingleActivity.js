import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchSingleActivity } from '../store';
import axios from 'axios'
import Chart from './Chart'


export class SingleActivity extends Component {

    componentDidMount() {
        const activityId = this.props.match.params.activityId;
        const userId = this.props.match.params.userId;
        const activityThunk = fetchSingleActivity(userId, activityId);

        store.dispatch(activityThunk);
    }



    render() {

        console.log("this. props ", this.props)




        return (


            <div>
                <h3>Hello **Replace** USER </h3>
                <h1>{this.props.activity.name}</h1>
                <h4>{this.props.activity.description}</h4>
                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell">
                                <img src={this.props.activity.image} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell numbers">
                                <Chart />
                                <div>
                                    <button className="payment">Make Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell numbers">
                                Members:
                </div>
                        </div>
                    </div>
                </div>


                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell">

                                Responsive image.
                </div>
                        </div>
                    </div>
                </div>

            </div>

        )

    }

}

const mapStateToProps = (state) => {
    return {
        activity: state.activity[0] || {},
        userId: state.userId
    };
};



export default withRouter(connect(mapStateToProps)(SingleActivity))

