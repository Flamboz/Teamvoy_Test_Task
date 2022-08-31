import { useEffect, useState } from 'react';

const useFetchSinglePokemon = (url) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function loadData() {
      const res = await fetch(url);
      const data = await res.json();
      setPokemonData(data);
    }

    loadData();
  }, []);

  return { pokemonData };
};

export default useFetchSinglePokemon;
