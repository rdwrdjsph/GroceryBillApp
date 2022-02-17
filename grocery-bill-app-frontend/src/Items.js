import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ItemListComponent from './components/ItemListComponent';

class Items extends Component {
    render() {
        return (
            <div>
            <HeaderComponent />
            <br/>
              <div className="container"> 
                  <ItemListComponent />
              </div>
            <FooterComponent />
        </div>
        );
    }
}

export default Items;