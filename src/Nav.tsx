import { useState } from 'react';
import { useCookies } from  'react-cookie';
import Reg from './Reg.tsx'
import './Nav.css';


function Navv() {

  const [reg, setReg] = useState<Boolean>(false)
  const [cookies, setCookie, removeCookie] = useCookies(['LOGIN_INFO'])
  
  const LOGIN_INFO = cookies.LOGIN_INFO

  const handleRemoveCookie = ()=>{
    removeCookie('LOGIN_INFO')

    // window.location.reload()
  }
    
  function handleReg(){
    setReg(!reg)
  }

  return (




    <>
      <nav
        className="fixed flex select-none justify-around top-0 bg-[#00000022] text-white z-99 shadow-sm shadow-[#00000011] w-full h-[76px]"
        style={{backdropFilter: "blur(5px)"}}
      >
        <div className="sec-nav flex justify-center items-center font-bold text-4xl">F.Slow_</div>
        <div className="sec-nav input-sec w-1/6 flex justify-center items-center">
          <input className="noShadow bg-white text-black text-xl px-2 w-6/6 h-3/6 rounded-xl"/>
        </div>
        <div className="sec-nav flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-1/6 icon icon-tabler icons-tabler-outline icon-tabler-search"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          <div className=" h-full w-5/6 flex">
              {
                LOGIN_INFO && (
                  <div className="noShadow w-full gap-2 flex text-[1.4rem] justify-center items-center font-bold">
                    <span className="bg-white h-15 w-15 relative rounded-full">
                      {LOGIN_INFO.name && LOGIN_INFO.last && <span className="absolute left-1/2 top-1/2 -translate-1/2 z-2000 text-black font-bold">{LOGIN_INFO.name[0].toUpperCase()}{LOGIN_INFO.last[0].toUpperCase()}</span>}
                    </span>
                    <div className="flex justify-center flex-col">
                      <div className="flex gap-1">
                        <span className="text-lg ">{LOGIN_INFO.name}</span>
                        <span className="text-lg ">{LOGIN_INFO.last}</span>
                      </div>
                        <span onClick={handleRemoveCookie} className="hover:cursor-pointer text-base underline">Logout</span>   
                    </div>

                  </div>
                  ) 
              }
              {
                !LOGIN_INFO && (
                  <div className="noShadow w-full flex justify-center gap-3 text-[1.4rem] font-bold items-center">
                    <span onClick={handleReg} className="hover:cursor-pointer">Login</span>
                    <span>/</span>
                    <span onClick={handleReg} className="hover:cursor-pointer">Register</span>
                  </div>
                )
              }
          <div className="w-2/6 flex gap-1 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
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
          </div>

          </div>
        </div>
      </nav>

      {reg ?<span onClick={handleReg} className="hover:cursor-pointer fixed text-white z-1000 text-5xl font-bold top-10 left-10">x</span>: ""}
      {reg ?<Reg/> : ""}

    </>


    )


}

export default Navv