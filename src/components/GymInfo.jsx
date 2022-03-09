import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 100px);
  display: flex;
  padding: 2rem;
`;

const Left = styled.div`
  width: 60%;
`;

const Title = styled.h1`
  width: 60%;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 1.6rem;
`;

const Right = styled.div`
  width: 40%;
`;

const GymInfo = () => {
  return (
    <Container>
      <Left>
        <Title>Small Gym is Yours Place.</Title>
        <Desc>
          Make yourself at home. You are not a customer for us. You are our
          brother my friend.
        </Desc>
      </Left>
      <Right>Right</Right>
    </Container>
  );
};

export default GymInfo;
