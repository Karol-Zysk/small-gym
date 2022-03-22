import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div``;

const Price = styled.span`
font-weight: bold;
font-size: 50px;
`
const Type = styled.button``;

const List = styled.ul``;

const ListItem = styled.li``

const Button = styled.button`
`


const PriceCard = () => {
  return (
    <Container>
      <PriceContainer>
        $<Price>20</Price>/Per Month
      </PriceContainer>

      <Type>Basic Plan</Type>
      <List>
        <ListItem>300 Items</ListItem>
        <ListItem>Train Like Pro</ListItem>
        <ListItem>Free Personal Training</ListItem>
      </List>
      <Button>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
