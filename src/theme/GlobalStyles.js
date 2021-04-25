import React, {useState} from 'react';
import MontserratRegular from './fonts/Montserrat/MontserratRegular.ttf';
import styled from 'styled-components';

const StyledHeadingOne = styled.h1`
  margin-left: 3%;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 700;
  font-size: 36px;
  line-height: 65px;
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

const StyledText = styled.div`
  margin-left: 3%;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 400;
  font-size: 16px;
  line-height: 10px;
  margin-bottom: -1%;
`;

const StyledSubText = styled.div`
  margin-left: 3%;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
`;