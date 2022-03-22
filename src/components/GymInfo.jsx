import { useState } from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
import gymBtn from "./img/gym_button.png";

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
`;

const Iframe = styled.iframe`
  margin-top: 8vh;
  border: solid white 4px;
  border-radius: 25px;
  display: flex;
  box-shadow: 0px 0px 17px -11px rgba(0, 0, 0, 0.9);
  display: ${(props) => !props.isOpen && "none"};
  width: 80%;
  height: 84vh;
  align-self: center;
`;

const Image = styled.img`
  display: ${(props) => props.isOpen && "none"};
  height: 84vh;
  margin-top: 8vh;
  border: solid none 4px;
  filter: brightness(0.75);
  transition: 350ms ease-in-out;
  align-self: center;
  &:hover {
    filter: brightness(1);
  }
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
  border: 3.5px solid white;
  padding: 15px 20px;
  border-radius: 15px;
  background-color: lightcoral;
  font-size: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  cursor: pointer;
  margin-top: 20px;
`;

const GymInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <Left>
        <Image
          onClick={() => setIsOpen(true)}
          src={gymBtn}
          alt="gymBTN"
          isOpen={isOpen}
        />
        <Iframe
          isOpen={isOpen}
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
        <Button onClick={() => setIsOpen(true)}>3D VISIT</Button>
      </Right>
    </Container>
  );
};

export default GymInfo;
