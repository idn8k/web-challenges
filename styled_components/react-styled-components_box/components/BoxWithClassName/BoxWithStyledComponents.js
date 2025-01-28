import styled from 'styled-components';

const StyledBox = styled.div`
   width: 100px;
   height: 100px;
   background-color: ${({ $isBlack }) => ($isBlack ? 'black' : 'green')};

   &:hover {
      background-color: red;
   }
`;

export default StyledBox;
