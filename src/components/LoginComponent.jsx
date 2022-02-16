import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import uiImg from '../images/undraw_shopping_app_flsj.png'
import ClerkService from '../services/ClerkService';

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           clerkId: '',
           name: '',
           password: '',
           msg: ''
        }

        this.changeClerkIdHandler = this.changeClerkIdHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
    }

    componentDidMount() {
        ClerkService.getClerkById(this.state.clerkId).then( (res) => {
            let clerk = res.data;
            this.setState({
                clerkId: clerk.clerkId,
                name: clerk.name,
                password: clerk.password
            });
        });
    }

    changeClerkIdHandler = (event) => {
        this.setState({clerkId: event.target.value});
    }

    changePasswordHandler = (event) => {
        this.setState({password: event.target.value});
    }


    login = (e) => {
        e.preventDefault();
        if(this.state.clerkId == 12345 && this.state.password == "password") {
            this.props.history.push("/items");
        }   
        else {
            this.setState({msg: "Your Clerk Id or Password is Incorrect!"}) ;
        }
    }

    render() {
        return (
            <div>
                <div className="container" style={{paddingTop: "2%"}}>
                  <div className="row">
                      <div  className="card col-md-4 offset-md-1 offset-md-1">
                          <br/>
                          <h3 className="text-center">Clerk Login</h3>
                          <div className="card-body">
                              <form>
                                  <div className="form-group">
                                      <label>Clerk Id:</label>
                                      <input type="number" placeholder="Clerk ID" name="clerkId" className="form-control" 
                                       onChange={this.changeClerkIdHandler}/>
                                  </div><br/>
                                  <div className="form-group">
                                      <label>Password:</label>
                                      <input type="password" placeholder="Password" name="password" className="form-control" 
                                       onChange={this.changePasswordHandler}/>
                                  </div><br/>
                                  <div className="row">
                                    <span style={{textAlign: "center", color: "red"}}>{this.state.msg}</span>
                                  </div><br/>
                                  <div className="row">
                                    <button className="btn btn-secondary" onClick={this.login}>Login</button>   
                                  </div><br/>
                                  <div className="row">
                                    <button className="btn btn-secondary" onClick={this.login}>Signup</button>   
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