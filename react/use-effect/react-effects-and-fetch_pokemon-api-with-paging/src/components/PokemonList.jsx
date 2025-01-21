import { useEffect, useState } from 'react';

export default function PokemonList() {
   const [pokemon, setPokemon] = useState();
   const [nextStack, setNextStack] = useState();

   useEffect(() => {
      async function loadPokemon() {
         try {
            const response = await fetch(
               `${
                  !nextStack
                     ? 'https://pokeapi.co/api/v2/pokemon?offset=0'
                     : nextStack
               }`
            );
            const data = await response.json();
            setPokemon(data);
         } catch (error) {
            console.log(error);
         }
      }

      loadPokemon();
   }, [nextStack]);

   console.log(pokemon);

   function handleNext() {
      setNextStack(pokemon.next);
   }

   return (
      <main>
         <button type="button">Previous Page</button>

         <button
            onClick={handleNext}
            type="button"
         >
            Next Page
         </button>
         <ul>
            {pokemon?.results.map(({ name }) => (
               <li key={name}>{name}</li>
            ))}
         </ul>
      </main>
   );
}
