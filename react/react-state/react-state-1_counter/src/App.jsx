import { useState } from 'react';
import './styles.css';

export default function App() {
   let [count, setCount] = useState(0);

   function handleIncrease() {
      setCount((count) => count + 1);
   }
   function handleDecrease() {
      setCount((count) => count - 1);
   }

   return (
      <div className="container">
         <h1>{count}</h1>
         <div className="button-container">
            <button
               type="button"
               onClick={handleDecrease}
            >
               -
            </button>
            <button
               type="button"
               onClick={handleIncrease}
            >
               +
            </button>
         </div>
      </div>
   );
}
