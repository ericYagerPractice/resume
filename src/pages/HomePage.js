import React from 'react';

import {
  
} from 'mdbreact';
import './HomePage.css';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;
//this is home
class Home extends React.Component {
  
  render() {
    return (
      <>


      </>
    );
  }
}

export default Home;

const styles = {
  appContainer: {
    paddingBottom: 80,
  }
}
