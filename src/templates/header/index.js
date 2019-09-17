import myNav from './nav'
import React from 'react'
import './style.scss'
class NavHeader extends React.Component {
   render() {
      return (
         <header>
            <div className="_container">
               <nav>
                  <h1>MINHA LOJA</h1>
                  <ul>
                     {myNav.map((nav,index) =>
                        <li index-item={index}className={nav.class}>
                           <a>{nav.text}</a>
                        </li>
                     )}
                  </ul>
                  <a className="_cart-icon"></a>
               </nav>
            </div>
         </header>
      );
   }
}

export default NavHeader