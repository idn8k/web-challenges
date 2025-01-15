import './styles.css';

export default function App() {
   return <Article />;
}

function Article() {
   return (
      <article>
         <h2 className="article__title">title</h2>
         <label htmlFor="input"></label>

         <input
            type="text"
            id="input"
         />
         <a
            href="https://en.wikipedia.org/wiki/Bear"
            className="article__link"
         >
            A Bear
         </a>
      </article>
   );
}
