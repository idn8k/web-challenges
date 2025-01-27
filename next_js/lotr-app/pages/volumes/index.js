import Head from "next/head";
import Link from "next/link";

export default function index() {
  return (
    <>
      <Head>
        <title>Volumes</title>
      </Head>
      <h1>All Volumes</h1>
      <ul>
        <li>
          <Link href="/volumes/the_fellowship_of_the_ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the_two_towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the_return_of_the_king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
