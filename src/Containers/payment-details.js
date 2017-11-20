import React, {Component} from 'react';
import {connect} from 'react-redux';

class PayDetails extends Component{
    
    render(){
        if(!this.props.payment){
            return(<div>Select Payment to see details </div>);
        }
        return(
            <div>
                <h4>Name Company:{this.props.payment.name} </h4>
                <h4>monthly fee:{this.props.payment.money} </h4>
                <h4>Description:{this.props.payment.description}</h4>
                <h4>Cancellation Date:{this.props.payment.datePaid}</h4>
                <h4>Cutoff Date:{this.props.payment.dateExpires}</h4>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        payment: state.activePay
    };
}

export default connect(mapStateToProps)(PayDetails);