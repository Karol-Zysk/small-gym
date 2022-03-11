import React from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 60%;
  height: 100%;
`;

const Iframe = styled.iframe`
  padding-top: 10rem;
  display: flex;
  width: 90%;
  height: 30rem;
  align-self: center;
`;

const Right = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem;
`;

const Title = styled.span`
  margin-top: 5rem;
  font-size: 60px;
  font-weight: bold;
`;

const SubTitle = styled.span`
  width: 60%;
  font-size: 35px;
  margin-top: 15px;
  font-weight: bold;
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 8px;
`;
const Button = styled.button`
  width: 150px;
  border: none;
  padding: 15px 20px;
  border-radius: 20px;
  background-color: red;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 20px;
`;

const GymInfo = () => {
  return (
    <Container>
      <Left>
        <Iframe
          frameBorder="0"
          src="https://momento360.com/e/u/f4ca0d7e91f646f08b7d1c27ace31c26?utm_campaign=embed&utm_source=other&heading=27.6&pitch=37.2&field-of-view=75&size=medium"
          title="gymFrame"
        ></Iframe>
      </Left>
      <Right>
        <Title>SmallGym Info</Title>
        <SubTitle>Training Area:</SubTitle>
        <Description>100square meters</Description>
        <Description>high-class equipment</Description>
        <SubTitle>Furthermore:</SubTitle>
        <Description>
          Experienced Trainers <BsCheckCircle style={{ color: "green" }} />
        </Description>

        <Description>
          Low Price <BsCheckCircle style={{ color: "green" }} />
        </Description>
        <Description>
          Comfort <BsCheckCircle style={{ color: "green" }} />
        </Description>
        <Button>Trial Training</Button>
      </Right>
    </Container>
  );
};

export default GymInfo;
