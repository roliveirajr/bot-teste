import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import NavHeader from './templates/header/index'
import ProductsGrid from './templates/products/index'

ReactDOM.render(
   <body>
      <NavHeader />
      <ProductsGrid />
   </body>
,document.getElementById('root'));

serviceWorker.unregister();
