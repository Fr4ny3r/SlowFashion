


function Reg() {


  return (
    <>
      <div className="reg fixed flex justify-center items-center z-100 bg-black/80 w-3/2 left-1/2 top-1/2 -translate-1/2">
        
        <div
          className="siShadow relative bg-[#67568c] flex w-12/32 h-5/6 text-black"
          style={{boxShadow: "9px 12px 1px 1px rgba(0, 0, 0, 0.6)"}}
        >
          <div className="bottom-0 z-1000 right-5 absolute bg-[#fbdd74] text-xl flex justify-center items-center w-4/6 h-15 translate-y-1/2">
            Fake Register / you can use a fake Gmail
          </div>
          <div className="bg-white h-full w-7/12">
            <h1 className="relative flex items-center pl-10 h-2/12 text-5xl border-b-4 border-[#67568c] font-bold">Register</h1>
            <form className="relative flex gap-3 flex-col p-10 justify-center w-full h-7/12">
              <span className="text-2xl">Gmail</span>
              <input require type="email" className="focus:bg-[#fcee85] text-xl p-2 bg-[#fbdd74]"/>
              <span className="text-2xl" >Password</span>
              <input type="password" className="focus:bg-[#fcee85] text-xl p-2 bg-[#fbdd74]"/>
              <span className="text-md text-blue-900" >forgot your password</span>
              <button className="mt-15 p-3 bg-[#67568c] mx-20 text-xl text-white font-bold hover:bg-[#1f1235] hover:cursor-pointer">Send</button>
            </form>
            {/*<div className="bg-[#ff6e6c] h-45 mx-5">asd</div>*/}
            <div className="bg-[#67568c] h-40 mx-5">asd</div>
          </div>


        </div>

      </div>
    </>
  )
}



export default Reg
