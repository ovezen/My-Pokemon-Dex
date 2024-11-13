import MOCK_DATA from "../data/mockdata";
import { Container } from "../styles/PokmenListStyles";
import PokemonCard from "./PokemonCard";
import { useNavigate } from "react-router-dom";

const PokemonList = ({ addPokemon }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {MOCK_DATA.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          onAdd={addPokemon}
          onClick={() => navigate(`/detail/${pokemon.id}`)}
        />
      ))}
    </Container>
  );
};

export default PokemonList;
