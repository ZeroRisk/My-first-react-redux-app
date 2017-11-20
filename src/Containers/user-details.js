import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import './user-details';

class UserDetail extends Component {
    UserData(){
        return this.props.user.map((user) => {
            return (
            <div className="user-container">
                <div><img src={user.thumbnail} /></div>
                <div>
                <p key={user.id}>Name:{user.name}</p>
                <p>Rut: {user.rut} </p>
                <p>Description: {user.description}</p>
                </div>
            </div>
            );
                

        });
    }
    render() {
        return this.UserData();
    }
}

function mapStateToProps(state) {
    return {
        user: state.users
    };
}

export default connect(mapStateToProps)(UserDetail);
