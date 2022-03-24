import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./components/Home";
import GymInfo from "./components/GymInfo";
import StartToday from "./components/StartToday";
import Prices from "./components/Prices";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Shape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0% 0%, 35% 0%, 68% 100%, 0% 100%);
  background-color: blue;
  z-index: -1;
`;

const Shape3 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  clip-path: polygon(68% 0, 100% 0, 100% 100%, 0% 100%);
  background-color: lightcoral;
  z-index: -1;
`;

const StartTodayShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  clip-path: polygon(0 0, 100% 0, 28% 100%, 0% 100%);
  background-color: orange;
  z-index: -1;
`;

const Shape2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(100% 0%, 85% 0%, 100% 39%);
  background-color: blue;
  z-index: -1;
`;
const PriceShape = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(0 0, 0 39%, 28% 0);
  background-color: blue;
  z-index: -1;
`;

const PriceShape2 = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: polygon(40% 100%, 100% 100%, 100% 0);
  background-color: gold;
  z-index: -1;
`;

function App() {
  return (
    <>
      <Container>
        <Shape />
        <Shape2 />
        <Navbar />
        <Home />
      </Container>
      <Container>
        <Shape3 />
        <GymInfo></GymInfo>
      </Container>
      <Container>
        <StartTodayShape />
        <StartToday />
      </Container>
      <Container>
        <PriceShape />
        <PriceShape2 />
        <Prices />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
