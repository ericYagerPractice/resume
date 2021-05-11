import React from "react";
import {MDBCol} from 'mdbreact'
import '../App.css'

export function SocialButtons() {
    return(
      <MDBCol className="text-left">
          <ul className="list-unstyled list-inline">  
              <li className="list-inline-item"> 
                  <a href="https://www.facebook.com/ewesley11/" className="btn-floating btn-sm btn-fb mx-1" target="_blank" rel="noreferrer"> 
                      <i className="fab fa-facebook-f"> </i>  
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="https://twitter.com/EricYager3" className="btn-floating btn-sm btn-tw mx-1" target="_blank" rel="noreferrer"> 
                      <i className="fab fa-twitter"> </i> 
                  </a>  
              </li> 
              <li className="list-inline-item"> 
                  <a href="https://www.linkedin.com/in/eric-yager-pmp/" className="btn-floating btn-sm btn-li mx-1" target="_blank" rel="noreferrer"> 
                      <i className="fab fa-linkedin-in"> </i> 
                  </a>  
              </li> 
          </ul> 
      </MDBCol>
    )
}
