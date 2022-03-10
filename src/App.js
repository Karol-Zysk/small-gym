import Navbar from "./components/Navbar";
import styled from "styled-components";
import GymInfo from "./components/GymInfo";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 0%, 31% 0%, 68% 99%, 0% 100%);
  background-color: blue;
  z-index: -1;
`;

const Shape2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(99% 0%, 80% 0%, 99% 39%);
  background-color: blue;
  z-index: -1;
`;

function App() {
  return (
    <Container>
      <Shape />
      <Shape2 />
      <Navbar />
      <GymInfo />
    </Container>
  );
}

export default App;
