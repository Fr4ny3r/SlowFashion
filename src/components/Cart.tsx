
function Cart( { activeCart, setActiveCart, cart, setCart, addToCart, removeFromCart } : { activeCart: any, setActiveCart: any, cart: any, setCart: any, addToCart : (item : any) => void, removeFromCart : (i : number) => void } ) {
  
  const CartBox = () => {
    return (
      <>
      <div className="absolute top-[76px] right-0 w-96 h-[calc(100vh-76px)] bg-white shadow-lg shadow-black/10 flex flex-col">
      <div className="w-full h-12 bg-black text-white flex items-center justify-center font-bold text-xl">CART</div>
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty</p>
        ) : (
          cart.map((item: any, index: number) => (
            <div key={index} className="flex items-center justify-between mb-4">
              <img src={item.img} alt={item.name} className="w-16 h-16 object-cover mr-1" />
              <div className="flex-1 mx-2">
                <h3 className="font-bold text-black">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              <button
                onClick={() => removeFromCart(index)}
                className="text-red-500 hover:underline hover:cursor-pointer"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <div className="w-full h-16 bg-gray-100 flex items-center justify-between px-4">
        <span className="font-bold">Total: ${cart.reduce((total: number, item: any) => total + item.price, 0).toFixed(2)}</span>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Checkout
        </button>
      </div>
    </div>
    </>
    )
  }

  
  return (
    <div className="w-2/6 flex gap-1 items-center">
      <svg
        onClick={() => setActiveCart(!activeCart)}
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart hover:cursor-pointer"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />

      </svg>
      <span className="noShadow bg-white/90 relative text-black w-7 h-8 rounded-[100%]">
        <span className="absolute left-1/2 top-1/2 -translate-1/2 font-bold">0</span>
      </span>
      { activeCart ? (<CartBox/>) : (<></>)}
    </div>
  )
}

export default Cart