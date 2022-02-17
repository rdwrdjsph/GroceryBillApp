import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ItemService from '../services/ItemService';
import BasketComponent from './BasketComponent';

class ItemListCartComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            items : []
        }
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

    }

    componentDidMount() {
        ItemService.getItem().then((res) => {
            this.setState({ items: res.data});
        });
    }

    addItem() {  
        this.props.history.push("/add-item");
    }
 
    updateItem(itemId) {
        this.props.history.push(`/update-item/${itemId}`);
    }

    deleteItem(itemId) {
        ItemService.deleteItem(itemId).then( res => {
            this.setState({items: this.state.items.filter(item => item.itemId !== itemId)});
        })
    }

    render() {
        return (
            <div>
                <div>
                <h2 className="text-center">Shopping Cart</h2>
                </div><br/>
                <div className="row">
                    <table style={{width: "70%"}} className="table table-hover table-bordered text-center table-light">
                        <thead className="table-dark">
                            <tr>
                                <th>Item ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Discounted</th>
                                <th>Discount Percentage</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.items.map(
                                    item =>
                                    <tr key = {item.itemId}>
                                        <td>{item.itemId}</td>
                                        <td>{item.name}</td>
                                        <td>&#8369;{item.price}</td>
                                        <td>{JSON.stringify(item.discounted)}</td>
                                        <td>{item.discountPercentage}%</td>
                                        <td>
                                            <button onClick={ () => this.deleteItem(item.itemId)} className="btn btn-success">Add to Cart</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <BasketComponent />
                </div>
            </div>
        );
    }
}

export default withRouter(ItemListCartComponent);