import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import {
  Container,
  Title,
  PoketballContainer,
  PoketballBox,
  PoketballImage,
} from "../styles/DashboardStyles";

const Dashboard = () => {
  const { selectedPokemon, removePokemon } = useContext(PokemonContext); // Context에서 전역 상태와 함수를 가져온다.

  return (
    <Container>
      <Title>나만의 포켓몬</Title>
      <PoketballContainer>
        {selectedPokemon.map((pokemon, index) => (
          <PoketballBox key={index} onClick={() => removePokemon(pokemon)}>
            <PoketballImage src={pokemon.img_url} alt={pokemon.korean_name} />
          </PoketballBox>
        ))}
        {Array(6 - selectedPokemon.length)
          .fill()
          .map((_, index) => (
            <PoketballBox key={`empty-${index}`}>
              <PoketballImage src="/pokeball.png" alt="Pokeball" />
            </PoketballBox>
          ))}
      </PoketballContainer>
    </Container>
  );
};

export default Dashboard;
