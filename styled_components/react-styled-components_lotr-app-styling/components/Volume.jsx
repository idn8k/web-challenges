import Image from 'next/image';
import styled from 'styled-components';

import { volumes } from '@/lib/data';

const StyledVolumeContainer = styled.div`
   height: 40%;
   width: 100%;
   background: red;
`;

const StyledHeaderContainer = styled.div`
   /* height: 30%; */
   background: green;
`;

export default function Volume({ volume }) {
   const { title, description, cover, books } = volume;
   return (
      <StyledVolumeContainer>
         <StyledHeaderContainer>
            <h1>{title}</h1>
            <p>{description}</p>
         </StyledHeaderContainer>
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
      </StyledVolumeContainer>
   );
}
