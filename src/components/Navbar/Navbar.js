import React,{Component}from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render (){
        return (
            <nav className="navbar navbar-defualt navbar-fixed-top">


                <ul>
                    <li className="itemLeft">Can you remember the Houses?</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;
