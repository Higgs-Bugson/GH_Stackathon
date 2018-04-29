import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchSingleActivity } from '../store';
import axios from 'axios'

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
                <div class="square">
                    <div class="content">
                        <div class="table">
                            <div class="table-cell">
                                <img src={this.props.activity.image} />

                            </div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="content">
                        <div class="table">
                            <div class="table-cell numbers">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="square">
                    <div class="content">
                        <div class="table">
                            <div class="table-cell numbers">
                                3.9/5
                </div>
                        </div>
                    </div>
                </div>


                <div class="square">
                    <div class="content">
                        <div class="table">
                            <div class="table-cell">

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

