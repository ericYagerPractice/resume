import {
    MDBNavbar,
    MDBNavbarNav
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
                    <a class={currentWindow=="" ? activeClass : inactiveClass} href="/">Home</a>
                    <a class={currentWindow=="Resume" ? activeClass : inactiveClass} href="/Resume">Resume</a>
                    <a class={currentWindow=="Statistics" ? activeClass : inactiveClass} href="#">Statistics</a>
                </nav>
            </MDBNavbarNav>
        </MDBNavbar>
        
        </>
      );
  }

  export default Header