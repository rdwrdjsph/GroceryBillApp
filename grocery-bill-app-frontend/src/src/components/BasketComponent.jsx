import React from 'react';

export default function BasketComponent(props) {
    const { cartItems } = props;
    return (
        <div className="block col-3">
            <h5>Cart Items</h5>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-2">
                   
                </div>
                <div className="col-2 text-right">

                </div>
            </div>
        </div>
    );
}