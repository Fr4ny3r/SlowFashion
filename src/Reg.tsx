import { useState } from 'React'
import { useCookies } from  'react-cookie';


function Reg() {

  const [login, setLogin] = useState<Boolean>(false)
  const [userName, setUserName] = useState<String>('')
  const [last, setLast] = useState<String>('')
  const [password, setPassword] = useState<String>('')
  const  [cookie, setCookie] = useCookies(['LOGIN_INFO'])

  const handleSetCookie = (e)=> {
    e.preventDefault();

    const data = {

      login: 'yes',
      name: userName,
      last: last,
      password: password 
    }

    setCookie('LOGIN_INFO', data, {path: '/'})

    setLogin(true)

    window.location.reload();

  }



  return (
    <>
      <div className="reg fixed flex justify-center items-center z-100 bg-black/80 w-3/2 left-1/2 top-1/2 -translate-1/2">
        
        <div
          className="siShadow relative bg-[#67568c] flex w-12/32 h-5/6 text-black"
          style={{boxShadow: "9px 12px 1px 1px rgba(0, 0, 0, 0.6)"}}
        >
          {
            login ?
              (
                <div className="absolute bg-white h-11/12 w-11/12 text-green-500 left-1/2 top-1/2 -translate-1/2 flex justify-center items-center  ">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="128"  height="128"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l2 2l4 -4" /></svg>
                </div>
              ) :
              (
                <>
                            <div className="bottom-0 z-1000 right-5 absolute bg-[#fbdd74] text-xl flex justify-center items-center w-4/6 h-15 translate-y-1/2">
            Fake Acount / you can use a fake data
          </div>
          <div className="bg-white h-full w-7/12">
            <h1 className="relative flex items-center pl-10 h-2/12 text-5xl border-b-4 border-[#67568c] font-bold">Register</h1>
            <form
              onSubmit={handleSetCookie}
              className="relative flex gap-3 flex-col p-10 justify-center w-full h-9/12"
            >
              <span className="text-2xl">Name</span>
              <input
                required
                id="name"
                type="text"
                maxLength="9"
                placeholder={"Luis"}
                value={userName}
                onChange={(e)=>{setUserName(e.target.value)}}
                className="focus:bg-[#f3ebfc] text-xl p-2 bg-[#e2daeb] placeholder:text-gray-600"
              />
              <span className="text-2xl">LastName</span>
              <input
                required
                id="last"
                type="text"
                maxLength="9"
                placeholder={"Lopez"}
                value={last}
                onChange={(e)=>{setLast(e.target.value)}}
                className="focus:bg-[#f3ebfc] text-xl p-2 bg-[#e2daeb] placeholder:text-gray-600"
              />
              <span className="text-2xl" >Password</span>
              <input
                required
                id="pass"
                type="password"
                placeholder={"xxxxxxxx"}
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
                className="focus:bg-[#f3ebfc] text-xl p-2 bg-[#e2daeb] placeholder:text-gray-600"
              />
              <span className="text-md text-blue-900" >forgot your password</span>
              <button type="submit" className="mt-15 p-3 bg-[#67568c] mx-20 text-xl text-white font-bold hover:bg-[#1f1235] hover:cursor-pointer">Send</button>
            </form>
          </div>

                </>

              )
          }



        </div>


      </div>
    </>
  )
}



export default Reg
