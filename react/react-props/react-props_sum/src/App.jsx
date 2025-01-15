function Sum({ value_1, value_2 }) {
   return <h1>{value_1 + value_2}</h1>;
}

export default function App() {
   return (
      <Sum
         value_1={5}
         value_2={5}
      />
   );
}
