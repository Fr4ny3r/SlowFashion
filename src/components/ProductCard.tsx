
import type { Product } from '../types';


function CardProduct({ products }: { products: Product }) {
  return (
    <div
      onClick={() => { window.open("https://www.youtube.com") }}
      className="bg-[#FFFFFF] flex flex-col items-center justify-center bg-[#FFFFFF] flex w-full opacity-100 relative hover:cursor-pointer transition-[scale] hover:scale-[1.05] text-red-100 text-2xl z-50 text-[#1f1135]"
      style={{ maxWidth: "380px" }}
    >

      <div
        className="flex w-full "
      >
        <img src={products.img} alt="" className="w-2/6" />
        <div className="p-3 relative text-[#1f1135] w-full">
          <h1 className="text-3xl -ml-1 -mt-2 font-bold">{products.name}</h1>
          <span className="absolute top-0 right-0 bg-[#e2daeb] shadow-sm shadow-[#0004] font-extrabold p-1 px-3 -translate-y-1/1">{products.category}</span>
          <p className="text-xl">{products.subcategory}</p>
        </div>



      </div>

      <div className="noShadow w-full font-bold text-white flex gap-2">
        <span className="relative p-2 bg-red-400 pl-6">
          {products.price}$
          <span className="absolute bg-[#fbdd74] text-sm left-1 -top-2 text-black">Price</span>
        </span>
        <span className="relative p-2 bg-red-400 pl-6">
          {products.stock}
          <span className="absolute bg-[#fbdd74] text-sm left-1 -top-2 text-black">Stock</span>
        </span>
      </div>

    </div>
  )


}

export default CardProduct