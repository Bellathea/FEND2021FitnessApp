import React from 'react';
import styled from 'styled-components';
import MontserratRegular from '../fonts/Montserrat/MontserratRegular.ttf';

const StyledDiv = styled.div`
  display: flex;
  padding: 50px;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
  background-color: #F5EBDD;
  max-width: 75%;

&:hover {
    background-color: #3EC1F3;
}
`;

const StyledHeadingTwo = styled.h2`
  margin-left: 3%;
  margin-bottom: 0;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 700;
  font-size: 24px;
  line-height: 29.26px;
`;


const ProgramContainer = props => {
    return (
        <div>
            <StyledDiv>
                <StyledHeadingTwo>{props.TitelProgramm}</StyledHeadingTwo>
            </StyledDiv>
        </div>
    );
};

export default ProgramContainer;