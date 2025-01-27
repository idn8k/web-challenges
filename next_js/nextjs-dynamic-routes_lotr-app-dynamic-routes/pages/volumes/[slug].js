import Image from 'next/image';
import Link from 'next/link';
import { volumes } from '@/lib/data';
import { useRouter } from 'next/router';
import Volume from '@/components/Volume';

export default function VolumePage() {
   const router = useRouter();
   const { slug } = router.query;

   const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

   const volume = volumes[volumeIndex];
   const nextVolume = volumes[volumeIndex + 1];
   const previousVolume = volumes[volumeIndex - 1];

   if (!volume) {
      return null;
   }

   const { title, description, cover, books } = volume;

   return (
      <>
         <Link href="/volumes">← All Volumes</Link>
         {/* // --↓--Dynamic: --↓-- */}
         {volume ? <Volume volume={volume} /> : 'not found'}{' '}
         {/* // --↑--Dynamic: --↑-- */}
         <div>
            {previousVolume ? (
               <Link href={`/volumes/${previousVolume.slug}`}>
                  ← Previous Volume: {previousVolume.title}
               </Link>
            ) : null}
         </div>
         <div>
            {nextVolume ? (
               <Link href={`/volumes/${nextVolume.slug}`}>
                  Next Volume: {nextVolume.title} →
               </Link>
            ) : null}
         </div>
      </>
   );

   // -- Hard Coded:
   {
      /* <h1>{title}</h1>
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
         /> */
   }
}
