export default function Avatar({ children, onClick, ariaLabel }) {
   return (
      <button
         onClick={onClick}
         aria-label={ariaLabel}
      >
         {children}
      </button>
   );
}
