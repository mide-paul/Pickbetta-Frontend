import { useLocation } from "react-router-dom";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
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
     <div className="relative">
      <div className="fixed mt-0 ml-0 w-screen h-10 bg-white z-10"></div>
        <div className="fixed mt-3 ml-5 w-20.5 h-7 bg-white shadow rounded-3xl z-20">
        <img src={logo} alt="" className="absolute h-5 mt-2.5 ml-4.6 z-10" />
        <div ref={dropdownRef}>
        <img onClick={() => setOpen(!open)} src={menu_icon} alt="" className="absolute h-5 mt-2.5 ml-19.5 z-10" />
        { open && (
          <div className="absolute bg-white w-screen h-19.6 mt-8 ml-0 z-10">
            <div className="absolute bg-white -ml-5 h-19.6 w-screen mt-0"></div>
            <div className="flex flex-col gap-4 -ml-7">
            <h3 className="relative mt-4 text-center text-dark text-base font-normal">Betta Insights</h3>
            <h3 className="relative text-center text-dark text-base font-normal">Pricing</h3>
            <Link to="/faqs"><h3 className="relative text-center text-dark text-base font-normal">FAQs</h3></Link>
            </div>
            <div className="flex flex-col">
              <button className="relative p-2 w-20.5 ml-0 mt-4 font-bold text-green border rounded">Login</button>
              <button className="relative p-2 w-20.5 ml-0 mt-4 font-medium text-white bg-green rounded">Start Now!</button>
            </div>
          </div>
        )}
        </div>
        </div>
     </div>
    )
}