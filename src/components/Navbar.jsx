import React from "react";
import { Link } from "react-scroll/modules";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  height: 50px;
  padding: 1vh 1vw 0vh 1vw;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 500px) {
    align-items: flex-end;
    padding: 0px 5px;
  }
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
  @media only screen and (max-width: 500px) {
    color: black;
    text-decoration: underline;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 25px;
  font-weight: bold;
  color: gray;
  transition: 1s ease-in-out;

  &&:hover {
    text-decoration: underline;
    transition: 500ms ease-in-out;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo>Small Gym</Logo>

          <Menu>
            <MenuItem>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                delay={100}
              >
                Home
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="info"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
              >
                Info
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="start"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
              >
                Start
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="price"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
              >
                Price
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Left>
        <Button color="blue"><Link
                activeClass="active"
                to="start"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                delay={100}
              >
                Join Us
              </Link></Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
