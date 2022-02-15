import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uiImg from '../images/undraw_shopping_app_flsj.png'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    login = (e) =>{
        e.preventDefault();
        this.props.history.push("/items");
    }

    render() {
        return (
            <div>
                <div className="container" style={{paddingTop: "2%"}}>
                  <div className="row">
                      <div className="card col-md-4 offset-md-1 offset-md-1">
                          <br/>
                          <h3 className="text-center">Clerk Login</h3>
                          <div className="card-body">
                              <form>
                                  <div className="form-group">
                                      <label>Username:</label>
                                      <input type="text" placeholder="Username" name="name" className="form-control" 
                                      value={this.state.name} onChange={this.changeNameHandler}/>
                                  </div><br/>
                                  <div className="form-group">
                                      <label>Password:</label>
                                      <input type="password" placeholder="Password" name="price" className="form-control" 
                                      value={this.state.price} onChange={this.changePriceHandler}/>
                                  </div><br/>
                                  <div className="row">
                                    <button className="btn btn-success" onClick={this.login}>Login</button>   
                                  </div><br/>
                                  <div className="row">
                                    <button className="btn btn-danger" onClick={this.login}>Signup</button>   
                                  </div>
                              </form>
                          </div>
                      </div>
                      <img className="w-50" src={uiImg} alt=""/>
                  </div>
              </div>
            </div>
        );
    }
}

export default withRouter(LoginComponent);