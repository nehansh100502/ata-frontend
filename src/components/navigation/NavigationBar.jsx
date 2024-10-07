import React from 'react';
import ImageLogo from '../../assets/logo-navbar.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
     faUser
} from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom';
import './NavigationBar.css'


function NavigationBar() {
  return (
    <div className="navbar">
       <img src={ImageLogo} alt="img1" width="200px" />
        <Link to="/Landing-Page"><i className="fa fa-fw fa-home"></i> Home</Link>
        <Link to="/Home-jsx"> Category</Link>
        <Link to="/With-Rating"> Blog</Link>
        <Link to="/Video-chat"> Wallet</Link>
        <Link to="#">
          <input type="text" id="input" placeholder=" Name Sports Category..." style={{ borderRadius: '25px',width:'200%' }} />
        </Link>
        <span style={{float:'right',margin:'1% 0% 0% 14%'}}>
        <Link to="/SignUp-from">Register</Link>
        <Link to="/SignIn-form"><FontAwesomeIcon icon={faUser}/>Sign In</Link></span>
    </div>
  );
}

export default NavigationBar;