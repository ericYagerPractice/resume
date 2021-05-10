import React, {useState, useEffect, useCallback} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInputGroup, MDBInput, MDBSelectInput, MDBSelect, MDBSelectOptions, MDBSelectOption} from "mdbreact";
import {stateData} from '../data/stateData'

const mainResumeContentInitialState={type: "", email: "", city: "", state: "", overview: ""}
const experienceContentInitialState=[{company:"", startDate:"", endDate:"", location:"", overview:"",bullets:[""]}]


function Resume() {
  console.log(stateData)
  const [mainContent, setMainContent] = useState(mainResumeContentInitialState)
  const [experienceContent, setExperienceContent] = useState(experienceContentInitialState)
  const [state, setState] = useState("Tn")

  function setContentData(target, key,value){
    setMainContent({...target, [key]:value})
    console.log(mainContent)
  }

  return (
    <MDBContainer>
      <MDBRow fluid className="text-center border-bottom border-light mb-3">
          <MDBCol className="text-center"><h1><strong>Create New Resume</strong></h1></MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="6" sm="4" className="text-center">
          <h3><strong>Main Resume Content</strong></h3>
          <MDBInput
            material 
            containerClassName="mb-3 mt-0" 
            label="Type (software manager, program manager)"
            onChange={event=>setContentData(setMainContent,"type",event.target.value)}/>
          <MDBInput
            material
            label="Email Address"
            containerClassName="mb-3 mt-0"
            onChange={event=>setContentData(setMainContent,"email",event.target.value)}
          />
          <MDBRow>
           <MDBCol>
            <MDBInput
              material
              label="City"
              containerClassName="mb-3 mt-0"
              onChange={event=>setContentData(setMainContent,"city",event.target.value)}
            />
           </MDBCol>
           <MDBCol>
            <MDBSelect label="Select State" search options={stateData} getValue={value=> setContentData(setMainContent,"state",value)} />

           </MDBCol> 
          </MDBRow> 
          <MDBInput
            type="textarea"
            className="mb-0"
            prepend="Overview"
            rows="5"
            type="textarea"
            label="3-5 sentence overview"
            onChange={event=>setContentData(setMainContent,"overview",event.target.value)}
          />

        </MDBCol>
        <MDBCol size="6" sm="4">.col-6 .col-sm-4</MDBCol>
        <MDBCol size="6" sm="4">.col-6 .col-sm-4</MDBCol>
      </MDBRow>
    </MDBContainer>
    );
}

export default Resume;

/*
              <MDBSelectOptions>
                <MDBSelectOption disabled>Choose State</MDBSelectOption>
                {stateData.map((state)=>(
                  <MDBSelectOption value={state.value}>{state.text}</MDBSelectOption>
                ))}
              </MDBSelectOptions>
            </MDBSelect>
}
*/