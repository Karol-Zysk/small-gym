import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Gym from "./img/gym1.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Info = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;

  @media only screen and (max-width: 500px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: white;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

const ContactText = styled.span`
  color: white;
  margin-top: 5px;
  @media only screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;

const Right = styled.div`
  width: 40%;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Home = () => {
  return (
    <Container>
      <Left>
        <Title>Small Gym is Yours Place.</Title>
        <Desc>
          Feel good train well. Make yourself at home in the small gym. For us
          you are not only a customer. You are our brother, my friend.
        </Desc>
        <Info>
          <Button color="blue">Contact</Button>
          <Contact>
            <Phone>Call Us: (22) 314-159-265</Phone>
            <ContactText>For any questions</ContactText>
          </Contact>
        </Info>
      </Left>
      <Right>
        <Image src={Gym} />
      </Right>
    </Container>
  );
};

export default Home;
