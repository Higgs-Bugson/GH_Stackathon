import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import store, { fetchSingleActivity, fetchMemberships } from '../store';
import axios from 'axios';
import Chart from './Chart';
import { Web3StateManager } from 'web3-state-manager'
import Contract from '../../paymentLord/payment/build/contracts/Payment.json'
// import { paymentContract } from "./EthereumSetup";
// import Contract from '../../paymentLord/payment/contracts/Payment.sol'

export class SingleActivity extends Component {

    componentDidMount() {
        const activityId = this.props.match.params.activityId;
        const userId = this.props.match.params.userId;
        const activityThunk = fetchSingleActivity(userId, activityId);
        const membershipThunk = fetchMemberships(activityId)

        store.dispatch(activityThunk);
        store.dispatch(membershipThunk);
    }



    render() {

        console.log("this. props ", this.props)
        console.log("contract ", this.props.contract)
        const { contract, account } = this.props;


        return (


            <div >
                <h1>{this.props.activity.name}</h1>
                {/* <img className="singleActivity" src={this.props.activity.image} /> */}
                <h3>{this.props.activity.description}</h3>
                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell">
                                <div className="tables">Members</div>
                                <li>Tania</li>
                                <li>Nicole</li>
                                <li>Aubrey</li>
                                <li>Drea</li>
                                <li>Reija</li>
                                <li>Jill</li>
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
                                    <Web3StateManager contract={Contract} />
                                    {/* <button onClick={() => { contract.payForActivity.call({ from: account }) }} className="payment">Make Payment</button> */}

                                    <button onClick={() => { contract.pay.call(this.props.activity, { from: account }) }} className="payment">Make Payment</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell numbers">
                                <table className="tblCenter" >
                                    <tr>
                                        <th>Itinerary</th>
                                        <th>Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Hotel Room</td>
                                        <td>$500</td>
                                    </tr>
                                    <tr>
                                        <td>Tea Party at Mandarin</td>
                                        <td>$280</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$780</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="square">
                    <div className="content">
                        <div className="table">
                            <div className="table-cell">
                                <img src={this.props.activity.image} />
                                <div></div>
                                <ul> $520 down</ul>
                                <ul>   $260 to go </ul>
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
        userId: state.userId,
        contract: state.contract,
        membership: state.membership || []
    };
};



export default withRouter(connect(mapStateToProps)(SingleActivity))

