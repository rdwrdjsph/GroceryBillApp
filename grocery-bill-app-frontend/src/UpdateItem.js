import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import UpdateItemComponent from './components/UpdateItemComponent';

class UpdateItem extends Component {
    render() {
        return (
            <div>
            <HeaderComponent />
            <br/>
              <div className="container"> 
                  <UpdateItemComponent />
              </div>
            <FooterComponent />
        </div>
        );
    }
}

export default UpdateItem;