import Image from 'next/image';

export default function Volume() {
   return (
      <div>
         <h1>{title}</h1>
         <p>{description}</p>
         <ul>
            {books.map(({ ordinal, title }) => (
               <li key={title}>
                  {ordinal}: <strong>{title}</strong>
               </li>
            ))}
         </ul>
         <Image
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
         />
      </div>
   );
}
