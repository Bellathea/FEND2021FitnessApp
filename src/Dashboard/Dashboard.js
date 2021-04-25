import React, {useState} from 'react';
import styled from 'styled-components';
import MontserratRegular from '../fonts/Montserrat/MontserratRegular.ttf';
import User from './User';
import Workout from './Workout';
import Program from './Program';
import Kcal from './Kcal';
import dashboardPicture from '../img/dashboardPicture.svg';
import { Route } from 'react-router-dom';

const GreetingDiv = styled.div`
  margin-left: 3%;
  margin-top: 5%;
`;

const DashPicture = styled.div`
  display: flex;
  width: 90%;
  object-fit:cover;
  margin-left: auto;
  margin-right: auto;
  background-color: #F5EBDD;
  padding: 2%;
  max-height: 50vh;
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

const Dashboard = (props) => {
    const [usersState, setUsersState] = useState(
        {
        users: [
          {name: 'Anna'}
        ]
        }
      );

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
    <div>
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
      
      <Route path="/" />
    </div>
    )
};

export default Dashboard;