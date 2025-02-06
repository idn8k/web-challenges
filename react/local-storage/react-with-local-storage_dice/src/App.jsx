import { getD6Roll } from './utils';
import useLocalStorage from 'use-local-storage';

import { D6Button } from './components/D6Button';
import History from './components/History';
import './styles.css';

export default function App() {
   const [rolls, setRolls] = useLocalStorage('rolls', []);
   console.log(rolls);

   const handleRoll = () => {
      setRolls((rolls) => {
         const currentRolls = rolls ?? [];
         return [{ value: getD6Roll(), time: Date.now() }, ...currentRolls];
      });
   };

   return (
      <div className="app">
         <main className="app__main">
            <D6Button
               onRoll={handleRoll}
               rolls={rolls}
            />
         </main>
         <aside className="app__aside">
            <History rolls={rolls} />
         </aside>
      </div>
   );
}
