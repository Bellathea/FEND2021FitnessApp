import React, {useState} from 'react';
import MontserratRegular from './fonts/Montserrat/MontserratRegular.ttf';
import styled from 'styled-components';
import './App.css';
import User from './User/User';
import Workout from './User/Workout';
import Program from './User/Program';
import Kcal from './User/Kcal';
import dashboardPicture from './img/dashboardPicture.svg';
import home from './img/home.svg';
import browse from './img/browse.svg';
import profile from './img/profile.svg';


//class-approach
// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Max', age: 28 },
//       { name: 'Manu', age: 29 },
//       { name: 'Stephanie', age: 26 }
//     ],
//     otherState: 'some other value'
//   }

//   render () {
//     return (
//       <div className="App">
//       <User name="Anna"  />
//       <Workout />
//       <button onClick = {switchHandler}>Switch</button>
//     </div>
//     )
//   };
// }

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreetingDiv = styled.div`
  margin-left: 3%;
  margin-top: 5%;
`;

const DashPicture = styled.div`
  display: flex;
  width: 90%;
  object-fit:cover;
  align-self: center;
  margin: 0;
  background-color: #F5EBDD;
  padding: 2%;
`;

const YogaPicture = styled.img`
 width: 100%;
`;

const StyledHeadingOne = styled.h1`
  margin-left: 3%;
  color: #1D2A73;
  font-family: ${MontserratRegular};
  font-weight: 700;
  font-size: 36px;
  line-height: 43.88px;
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
`;

const App = props => {
  const [usersState, setUsersState] = useState(
    {
    users: [
      {name: 'Anna'}
    ]
    }
  );

  //change states
  // const switchHandler = () => {
  //   console.log('Clicked!');
  //   setUsersState({
  //     users: [
  //       {name: 'Flo'},
  //     ]
  //   })
  // };

  let greetingValue = () => {
    let now = new Date();
    let hrs = now.getHours();
    
    if (hrs < 12) {
      greetingValue = "Morgen";
    } else if (hrs < 17) {
      greetingValue = "Tag";
    } else {
      greetingValue = "Abend";
    }

    console.log(greetingValue);
    return greetingValue;
  };

  return (
    <StyledContainer>
      <GreetingDiv>
        <StyledHeadingOne>
          <User greeting={greetingValue()} name={usersState.users[0].name} />
        </StyledHeadingOne>
      </GreetingDiv>

      <StyledHeadingTwo>
        <Workout />
      </StyledHeadingTwo>

      <DashPicture>
        <YogaPicture src={dashboardPicture} alt="Workout" />
      </DashPicture>
      
      <StyledText>
        <Program 
          workoutTitle="Titel des Workouts" 
          programTitle="Titel des Programms" 
        />
      </StyledText>

      <StyledSubText>
        <Kcal 
        calories="XXX" 
        time="23" 
        categorie="Beweglichkeit" 
        />
      </StyledSubText>

      <StyledNavbar>
        <StyledNavbarIcons>
          <img src={home} alt="Home" />
          <p>HOME</p>
        </StyledNavbarIcons>

        <StyledNavbarIcons>
          <img src={browse} alt="Home" />
          <p>BROWSE</p>
        </StyledNavbarIcons>

        <StyledNavbarIcons>
          <img src={profile} alt="Home" />
          <p>PROFIL</p>
        </StyledNavbarIcons>
      </StyledNavbar>
      
      {/* <button onClick = {switchHandler}>Switch Name</button> */}
    </StyledContainer>
  );
};

export default App;

