import type { Product } from './types';



function OffersCard({ products }: { products: Product[] }) {

  const item  = products.map(p => {
    return (
    <div 
      onClick={()=>{window.open("https://www.youtube.com")}}
      className="bg-[#FFFFFF] flex w-full opacity-100 relative hover:cursor-pointer transition-[scale] hover:scale-[1.05] text-red-100 text-2xl z-50 text-[#1f1135] "
      style={{maxWidth: "380px"}}
    >
     <img src={p.img} alt="" className="w-2/6"/>
     <div className="p-3 relative text-[#1f1135]">
        <h1 className="text-3xl -ml-1 -mt-2 font-bold">{p.name}</h1>
     </div>
     <div className="noShadow text-lg font-bold text-white absolute flex gap-2 right-0 bottom-0 mr-4 mb-5">
      <span className="line-through relative text-black p-2 pl-6">
        {p.price}$
        <span className="absolute bg-[#fbdd74] px-1 text-sm left-1 -top-2 text-black">Before</span>
      </span>
      <span className="relative p-2 bg-red-400 pl-4">
        {Math.floor( p.price - (Math.floor(p.price) * (p.discountPercentage ? p.discountPercentage : 0) / 100))}$
        <span className="absolute bg-[#fbdd74] px-1 text-sm left-1 -top-2 text-black">Price</span>
      </span>
      <span className="relative p-2 bg-red-400 pl-4">
        -{p.discountPercentage}%
        <span className="absolute bg-[#fbdd74] px-1 text-sm left-1 -top-2 text-black">Offer</span>
      </span>
     </div>
    </div>
    )
    
  });


  return (
      <>
        {item}
      </>
    )


}

export default OffersCard