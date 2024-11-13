import { createContext, useState } from "react";

// Context
const PokemonContext = createContext();

// Provider
const PokemonProvider = ({ children }) => {
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectedPokemon.some((p) => p.korean_name === pokemon.korean_name)) {
      alert("이 포켓몬은 이미 추가되었습니다.");
      return;
    }

    if (selectedPokemon.length >= 6) {
      alert("슬롯이 가득 찼습니다.");
      return;
    }

    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  const removePokemon = (pokemonToRemove) => {
    setSelectedPokemon(
      selectedPokemon.filter(
        (pokemon) => pokemon.korean_name !== pokemonToRemove.korean_name
      )
    );
  };

  return (
    <PokemonContext.Provider
      value={{ selectedPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
