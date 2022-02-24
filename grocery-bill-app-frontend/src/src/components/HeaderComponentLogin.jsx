import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor: "#03256C"}}>
                        <div className="navbar-brand" style={{paddingLeft:"10px"}}>Grocery Bill Application</div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;