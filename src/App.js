import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserDetails from './Containers/user-details';
import PaymentList from './Containers/payment-list';
import PaymentActive from './Containers/payment-details';

class App extends Component {
  render() {
    return (
   
     <div className="App-container">
       <header>
       <h2>User Details</h2>
         </header>
        <div className="app-subcontainer"> 
         <UserDetails />
         </div>
       <nav className="nav">
            <h2>Payment list</h2>
            <PaymentList />
       </nav>
       <article className="article">
       <h2>Payment details</h2>
         <PaymentActive />
       </article>    
    </div>

   
    );
  }
}

export default App;
