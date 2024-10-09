import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import facebook from './../assets/icons/facebook.png';
import message from './../assets/icons/message.png';
import instagram from './../assets/icons/instagram.png';
import youtube from './../assets/icons/youtube.png';
import line from './../assets/images/line_white.png'
import envelope_white from './../assets/icons/envelope_white.png'

export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/sponsorsignup") return null;
  
    return (
      <div>
      <div className="mobile-footer">
          <div>
            <p className="relative mt-5 ml-5 text-base text-white-light text-left max-w-19.6">
            This website does not endorse, encourage, or facilitate illegal gambling. All information
            provided by <span className="text-xl font-semibold">PickBetta</span> is intended for informational and entertainment purposes only. Any use
            of this information in violation of any federal, state, or local laws is strictly prohibited.
            <span className="text-xl font-semibold"> PickBetta</span> does not condone any illegal activities associated with betting or gambling. Users
            are responsible for ensuring that their activities comply with applicable laws.
            </p>

              <div className="absolute ml-5 mt-6 sm:mt-6 sm:ml-5 flex flex-col gap-3 lg:gap-3 text-left lg:mt-7 lg:ml-8">
              <h3 className="relative text-white font-bold lg:text-sm lg:hover:text-green">Company</h3>
              <Link to="/aboutus"><h3 className="relative text-white lg:text-sm lg:hover:text-green">About Us</h3></Link>
              <h3 className="relative text-white-light lg:text-sm lg:hover:text-green">Contact</h3>
              <Link to="/privacy"><h3 className="relative text-white-light lg:text-sm lg:hover:text-green">Privacy Policy</h3></Link>
              <Link to="/terms"><h3 className="relative text-white-light lg:text-sm lg:hover:text-green">Terms & Conditions</h3></Link>
              </div>

              <div>
              <img src={envelope_white} alt="" className="absolute ml-5 mt-19.14 sm:mt-19.15 sm:ml-5" />
              <p className="absolute mt-18 ml-7.5 text-base text-white-light text-left max-w-22">support@pickbetta.com</p>
              </div>

              <img src={line} alt="" className="absolute h-0.1 mt-19.3 ml-5 sm:h-0.1 sm:mt-19.3 sm:ml-5 lg:mt-19.2 lg:ml-39 w-20.5" />

              <div className="absolute mt-19.6 ml-13.5 sm:mt-19.6 sm:ml-15 lg:mt-19.6 lg:ml-39 flex gap-2">
              <img src={facebook} alt="for facebook link" className="relative h-4.5" />
              <img src={message} alt="for facebook link" className="relative h-4.5" />
              <img src={instagram} alt="for facebook link" className="relative h-4.5" />
              <img src={youtube} alt="for facebook link" className="relative h-4.5" />
              </div>

              <div>
              <h3 className="absolute mt-20.5 ml-10 sm:mt-20.5 text-white text-sm lg:ml-35 lg:mt-22.5">© 2024 PickBetta. All Rights Reserved</h3>
              </div>
          </div>
         </div>
        </div>
    )
}