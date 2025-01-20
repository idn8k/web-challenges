import './Tag.css';

export default function Tag({ tag }) {
   console.log(tag);
   return (
      <li className={tag === 'admin' ? 'tag--highlight tag' : 'tag'}>{tag}</li>
   );
}
