function Greeting({ name }) {
   if (name === 'Klaus' || name === 'Gimena') {
      name = 'Coach';
   } else {
      name = 'stranger';
   }

   return <h1>Hello, {name}!</h1>;
}

export default function App() {
   return <Greeting name="Klaus" />;
}
