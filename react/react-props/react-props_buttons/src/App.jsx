function Button({ color, disabled, text, onClick }) {
   return (
      <button
         disabled={disabled}
         style={{ backgroundColor: `${color}` }}
         onClick={onClick}
      >
         {text}
      </button>
   );
}

export default function App() {
   function handleClick() {
      console.log('Click');
   }
   return (
      <Button
         color="green"
         disabled={false}
         text="red"
         onClick={handleClick}
      />
   );
}
