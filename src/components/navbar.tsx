import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
//import { Link } from "react-router-dom"
import logo from './../assets/icons/logo.png'
import menu_icon from './../assets/icons/menu_icon.png'


export const Navbar = () => {
  const [ open, setOpen ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideDropdown =(e:any)=>{
    if(open && !dropdownRef.current?. contains(e.target as Node)){
      setOpen(false)
      }
    }
    
  window.addEventListener("click",handleClickOutsideDropdown)

  const { pathname } = useLocation();

  if (pathname === "/signup") return null;

    return (
     <div>
        <div className="relative mt-3 ml-5 w-20.5 h-7 bg-white shadow-2xl rounded-3xl"></div>
        <img src={logo} alt="" className="absolute h-5 -mt-6.1 ml-7 z-10" />
        <div ref={dropdownRef}>
        <img onClick={() => setOpen(!open)} src={menu_icon} alt="" className="absolute h-5 -mt-6.1 ml-19.8 z-10" />
        { open && (
          <div className="absolute bg-white w-screen h-21 mt-2.5 ml-0 z-10">
            <div className="flex flex-col gap-4">
            <h3 className="relative mt-4 text-center text-dark text-base font-normal">NFL</h3>
            <h3 className="relative text-center text-dark text-base font-normal">NCAAF</h3>
            <h3 className="relative text-center text-dark text-base font-normal">Pricing</h3>
            <h3 className="relative text-center text-dark text-base font-normal">FAQs</h3>
            </div>
            <div className="flex flex-col">
              <button className="relative p-2 w-20.5 ml-5 mt-4 font-bold text-green border rounded">Login</button>
              <button className="relative p-2 w-20.5 ml-5 mt-4 font-medium text-white bg-green rounded">Start Now!</button>
            </div>
          </div>
        )}
        </div>
     </div>
    )
}