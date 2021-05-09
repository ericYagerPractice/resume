import {
    MDBNavbar,
    MDBNavbarNav,
    MDBCollapse,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler
  } from 'mdbreact';
  import React, { useState } from 'react';
  import '../static/css/Header.css';
  
  export default function Header() { 
    return (
        <>
          <MDBNavbar color='elegant-color' className='border-danger border-bottom border-top-0 border-left-0 border-right-0' dark expand='md' fixed='top' scrolling>
            <MDBCollapse id='mainNavbarCollapse' navbar >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to='/'
                  >
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to='/About'
                  >
                    <strong>Metrics</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
             
            </MDBCollapse>
          </MDBNavbar>
      
      </>
    );
  }