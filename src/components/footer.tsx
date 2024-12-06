import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import facebook from './../assets/icons/facebook.svg';
import message from './../assets/icons/messages.svg';
import instagram from './../assets/icons/instagram.svg';
import youtube from './../assets/icons/youtube.svg';
import line from './../assets/images/line_white.png'
import mail from './../assets/icons/mail.svg'
import logo from './../assets/icons/logo.svg'

export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === "/signup") return null;
  if (pathname === "/login") return null;
  if (pathname === "/verifyemail") return null;
  if (pathname === "/homesignedin") return null;
  if (pathname === "/editornote") return null;
  if (pathname === "/bettadeepdive") return null;
  if (pathname === "/nfldeepdive") return null;

  return (
    <div>
      <div className="mobile-footer">
        <img
          src={logo}
          alt=""
          className="relative ss:invisible sm:invisible md:h-7 md:mt-6 md:ml-11 md:z-10 md:visible x:h-7 x:mt-6 x:ml-7 x:z-10 x:visible xl:h-5 x:w-11 x:size-4 xl:mt-13 xl:ml-11 xl:z-10 xl:visible"
        />
        <div>
          <p className="relative ss:mt-5 ss:ml-5 ss:text-left ss:max-w-19.3 ss:text-sm sm:mt-5 sm:ml-5 text-base text-white-light sm:text-left sm:max-w-19.6 font-montserrat md:ml-11 md:mt-11 md:max-w-32 x:ml-7 x:mt-5 x:max-w-25 xl:ml-11 xl:mt-11 xl:max-w-32">
            This website does not endorse, encourage, or facilitate illegal
            gambling. All information provided by{" "}
            <span className="text-xl font-semibold">PickBetta</span> is
            intended for informational and entertainment purposes only. Any
            use of this information in violation of any federal, state, or
            local laws is strictly prohibited.
            <span className="text-xl font-semibold"> PickBetta</span> does not
            condone any illegal activities associated with betting or
            gambling. Users are responsible for ensuring that their activities
            comply with applicable laws.
          </p>

          <div className="relative ss:mt-6 sm:mt-6 ss:ml-5 sm:ml-5 flex flex-col ss:gap-3 sm:gap-3 lg:gap-3 text-left lg:mt-7 lg:ml-8  x:ml-43 x:-mt-16 x:gap-6  md:ml-11 md:mt-8 md:max-w-32 xx:ml-50   xl:ml-78 xl:-mt-19.2 xl:gap-6">
            <h3 className="relative ss:text-sm text-white font-bold lg:text-sm font-montserrat">
              Company
            </h3>
            <Link to="/aboutus">
              <h3 className="relative ss:text-sm text-white lg:text-sm font-montserrat">
                About Us
              </h3>
            </Link>
            <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
              Contact
            </h3>
            <Link to="/privacy">
              <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
                Privacy Policy
              </h3>
            </Link>
            <Link to="/terms">
              <h3 className="relative ss:text-sm text-white-light lg:text-sm font-montserrat">
                Terms & Conditions
              </h3>
            </Link>
          </div>

          <div>
            <img
              src={mail}
              alt=""
              className="relative ss:mt-5 ss:ml-5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.2 ss:rounded-full sm:mt-5 sm:ml-5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.2 sm:rounded-full md:ml-11 md:mt-19 md:max-w-32 x:ml-66 x:-mt-16.5 xx:ml-73 xl:ml-130 xl:-mt-17 xl:bg-gray-dark xl:bg-opacity-50 xl:p-0.2 xl:rounded-full"
            />
            <p className="relative ss:-mt-4.51 ss:ml-7.5 ss:text-sm sm:-mt-4.7 sm:ml-7.5 sm:text-base md:text-base md:ml-13 md:mt-19 md:max-w-32 text-white-light text-left max-w-22 font-montserrat x:text-base x:ml-68 x:-mt-4.6 xx:ml-75 xl:text-base xl:ml-132 xl:mt-0">
              support@pickbetta.com
            </p>
          </div>

          <img
            src={line}
            alt=""
            className="relative ss:-0.1 ss:h-0.1 ss:mt-9 ss:w-19.3 ss:ml-5 sm:-0.1 sm:h-0.1 sm:mt-9 sm:ml-5 lg:mt-19.2 lg:ml-39 sm:w-20.5 md:ml-11 md:mt-19.5 md:max-w-32 x:hidden xl:hidden"
          />

          <div className="relative ss:mt-4 ss:ml-12 sm:mt-4 sm:ml-13.5 md:ml-15 md:mt-20 lg:mt-19.6 lg:ml-39 flex gap-2 x:ml-66 x:mt-18 xx:ml-73 xl:ml-130 xl:mt-23">
            <img
              src={facebook}
              alt="for facebook link"
              className="relative ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full x:h-5 xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full cursor-pointer"
            />
            <img
              src={message}
              alt="for facebook link"
              className="relative ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full x:h-5 xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full cursor-pointer"
            />
            <img
              src={instagram}
              alt="for facebook link"
              className="relative ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full x:h-5 xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full cursor-pointer"
            />
            <img
              src={youtube}
              alt="for facebook link"
              className="relative ss:h-4.5 ss:bg-gray-dark ss:bg-opacity-50 ss:p-0.5 ss:rounded-full sm:h-4.5 sm:bg-gray-dark sm:bg-opacity-50 sm:p-0.5 sm:rounded-full x:h-5 xl:h-6.5 xl:bg-gray-dark xl:bg-opacity-50 xl:p-1.2 xl:rounded-full cursor-pointer"
            />
          </div>

          <div>
            <h3 className="relative ss:mt-1 sm:mt-1 sm:text-center text-white text-sm lg:ml-35 lg:mt-25 font-montserrat md:ml-11 md:mt-21.5 x:ml-7 x:-mt-4 x:text-left xl:ml-11 xl:mt-0">
              © 2024 PickBetta. All Rights Reserved
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}