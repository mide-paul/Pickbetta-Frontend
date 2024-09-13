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
        <div className="relative mt-3 ml-5 w-19.7 h-7 bg-white shadow-2xl rounded-3xl"></div>
        <img src={logo} alt="" className="absolute h-5 -mt-6.1 ml-7 z-10" />
        <img src={menu_icon} alt="" className="absolute h-5 -mt-6.1 ml-19.3 z-10" />
     </div>
    )
}