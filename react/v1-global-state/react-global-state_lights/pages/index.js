import Link from "../components/Link";

export default function HomePage({rooms}) {

  const numLightsOn = rooms.filter(room=>room.isOn === true ).length

  return (
    <div>
      <h1>Home</h1>
      
      <p>{numLightsOn? `${numLightsOn} light(s) are on`: 'All lights are off'}</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link  href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
