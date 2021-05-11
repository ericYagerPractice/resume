import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBSelect } from "mdbreact";
import {stateData} from '../data/stateData'

const mainResumeContentInitialState={type: "", email: "", city: "", state: "", overview: ""}
const experienceContentInitialState=[{company:"", startDate:"", endDate:"", city: "", state: "", overview:"",bullets:[""]}]


function Resume() {
  const [mainContent, setMainContent] = useState(mainResumeContentInitialState)
  const [experienceContent, setExperienceContent] = useState(experienceContentInitialState)

  function setContentData(targetFunction,targetVariable,key,value){
    targetFunction({...targetVariable,[key]: value })
  }

  return (
    <MDBContainer>
      <MDBRow fluid="true" className="text-center border-bottom border-light mb-3">
          <MDBCol className="text-center"><h1><strong>Create New Resume</strong></h1></MDBCol>
      </MDBRow>
      <MDBRow>
        <h3><strong>Main Resume Content</strong></h3>
        <MDBInput
          material ="true"
          className="mb-3 mt-0" 
          label="Type (software manager, program manager)"
          onChange={event=>setContentData(setMainContent,mainContent,"type",event.target.value)}/>
        <MDBInput
          material = "true"
          label="Email Address"
          className="mb-3 mt-0"
          onChange={event=>setContentData(setMainContent,mainContent,"email",event.target.value)}
        />
        <MDBRow>
          <MDBCol>
          <MDBInput
            material = "true"
            label="City"
            className="mb-3 mt-0"
            onChange={event=>setContentData(setMainContent,mainContent,"city",event.target.value)}
          />
          </MDBCol>
          <MDBCol>
          <MDBSelect label="Select State" search options={stateData} getValue={value=> setContentData(setMainContent,mainContent,"state",value[0])} />

          </MDBCol> 
        </MDBRow> 
        <MDBInput
          type="textarea"
          className="mb-0"
          prepend="Overview"
          rows="5"
          label="3-5 sentence overview"
          onChange={event=>setContentData(setMainContent,mainContent,"overview",event.target.value)}
        />
        

      </MDBRow>
      <MDBRow>
      <h3><strong>Experience Content</strong></h3>
        <MDBInput
          material ="true"
          className="mb-3 mt-0" 
          label="Company Name"
          onChange={event=>setContentData(setExperienceContent,experienceContent,"company",event.target.value)}/>
        <MDBRow>
          <MDBCol>
          <MDBInput
            material = "true"
            label="City"
            className="mb-3 mt-0"
            onChange={event=>setContentData(setExperienceContent,experienceContent,"city",event.target.value)}
          />
          </MDBCol>
          <MDBCol>
          <MDBSelect label="Select State" 
            search 
            options={stateData} 
            getValue={value=> 
              setContentData(setExperienceContent,experienceContent,"state",value[0])} 
          />
          </MDBCol> 
        </MDBRow> 
        <MDBRow>
          <MDBCol>
            {/*Need to use bootstrap elements due to hook errors with MDBootstrap5*/}
            <label htmlFor="experience-startdate-input" class="col-2 col-form-label">Start date</label>
            <div class="col-10">
              <input className="form-control" type="date" id="experience-startdate-input" onChange={((event)=>{setContentData(setExperienceContent,experienceContent,"startDate",event.target.valueAsDate)})}/>
            </div>
          </MDBCol>
          <MDBCol>
            <label htmlFor="experience-enddate-input" class="col-2 col-form-label">End date</label>
            <div class="col-10">
              <input className="form-control" type="date" id="experience-enddate-input" onChange={((event)=>{setContentData(setExperienceContent,experienceContent,"endDate",event.target.valueAsDate)})} />
            </div>
          </MDBCol>
        </MDBRow>
        <MDBInput
          type="textarea"
          className="mb-0"
          prepend="Overview"
          rows="5"
          label="3-5 sentence overview"
          onChange={event=>setContentData(setExperienceContent,experienceContent,"overview",event.target.value)}
        />


      </MDBRow>
    </MDBContainer>
    );
}

export default Resume;

/*
  id: ID!
  company: String!
  startDate: AWSDateTime!
  endDate: AWSDateTime!
  location: String!
  overview: String!
  bullets: [String]!
  ResumeID: ID!
}
*/