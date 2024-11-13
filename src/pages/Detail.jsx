import { useParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../data/mockdata";
import { DetailContainer, BackButton, PokemonImage, PokemonName, PokemonTypes, TypeBadge, PokemonDescription } from "../styles/DetailStyles";

const Detail = () => {
  const { id } = useParams(); // 포켓몬 ID 가져오기
  const navigate = useNavigate();
  const pokemon = MOCK_DATA.find((p) => p.id === Number(id)); // ID로 포켓몬 찾기

  if (!pokemon) {
    return <p>포켓몬 정보를 찾을 수 없습니다.</p>;
  }

  return (
    <DetailContainer>
      <PokemonImage src={pokemon.img_url} alt={pokemon.korean_name} />
      <PokemonName>{pokemon.korean_name}</PokemonName>
      <p>No. {pokemon.id}</p>

      <PokemonTypes>
        {pokemon.types.map((type) => (
          <TypeBadge key={type}>{type}</TypeBadge>
        ))}
      </PokemonTypes>

      <PokemonDescription>{pokemon.description}</PokemonDescription>

      <BackButton onClick={() => navigate(-1)}>뒤로가기</BackButton>
    </DetailContainer>
  );
};

export default Detail;
