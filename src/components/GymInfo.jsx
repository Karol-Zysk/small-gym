import { useState } from "react";
import styled from "styled-components";
import { BsCheckCircle } from "react-icons/bs";
import gymBtn from "./img/gym_button.png";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  @media only screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 100%;
  @media only screen and (max-width: 500px) {
    display: none;
  }
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
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 55%;
    margin-top: 40%;
  }
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
  padding: 20px;
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Title = styled.span`
  margin-top: 5rem;
  font-size: 60px;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 45px;;
  }
`;

const SubTitle = styled.span`
  width: 60%;
  font-size: 35px;
  margin-top: 15px;
  font-weight: bold;
  @media only screen and (max-width: 500px) {
    font-size: 25px;
    margin-top: 20px;
  }
`;
const Description = styled.p`
  font-size: 20px;
  margin-top: 8px;
  @media only screen and (max-width: 500px) {
    margin-top: 12px;
    margin-left: 5px;
  }
`;

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;

const GymInfo = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const smallScreen = window.screen.width <= 500 ? true : false;
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
        <Button color="lightcoral" onClick={() => setIsOpen(true)}>
          3D VISIT
        </Button>
      </Right>
      {smallScreen && isOpen && (
        <Modal>
          <Iframe
            isOpen={isOpen}
            frameBorder="0"
            src="https://momento360.com/e/u/f4ca0d7e91f646f08b7d1c27ace31c26?utm_campaign=embed&utm_source=other&heading=27.6&pitch=37.2&field-of-view=75&size=medium"
            title="gymFrame"
          ></Iframe>
          <Button
            color="lightcoral"
            style={{ marginLeft: "10px", marginTop: "15px" }}
            onClick={() => setIsOpen(false)}
          >
            Close
          </Button>
        </Modal>
      )}
    </Container>
  );
};

export default GymInfo;
