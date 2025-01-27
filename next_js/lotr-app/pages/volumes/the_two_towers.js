import Head from "next/head";
import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

const volumeContent = volumes.find(({ slug }) => slug === "the-two-towers");

export default function the_two_towers() {
  return (
    <>
      <Head>
        <title>{volumeContent.title}</title>
      </Head>
      <Link href={"/volumes"}>← Back to all volumes</Link>
      <h1>{volumeContent.title}</h1>
      <p>{volumeContent.description}</p>
      <ul>
        {volumeContent.books.map((book) => {
          return (
            <li key={book.title}>
              <h5>{book.ordinal}</h5>
              <h4>{book.title}</h4>
              <Image
                src={book.cover}
                alt={book.cover}
                width={540}
                height={326}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
