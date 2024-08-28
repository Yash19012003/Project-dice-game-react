
import styled from "styled-components";

function Roledice ({currentDice,rollDice}) {

  


  return (
    <DiceContainer>
    <div className = "dice" onClick={rollDice}>
      <img src ={`/Images/dices/dice_${currentDice}.png`} />
    </div>
    <p>Click to roll</p>
    </DiceContainer>
  );
}

export default Roledice;

const DiceContainer = styled.div`margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;

.dice {
  cursor: pointer;
}

p {
  font-size: 24px;
}`;