import Navbar from "./components/Navbar";
import styled from "styled-components";
import GymInfo from "./components/GymInfo";

const Container = styled.div`
  height: 100vh;
  
`;

function App() {
  return (
    <Container>
      <Navbar />
      <GymInfo />
    </Container>
  );
}

export default App;
