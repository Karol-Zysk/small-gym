import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline blue;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;
const MenuItem = styled.li`
  margin-left: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 1rem 1.5rem;
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 1rem;
  cursor: pointer;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Small Gym</Logo>

          <Menu>
            <MenuItem>Home</MenuItem>
            <MenuItem>Info</MenuItem>
            <MenuItem>Prices</MenuItem>
            <MenuItem>Contact</MenuItem>
          </Menu>
        </Left>
        <Button>Join Us</Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
