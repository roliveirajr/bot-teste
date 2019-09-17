import myProducts from './products'
import React from 'react'
import './style.scss'

class ProductsGrid extends React.Component {
   render() {
      return (
         <section className="_section-products">
            <div className="_container">
               <h2>ÚLTIMOS PRODUTOS</h2>
               <div className="__content-products">
                  {myProducts.map((product, index) =>
                     <div className="___product">
                        <a href="#" data-index={index}>
                           <img src={product.images[0].imageUrl} />
                           <h3>{product.name}</h3>
                           <p>R${product.Value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
                        </a>
                     </div>
                  )}
               </div>
            </div>
         </section>
      );
   }
}

export default ProductsGrid