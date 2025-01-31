import Link from "../components/Link";
import Lights from "../components/Lights";

export default function Rooms({ lights, toggleLight, rooms,handleLightToggle }) {
  return (
    <>
      <Link href="/">← Back home</Link>
      <h1>All Rooms</h1>
      <Lights handleLightToggle={handleLightToggle} rooms={rooms} lights={lights} toggleLight={toggleLight} />
    </>
  );
}
