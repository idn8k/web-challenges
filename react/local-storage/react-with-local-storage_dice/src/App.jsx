import { useState } from 'react';
import { getD6Roll } from './utils';

import { D6Button } from './components/D6Button';
import History from './components/History';
import './styles.css';

export default function App() {
   const [rolls, setRolls] = useState([]);

   const handleRoll = () => {
      setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
   };
   console.log(rolls);

   return (
      <div className="app">
         <main className="app__main">
            <D6Button
               onRoll={handleRoll}
               rolls={rolls}
            />
         </main>
         <aside className="app__aside">
            <History rolls={[]} />
         </aside>
      </div>
   );
}
