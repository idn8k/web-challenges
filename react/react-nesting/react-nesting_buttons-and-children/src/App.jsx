import React from 'react';
import './styles.css';

export default function App() {
   return (
      <main>
         <Button>Click 1</Button>
         <Button>Click 2</Button>
         <Button>Click 3</Button>
         <Button>Click 4</Button>
      </main>
   );
}

function Button({ children }) {
   return (
      <button
         className="button"
         type="button"
      >
         {children}
      </button>
   );
}
