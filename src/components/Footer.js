import React from 'react';
import { 
    MDBFooter,
    MDBRow,
    MDBCol,
} from 'mdbreact';
import { SocialButtons } from './Buttons'

export default function Footer() { 
    return(
        <>
            <MDBFooter color="elegant-color-dark" className="page-footer font-small fixed-bottom mt-2 px-3 pt-0 pb-0" >  
                <MDBRow className="d-flex align-items-center">
                    <SocialButtons />
                    <MDBCol>
                        <p className="text-right">&copy; {new Date().getFullYear()} Copyright: <a href="https://www.ericyager.technology"> Eric Yager </a></p>
                    </MDBCol>
                </MDBRow>
            </MDBFooter>  
        </>
    )
}