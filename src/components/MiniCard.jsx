import React from 'react';
import styled from 'styled-components';
import search from './img/search.png'

const Container = styled.div`
width: 100px;
padding: 20px;
display: flex;
flex-direction: column;
align-items: center ;
box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.59);`

const Image = styled.img`
width: 30px`

const Text = styled.span`
  margin-top: 10px;
  text-align: center  `

  

const MiniCard = () => {
    return <Container>
        <Image src={search} alt="search"/>
        <Text>
            First month for 5$
        </Text>
    </Container>;
}


export default MiniCard;