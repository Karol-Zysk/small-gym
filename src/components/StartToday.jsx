import React from "react";
import styled from "styled-components";
import Button from "./Button";
import image from "./img/gym3.png";
import MiniCard from "./MiniCard";

const Container = styled.div`
  display: flex;
  height: 100%;
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
  font-size: 20px;
  margin-top: 20px;
  color: rgb(31, 31, 31);
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;

const StartToday = () => {
  const data = [
    {
      number: 1,
      text: "Call and arrange a free Personal Training.",
    },
    {
      number: 2,
      text: "Train and decide if you like our place.",
    },
    {
      number: 3,
      text: "DON'T WAIT !!!",
    },
  ];

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
            Start Today. Just follow those three steps
          </Desc>
          <CardContainer>
            {data.map((card) => {
              return <MiniCard number={card.number} text={card.text} />;
            })}
          </CardContainer>
          <Button color="orange"> Free Training</Button>
        </Wrapper>
      </Right>
    </Container>
  );
};

export default StartToday;
