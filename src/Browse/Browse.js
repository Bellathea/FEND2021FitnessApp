import React from 'react';
import styled from 'styled-components';
import MontserratRegular from '../fonts/Montserrat/MontserratRegular.ttf';
import ProgramContainer from './ProgramContainer';
import { Route } from 'react-router-dom';

const StyledHeadingTwo = styled.h2`
  margin-left: 3%;
  margin-bottom: 0;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 700;
  font-size: 24px;
  line-height: 29.26px;
`;

const StyledSubText = styled.div`
  margin-left: 3%;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
`;

const Browse = props => {
    return (
        <div>
            <StyledHeadingTwo>Browse</StyledHeadingTwo>
            <br/>
            <StyledSubText>Filter</StyledSubText>
            <br/>

            <ProgramContainer TitelProgramm="Titel des Programms" />
            <ProgramContainer TitelProgramm="Titel des Programms" />
            <ProgramContainer TitelProgramm="Titel des Programms" />
            <ProgramContainer TitelProgramm="Titel des Programms" />
            <Route path="/Browse" />
        </div>
    );
};

export default Browse;