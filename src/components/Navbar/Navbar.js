import React,{Component}from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";
import "./Navbar.css";

class Navbar extends Component {
    render (){
        return (
            <BrowserRouter>

    <MDBNav className="justify-content-center">
      <MDBNavItem>
        <MDBNavLink active to="#!">Can you win the 7 Kingdoms?</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Score: {this.props.score}</MDBNavLink>
      </MDBNavItem>
  
    </MDBNav>

  </BrowserRouter>
          
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




