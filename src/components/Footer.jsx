import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  background-color: blue;
  color: lightyellow;
`;

const Wrapper = styled.div`
  padding: 20px;
  padding-top: 55px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {}
  padding: 15px;

`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  margin-right: 20px;
  min-height: 15%;
  @media only screen and (max-width: 500px) {
    margin-right: 15px;
    font-size: 13px
  }
`;

const Copyright = styled.span`
  margin-right: 20px;
  font-size: 20px;
  @media only screen and (max-width: 500px) {
    font-size: 16px;
    margin-bottom: 2opx;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Facebook</ListItem>
          <ListItem>Twitter</ListItem>
          <ListItem>Instagram</ListItem>
          <ListItem>Tik Tok</ListItem>
        </List>
        <Copyright>Dev Karol ©</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
