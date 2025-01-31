import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({setAllLightsOn,setAllLightsOff}) {

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => setAllLightsOn()}
        >
        Turn all lights off
      </Button>
      <Button
        type="button"
          onClick={() => setAllLightsOff()}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
