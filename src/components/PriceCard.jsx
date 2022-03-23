import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin-right: 50px;
  padding: 25px;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 50px;
`;
const Type = styled.button`
  padding: 10px;
  margin: 10px;
  border: 2px solid ${(props) => (props.plan === "VIP" ? "gold" : "darkblue")};
  background-color: white;
  color: ${(props) => (props.plan === "VIP" ? "gold" : "darkblue")};
  border-radius: 20px;
  letter-spacing: ${(props) => (props.plan === "VIP" ? "2px" : "1px")};
  font-weight: ${(props) => (props.plan === "VIP" ? "bold" : "medium")};
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 30px 0;
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => (props.plan === "VIP" ? "gold" : "darkblue")};
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
`;

const PriceCard = (props) => {
  return (
    <Container>
      <PriceContainer>
        $<Price>{props.price}</Price>/{props.period}
      </PriceContainer>

      <Type plan={props.plan}>{props.plan}</Type>
      <List>
        {props.pack.map((packLi) => {
          return <ListItem>{packLi}</ListItem>;
        })}
      </List>
      <Button plan={props.plan}>Join Now</Button>
    </Container>
  );
};

export default PriceCard;
