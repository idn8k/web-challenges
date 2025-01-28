import StyledBox from '@/components/BoxWithClassName/BoxWithStyledComponents.js';

export default function HomePage() {
   return (
      <div>
         <StyledBox />
         <StyledBox $isBlack />
      </div>
   );
}
