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
  @media only screen and (max-width: 500px) {
  }
  padding: 15px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  cursor: pointer;
  margin-right: 20px;
  min-height: 15%;
  @media only screen and (max-width: 500px) {
    margin-right: 17px;
    margin-top: 20px;
    font-size: 15px;
  }
`;

const Copyright = styled.span`
  margin-right: 20px;
  font-size: 20px;
  @media only screen and (max-width: 500px) {
    font-size: 16px;
    margin-top: 20px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://shattereddisk.github.io/rickroll/rickroll.mp4"
              target="blank"
            >
              Tik Tok
            </a>
          </ListItem>
          <ListItem>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.facebook.com"
              target="blank"
            >
              Facebook
            </a>
          </ListItem>
          <ListItem>
            <a
              style={{ color: "white", textDecoration: "none" }}
              href="https://www.twitter.com"
              target="blank"
            >
              Twitter
            </a>
          </ListItem>
        </List>
        <Copyright>Dev Karol ©</Copyright>
      </Wrapper>
    </Container>
  );
};

export default Footer;
