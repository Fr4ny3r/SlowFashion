
import { Product } from './types';


function ProductCard({product, key} : Product) {

console.log(key)

  return (

    <div
    >
      <h1>{product.name}</h1>
      <p>{product.category}</p>
    </div>

    );


}

export default ProductCard;