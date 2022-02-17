import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddItemComponent from './components/AddItemComponent';

class AddItem extends Component {
    render() {
        return (
            <div>
            <HeaderComponent />
            <br/>
              <div className="container"> 
                  <AddItemComponent />
              </div>
            <FooterComponent />
        </div>
        );
    }
}

export default AddItem;