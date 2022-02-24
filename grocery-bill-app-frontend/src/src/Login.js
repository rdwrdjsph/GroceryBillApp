import React, { Component } from 'react';
import HeaderComponentLogin from './components/HeaderComponentLogin';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';

class Login extends Component {
    render() {
        return (
            <div>
            <HeaderComponentLogin />
            <br/>
              <div className="container"> 
                  <LoginComponent />
              </div>
            <FooterComponent />
        </div>
        );
    }
}

export default Login;