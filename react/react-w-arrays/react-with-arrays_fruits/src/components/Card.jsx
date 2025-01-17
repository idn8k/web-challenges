import './Card.css';

export default function Card({ name, color }) {
   console.log(color);
   return (
      <p
         style={{ backgroundColor: `${color}` }}
         className="card"
      >
         {name}
      </p>
   );
}
