import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectPayment} from '../Actions/payment-actions';
import './payment-list';

class PaymentList extends Component {
        

        createListPayments() {
            return this.props.payments.map((payment) => {
                return (
                    <li className="payment-container"
                        key={payment.id.toString()}
                        onClick={() => this.props.selectPayment(payment)}
                    >
                       <div className="payment-content">{payment.name} </div>
                    </li>
                );
            });
        }
    
        render() {
            return (
                <ul>
                    {this.createListPayments()}
                </ul>
            );
        }
    
    }
    

    function mapStateToProps(state) {
        return {
            payments: state.payments
        };
    }

    function matchDispatchToProps(dispatch){
        return bindActionCreators({selectPayment: selectPayment}, dispatch)
    }
    
    
    export default connect(mapStateToProps, matchDispatchToProps)(PaymentList);