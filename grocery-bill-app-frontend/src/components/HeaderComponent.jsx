import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { BiLogOut } from "react-icons/bi";

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    logout = (e) => {
        e.preventDefault();
        this.props.history.push("/login");
    } 

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#03256C"}}>
                        <div className="navbar-brand" style={{paddingLeft:"10px"}}>Grocery Bill Application</div>
                        <div className="navbar-brand" style={{paddingLeft: "70%"}}><button className="btn btn-danger" style={{backgroundColor: "#03256C",border: "0px"}} onClick={this.logout}><BiLogOut/> Logout</button></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);