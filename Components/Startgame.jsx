import React from 'react'
import styled from "styled-components"
import  Button  from "/Styled/Button.js"


function Startgame({toggle}){
  return (
    <Container>
        <div>
        <img src ="/Images/dices 1.png"/>
        </div>
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Start</Button>
        </div>
    </Container>
  );
}
const Container = styled.div`
    
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  .content {
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
}
`


export default Startgame;