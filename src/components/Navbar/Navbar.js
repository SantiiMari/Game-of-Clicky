import React,{Component}from 'react';
import "./Navbar.css";

class Navbar extends Component {
    render (){
        return (
            <nav className="navbar navbar-defualt navbar-fixed-top">


                <ul>
                    <li className="itemLeft"></li>
                    <li className="itemCenter">Can you remember the Houses?</li>
                    <li className="itemRight">Score: {this.props.score}</li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;




// export default () => (
//   <BrowserRouter>

//     <MDBNav className="justify-content-center">
//       <MDBNavItem>
//         <MDBNavLink active to="#!">Active</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink to="#!">Link</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink to="#!">Link</MDBNavLink>
//       </MDBNavItem>
//       <MDBNavItem>
//         <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
//       </MDBNavItem>
//     </MDBNav>

//   </BrowserRouter>
// );