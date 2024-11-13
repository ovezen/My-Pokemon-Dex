import { useContext } from "react";
import { PokemonContext } from "../contexts/PokemonContext";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";

const Dex = () => {
  const { selectedPokemon, addPokemon, removePokemon } =
    useContext(PokemonContext);

  return (
    <div>
      <Dashboard data={selectedPokemon} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} />
    </div>
  );
};

export default Dex;
