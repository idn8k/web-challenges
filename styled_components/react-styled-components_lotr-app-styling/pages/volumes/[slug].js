import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { volumes } from '../../lib/data';
import Volume from '@/components/Volume';

export default function VolumeDetail() {
   const router = useRouter();
   const { slug } = router.query;

   const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

   const volume = volumes[volumeIndex];
   const previousVolume = volumes[volumeIndex - 1];
   const nextVolume = volumes[volumeIndex + 1];

   if (!volume) {
      return null;
   }

   return (
      <>
         <Link href="/volumes">← All Volumes</Link>

         {volume ? <Volume volume={volume} /> : 'Not found...'}

         {previousVolume ? (
            <div>
               <Link href={`/volumes/${previousVolume.slug}`}>
                  ← Previous Volume: {previousVolume.title}
               </Link>
            </div>
         ) : null}

         {nextVolume ? (
            <div>
               <Link href={`/volumes/${nextVolume.slug}`}>
                  Next Volume: {nextVolume.title} →
               </Link>
            </div>
         ) : null}
      </>
   );
}
