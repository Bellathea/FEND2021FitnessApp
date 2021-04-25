import React from 'react';
import styled from 'styled-components';
import MontserratRegular from '../fonts/Montserrat/MontserratRegular.ttf';
import home from  '../img/home.svg';
import browse from '../img/browse.svg';
import profile from '../img/profile.svg';
import { Link } from 'react-router-dom';

const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: #F5EBDD;
  color: #1D2A73;
`;

const StyledNavbarIcons = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  height: 80px;
`;

// const styledLink = styled.Link`
//   color: red;
//   font-family: ${MontserratRegular};
// `;

const navbar = (props) => {
    return (
    <StyledNavbar>
        <StyledNavbarIcons>
          <img src={home} alt="Home" />
          <Link to='/'>HOME</Link>
        </StyledNavbarIcons>

        <StyledNavbarIcons>
          <img src={browse} alt="Home" />
          <Link to='/Browse'>BROWSE</Link>
        </StyledNavbarIcons>

        <StyledNavbarIcons>
          <img src={profile} alt="Home" />
          <a href='/'>PROFIL</a>
        </StyledNavbarIcons>
    </StyledNavbar>
    )
};

export default navbar;