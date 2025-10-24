import './ProductCard.css'
import type { Product } from '../types';


function CardProduct({ products, activeCart, setActiveCart, cart, setCart, addToCart, removeFromCart } : { products: Product, activeCart: any, setActiveCart: any, cart: any, setCart: any, addToCart : (item : any) => void, removeFromCart : (_ : any, i : number) => void }) {

  

  const tags = products.tags.map((tag : string, index : number) => (
    tag && <span key={index} className="inline-block bg-[#e2daeb] text-sm text-[#1f1135] mr-2 mt-2 px-2 py-1 rounded-full">{tag}</span>
  ));
  

  return (
    <div
      id='productCard'
      onClick={() => { window.open("https://www.youtube.com") }}
      className="bg-[#FFFFFF] outline-black outline-1 flex flex-col items-center justify-center bg-[#FFFFFF] flex w-full opacity-100 relative hover:cursor-pointer transition-all text-red-100 text-2xl z-50 text-[#1f1135]"
      style={{ maxWidth: "380px" }}
    >

      <div
        className="flex w-full "
      >
        <img src={products.img} alt="" className="w-2/6" />
        <div className="p-3 relative text-[#1f1135] w-full">
          <h1 className="text-3xl -ml-1 -mt-2 font-bold">{products.name}</h1>
          <span className="absolute top-0 right-0 bg-[#e2daeb] font-extrabold text-base px-3 -translate-y-1/1">{products.category}</span>
          {tags}
        </div>



      </div>

      <div className="noShadow w-full font-bold text-black flex justify-between items-center border-t border-black/10">
        <span
          onClick={()=>{addToCart(products)}}
          className="addToCart relative p-2 pl-6 w-full hover:cursor-pointer"
        >
          Add to cart
        </span>
        <span className="relative p-2 px-4 w-fit bg-[#fbdd74] flex justify-center items-center text-center font-bold">
          {products.isOffer ? Math.floor( products.price - (Math.floor(products.price) * (products.discountPercentage ? products.discountPercentage : 0) / 100)) : products.price}$
          <span className="absolute bg-[#fbdd74] text-sm left-1 -top-2 text-black">Price</span>
        </span>
      </div>

    </div>
  )


}

export default CardProduct