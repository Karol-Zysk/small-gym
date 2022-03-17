import React from "react";
import styled from "styled-components";
import image from "./img/gym3.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100% ;
`;

const Left = styled.div`
  width: 50%;
`;

const Image = styled.img`
  height: 100%;
  margin-top: 10px;
`;

const Right = styled.div`
  width: 50%;
`;

const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 60px;
`;
const Desc = styled.p`
font-size: 20px ;
  margin-top: 20px;
  color: rgb(31, 31, 31)
`;

const CardContainer = styled.div`
display: flex;
justify-content: space-between ;
margin-top: 40px;`

const Button = styled.button`
  width: 180px;
  border: 4px solid white;
  border-radius: 10px;
  background-color: orange;
  font-size: 20px;
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;`

const StartToday = () => {
  return (
    <Container>
      <Left>
        <Image src={image} />
      </Left>
      <Right>
        <Wrapper>
          <Title>Start Today</Title>
          <Desc>
            Don’t let the fear of the time it will take to accomplish something
            stand in the way of your doing it. The time will pass anyway; we
            might just as well put that passing time to the best possible use.
          </Desc>
          <CardContainer>
              <MiniCard/>
              <MiniCard/>
              <MiniCard/>
          </CardContainer>
          <Button> Chose an offer</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default StartToday;
