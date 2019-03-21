 import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import "./home.css"
import Center from 'react-center';
import Search from "../search/index";
import Footer from "../footer";
import CondNav from "../condnav";
//import Footer from "../footer";
const Homepage = () => {

  return (
   <div> 
      <CondNav/><br/><br/><br/><br/><br/><br/><br/><br/>
      <div class="container mt-5">
    <Search/>
    </div>
   <div class="footer">
 
   </div>
   </div>
   
     
  );
};

export default Homepage;