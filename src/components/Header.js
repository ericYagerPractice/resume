import {
    MDBNavbar,
    MDBNavbarNav,
    MDBIcon,
    MDBBtn
  } from 'mdbreact';
  import React, { useState, useEffect } from "react";
  import '../static/css/Header.css';

  function Header(){ 
      const [currentWindow,setCurrentWindow] = useState(null)
      const activeClass="flex-sm-fill text-sm-center nav-link active" 
      const inactiveClass="flex-sm-fill text-sm-center nav-link"

      useEffect(()=>{
          setCurrentWindow(window.location.href.split("/")[3])
      })

      return (
        <>
        <MDBNavbar color='elegant-color' className='border-primary border-bottom border-top-0 border-left-0 border-right-0' dark expand='md' fixed='top' scrolling>
            <MDBNavbarNav left>
                <nav class="nav nav-pills flex-column flex-sm-row">
                    <a className={currentWindow=="" ? activeClass : inactiveClass} href="/">Home</a>
                    <a className={currentWindow=="Resume" ? activeClass : inactiveClass} href="/Resume">Resume</a>
                    <a className={currentWindow=="Statistics" ? activeClass : inactiveClass} href="#">Statistics</a>
                </nav>
            </MDBNavbarNav>
            <MDBNavbarNav right>
                <a href="https://github.com/ericYagerPractice/resume" target="_blank" className="btn btn-sm btn-dark btn-rounded">Check out repo &nbsp;<MDBIcon size="1x" className="text-light" icon="code-branch" /></a>
                
            </MDBNavbarNav>
        </MDBNavbar>
        
        </>
      );
  }

  export default Header