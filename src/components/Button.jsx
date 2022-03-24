import styled from "styled-components";

const Button = styled.button`
  border: 2px solid white;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 16px;
  padding: 15px;
  border-radius: 15px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 5vh;
  transition: 100ms ease-in-out;
  width: max-content;
  @media only screen and (max-width: 500px) {
    border: 2px solid white;
    filter: brightness(1);

    &&:hover {
      filter: brightness(1.05);
      border: 1px solid white;
      transform: scale(0.99);
      transition: 100ms ease-in-out;
    }
  }
`;

export default Button;
