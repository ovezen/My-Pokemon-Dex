import { CardContainer, PokemonImage, PokemonName, PokemonId, AddButton } from "../styles/PokemonCardStyles";

const PokemonCard = ({ pokemon, onAdd, onClick }) => {
  return (
    <CardContainer onClick={onClick}>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <PokemonId>No. {pokemon.id}</PokemonId>
      <AddButton
        onClick={(e) => {
          e.stopPropagation(); // 이벤트 버블링 방지 << 몰랐던거
          onAdd(pokemon);
        }}
      >
        추가
      </AddButton>
    </CardContainer>
  );
};

export default PokemonCard;
