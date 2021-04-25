import React from 'react';
import styled from 'styled-components';
import './App.css';
import Dashboard from './Dashboard/Dashboard';
import Navbar from './Navbar/Navbar';
import Browse from './Browse/Browse';
import { Route } from 'react-router-dom';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = props => {

  //change states
  // const switchHandler = () => {
  //   console.log('Clicked!');
  //   setUsersState({
  //     users: [
  //       {name: 'Flo'},
  //     ]
  //   })
  // };

  return (
    <StyledContainer>
      <Route path="/" exact component={Dashboard} />
      <Route path="/Browse" exact component={Browse} />

      <Navbar />
      
      {/* <button onClick = {switchHandler}>Switch Name</button> */}
    </StyledContainer>
  );
};

export default App;