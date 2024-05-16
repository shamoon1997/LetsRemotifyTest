import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonDetailsQuery } from '../pokemon/pokemonApi';

const PokemonDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokemon details</div>;

  return (
    <div>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
    </div>
  );
};

export default PokemonDetails;
