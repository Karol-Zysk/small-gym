import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
width: 150px;
height: 120px ;
background-color: rgba(0,0,0,0.05);
padding: 25px;
display: flex;
flex-direction: column;
align-items: center ;
border-radius: 15px;
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.9);`

const Number = styled.h1`
font-size: 50px`

const Text = styled.span`
  margin-top: 10px;
  font-size: 20px ;
  text-align: center  `

  

const MiniCard = ({number, text}) => {
    return <Container>
        <Number>{number}</Number>
        <Text>
            {text}
        </Text>
    </Container>;
}


export default MiniCard;