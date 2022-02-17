import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import LoginComponent from './components/LoginComponent';

class Login extends Component {
    render() {
        return (
            <div>
            <HeaderComponent />
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