

type Products = {

  name: String,
  desc: String,
  img: String

}


function CardProduct( products : Products[]) {
  const item  = products.products.map(p => {
    return (
    <div 
      className="bg-[#e2daeb] opacity-100 hover:cursor-pointer transition-[scale] hover:scale-[1.05] text-red-100 text-2xl z-50 text-[#1f1135] border-[#301e4e] "
      style={{width: "210px", maxHeight: "400px", boxShadow: "5px 8px 1px 1px rgba(0, 0, 0, 0.6)"}}
    >
     <img src={p.img} alt="" className=""/>
     <div className="p-3 relative text-[#1f1135]">
        <h1 className="text-3xl -ml-1 -mt-2 font-bold">{p.name}</h1>
        <span className="absolute top-0 right-0 bg-[#e2daeb] shadow-sm shadow-[#0004] font-extrabold p-2 px-3 translate-x-4 -translate-y-4">{p.price}$</span>
        <p>{p.desc}</p>
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

export default CardProduct