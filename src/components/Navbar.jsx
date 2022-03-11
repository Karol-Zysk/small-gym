import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  padding: 1vh 1vw 0vh 1vw ;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 25px;
  font-weight: bold;
  color: gray;
`;

const Button = styled.button`
  border: 2px solid white;
  padding: 10px 15px;
  background-color: blue;
  color: white;
  font-weight: bold;
  border-radius: 10px;
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
