import { useState, useEffect } from 'react';

const API_BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
const CHUNK_SIZE = 12;

const useFetchAllPokemons = () => {
  const [pokemonsData, setPokemonsData] = useState([]);
  const [chunks, setChunks] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadData() {
      setIsLoading(true);
      const res = await fetch(`${API_BASE_URL}?limit=${CHUNK_SIZE * chunks}`);
      const data = await res.json();
      setPokemonsData(data.results);
      setIsLoading(false);
    }

    loadData();
  }, [chunks]);

  const loadMore = () => {
    setChunks(chunks + 1);
  };

  return { pokemonsData, isLoading, loadMore };
};

export default useFetchAllPokemons;
