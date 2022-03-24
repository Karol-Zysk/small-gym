import React from "react";
import styled from "styled-components";
import phone from "./img/phone.png";
import mail from "./img/mail.png";
import map from "./img/map.jpg";
import Button from "./Button";

const Container = styled.div`
  height: 80%;
  background: white;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 50%;
`;

const Form = styled.form`
  height: 250px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0 0 20px 140px;
`;

const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
`;

const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Input = styled.input`
  width: 200px;
  padding: 20px;
`;
const TextArea = styled.textarea`
  width: 200px;
  height: 60%;
  padding: 20px;
`;

const AdressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

const AdressItem = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 20px;
  margin-right: 20px;
`;

const Text = styled.span`
  font-size: 20px;
  margin-bottom: 15px;
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Questions ?<br /> Contact Us
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Input placeholder="Subject" />
            </LeftForm>

            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button color="blue">Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AdressContainer>
          <AdressItem>
            <Icon src={phone} />
            <Text>tel: 0 (22) 523-667-888</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={mail} />
            <Text>SmallGymContact@gmail.com</Text>
          </AdressItem>
          <AdressItem>
            <Icon src={map} />
            <Text>Small Street 22C 08-450 Warsaw</Text>
          </AdressItem>
        </AdressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
