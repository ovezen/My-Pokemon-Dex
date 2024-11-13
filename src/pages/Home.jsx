import { useNavigate } from "react-router-dom";
import { Container, Image, Button } from "../styles/HomeStyles";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Container className="app-container">
        <Image
          src="/pokemon-23.svg"
          alt=""
        />
        <Button onClick={() => navigate("/dex")}>도감으로 이동하기</Button>
      </Container>
    </div>
  );
};

export default Home;
