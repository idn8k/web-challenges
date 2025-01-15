import './styles.css';

import avatar from './img/avatar.jpg';
import logo from './img/logo.jpg';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Link from './components/Link';
import Logo from './components/Logo';
import Image from './components/Image';
import Avatar from './components/Avatar';

export default function App() {
   return (
      <>
         <Header>
            <Link href="#">
               <Logo>
                  <Image
                     className="round-image"
                     src={logo}
                     alt="logo"
                  />
               </Logo>
            </Link>
            <Navigation>
               <Link
                  className="navigation__link"
                  href="#home"
               >
                  Home
               </Link>
               <Link
                  className="navigation__link"
                  href="#about"
               >
                  About
               </Link>
               <Link
                  className="navigation__link"
                  href="#impressum"
               >
                  Impressum
               </Link>
            </Navigation>
            <Avatar
               type="button"
               onClick={() => console.log('I could toggle a profile!')}
               aria-label="toggle profile"
            >
               <Image
                  className="round-image"
                  src={avatar}
                  alt="avatar"
               />
            </Avatar>
         </Header>
         <main>content goes here…</main>
      </>
   );
}
