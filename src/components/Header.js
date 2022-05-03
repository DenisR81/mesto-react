import React from 'react';
import logo from '../images/logo.svg';

 function Header() {
   return (
    <header className="header">
    <a href="#"><img src={logo} className="effecthov logo" alt="Логотип 'Места России'" /></a>
  </header>
   );
 }
   
 export default Header;