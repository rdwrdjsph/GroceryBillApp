import React, { Component } from 'react';
import BasketComponent from './components/BasketComponent';
import HeaderComponent from './components/HeaderComponent';
import ItemListCartComponent from './components/ItemListCartComponent';


class ItemsCart extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <br />
                <div className="container">
                    <ItemListCartComponent />
                </div>

            </div>
        );
    }
}

export default ItemsCart;