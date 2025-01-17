import Card from './components/Card';

const fruits = [
   {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
   },
   {
      id: 1338,
      name: '🍊 Orange',
      color: 'Orange',
   },
   {
      id: 1339,
      name: '🍋 Lemon',
      color: 'yellow',
   },
   {
      id: 1340,
      name: '🍏 Apple',
      color: 'Green',
   },
];

export default function App() {
   return (
      <div className="app">
         {fruits.map((fruit) => (
            <Card
               key={fruit.id}
               name={fruit.name}
               color={fruit.color}
            />
         ))}
      </div>
   );
}
