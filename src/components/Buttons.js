import React, { Component } from "react";
import {MDBCol} from 'mdbreact'
import '../App.css'

/*
export class AccountButton extends Component{ 
  state={
    admin:false
  };

  async componentDidMount(){
    const returnData = await Auth.currentAuthenticatedUser()
    try{
      this.setState({admin:returnData.signInUserSession.idToken.payload['cognito:groups'].includes('Admin')});
    } catch(err){
      console.log("error checking admin status in buttons.js: ",err);
    }
    
  }

  render(){
    return (
      <MDBDropdown>
        <MDBDropdownToggle caret color="elegant" className="btn btn-rounded z-depth-0">
          <MDBIcon icon="user-circle" size="2x" />
        </MDBDropdownToggle>
        <MDBDropdownMenu basic>
          <MDBDropdownItem header>  Account Options</MDBDropdownItem>
          <MDBDropdownItem href="/Account"><h6><GoShield color='red' /> Go to my account</h6></MDBDropdownItem>
          <MDBDropdownItem href="/Learning"><h6><GoBook color='red' /> Go to my learning</h6></MDBDropdownItem>
          {this.state.admin 
          ? <MDBDropdownItem href="/Admin"  ><h6><MDBIcon icon="tools" className='red-text' /> Go to resume tools</h6></MDBDropdownItem>
          : <MDBDropdownItem disabled  ><h6><MDBIcon icon="tools" className='red-text' /> Go to resume tools</h6></MDBDropdownItem>}
        </MDBDropdownMenu>
      </MDBDropdown>  
    );
  }
}

*/

export function SocialButtons() {
    return(
      <MDBCol className="text-left">
          <ul className="list-unstyled list-inline">  
              <li className="list-inline-item"> 
                  <a href="https://www.facebook.com/ewesley11/" className="btn-floating btn-sm btn-fb mx-1" target="_blank"> 
                      <i className="fab fa-facebook-f"> </i>  
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="https://twitter.com/EricYager3" className="btn-floating btn-sm btn-tw mx-1"> 
                      <i className="fab fa-twitter"> </i> 
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="https://www.linkedin.com/in/eric-yager-pmp/" className="btn-floating btn-sm btn-li mx-1" target="_blank"> 
                      <i className="fab fa-linkedin-in"> </i> 
                  </a>  
              </li> 
          </ul> 
      </MDBCol>
    )
}
