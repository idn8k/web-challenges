import { useState } from 'react';
import ColoredNumber from './ColoredNumber';

export default function Counter() {
   const [count, setCount] = useState(0);

   function handleIncrese() {
      setCount((count) => count + 1);
      console.log(count);
   }

   function handleDecrease() {
      setCount((count) => count - 1);
      console.log(count);
   }

   return (
      <div className="counter">
         <h1>Colored Number</h1>
         <ColoredNumber value={count} />
         <div className="counter__buttons-container">
            <button
               type="button"
               className="counter__button"
               aria-label="increment count"
               onClick={handleIncrese}
            >
               +
            </button>
            <button
               onClick={handleDecrease}
               type="button"
               className="counter__button"
               aria-label="decrement count"
            >
               -
            </button>
         </div>
      </div>
   );
}
