import { useState } from 'react';
import './FavoriteButton.css';
import StarFilled from './star-filled.svg?react';
import Star from './star.svg?react';

export default function FavoriteButton() {
   const [isFavorite, setFavorite] = useState();

   function handleFavorite() {
      setFavorite(!isFavorite);
   }
   return (
      <button
         className="favorite-button"
         onClick={handleFavorite}
         aria-label="favorite"
      >
         {isFavorite ? <StarFilled /> : <Star />}
      </button>
   );
}
