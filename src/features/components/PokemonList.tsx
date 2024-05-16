import React from 'react';
import { useGetPokemonListQuery } from '../pokemon/pokemonApi';
import { Link } from 'react-router-dom';

const PokemonList: React.FC = () => {
  const { data, error, isLoading } = useGetPokemonListQuery({ limit: 20, offset: 0 });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokemon list</div>;

  return (
    <ul>
      {data.results.map((pokemon: { name: string }) => (
        <li key={pokemon.name}>
          <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PokemonList;
