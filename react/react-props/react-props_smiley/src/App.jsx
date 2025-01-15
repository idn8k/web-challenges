function Smile({ isHappy }) {
   return <h1>{isHappy ? '🙃' : '😕'}</h1>;
}

export default function App() {
   return <Smile isHappy={true} />;
}
