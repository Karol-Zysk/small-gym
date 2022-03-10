import React from "react";
import styled from "styled-components";
import Gym from "./img/gym1.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  padding: 20px;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  width: 60%;
  font-size: 60px;
`;

const Desc = styled.p`
  width: 60%;
  font-size: 20px;
  margin-top: 20px;
`;

const Info = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const Button = styled.button`
  padding: 15px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  border: 2px solid white;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: white;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: darkgray;
  margin-top: 5px;
  font-weight: bold;
`;

const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
`;

const GymInfo = () => {
  return (
    <Container>
      <Left>
        <Title>Small Gym is Yours Place.</Title>
        <Desc>
          Feel good train well. Make yourself at home in the small gym. For us
          you are not only a customer. You are our brother, my friend.
        </Desc>
        <Info>
          <Button>3D Visit</Button>
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

export default GymInfo;
