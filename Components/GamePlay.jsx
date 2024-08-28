import React from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from "styled-components";
import RoleDice from './Roledice';
import  { useState } from 'react';
import { Button, OutlineButton } from "/Styled/Button.js";
import Rules from "./Rules";

const GamePlay = () => {
    const[score,setScore]=useState(0);
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice,setCureentDice]=useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    function randomNumbergen(){ return (Math.floor( Math.random() * 6 ) +1);}
    
    function rollDice(){
      if (!selectedNumber) {
        setError("You have not selected any number");
        return;
      } 
      
    const randomNum = randomNumbergen();
    setCureentDice((prev)=>randomNum);

    if (selectedNumber === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }
    selectedNumber(undefined);
    }
    const resetScore = () => {
      setScore(0);
    };

  return (
    <MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
    error={error}
    setError={setError}
    />
    </div>
    <RoleDice currentDice={currentDice}
    rollDice = {rollDice}
    />
          <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }

  .btns {
  margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
`;


