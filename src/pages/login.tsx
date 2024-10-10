import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../assets/icons/logo.png'
import line from './../assets/icons/line_dark.png'
import arrow from './../assets/icons/arrow_left_long.png'
import google from './../assets/icons/google.png'
import facebook from './../assets/icons/facebook_round.png'
import apple from './../assets/icons/apple_dark.png'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Login = () => {

    const userRef = useRef<HTMLInputElement | null>(null);

    const [email, setEmail]=useState("");
    const [validEmail, setValidEmail]=useState(false);
    const [emailFocus, setEmailFocus]=useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

      const handleToggle = () => {
        if (type==='password') {
          setIcon(eye);
          setType('text')
        } else {
          setIcon(eyeOff)
          setType('password')
        }
      }

      useEffect(() => {
        if(userRef.current !== null){
            userRef.current.focus();
          }
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

      useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
      }, [pwd])
    
    return (
        <div className="h-45 w-full bg-gray-white overflow-hidden">
            <div>
            <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
            </div>

            <div>
            <Link to="/"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
            <h3 className='relative ml-4 mt-4 font-medium text-dark text-left text-base'>Welcome Back,</h3>
            </div>

            <form>
              <div className='flex flex-col'>
                <label htmlFor="email" className='relative ml-4 mt-4 text-sm text-gray text-left'>
                    Email
                    <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hide" : "invalid"} />
                </label>
                <input
                type="text"
                id="email"
                name="email"
                autoComplete="off"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                className='relative ml-4 mt-2 h-6 w-21.3 text-sm pl-3 border rounded'
                />

                <p id="uidnote" className={emailFocus && email &&
                !validEmail ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 24 characters.<br />
                  Must begin with a letter. <br />
                  only lowercase is allowed.
                  Allowed special characters: @
                </p>
              </div>

              <div className='flex flex-col'>
                <label htmlFor="password" className='relative ml-4 mt-4 text-sm text-gray text-left'>
                    Password
                    <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
                </label>
                <input
                type={type}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                autoComplete="new-password"
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
                className='relative ml-4 mt-2 h-6 w-21.3 text-sm pl-3 border rounded'
                />

                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 15 characters.<br />
                Must include uppercase and lowercase letters, a number and a special character.<br />
                Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>

                <span className="items-center" onClick={handleToggle}>
                    <Icon className="absolute ml-13 -mt-5.2 z-10 cursor-pointer" icon={icon} size={20}/>
                </span>
              </div>

              <div>
                <input type='radio' className='relative ml-4 mt-4 float-left' />
                <h3 className='absolute ml-6.2 mt-4 text-sm text-dark text-left'>Remember me</h3>
                <h3 className='absolute ml-19 mt-4 font-semibold text-sm text-green cursor-pointer underline'>Forgot Password?</h3>
              </div>
            </form>

            <button className='relative mt-8 -ml-7 h-6 w-21.3 bg-green text-white text-sm rounded'>Login</button>

            <div>
            <img src={line} alt="" className="absolute mt-2 ml-4 h-0.1 w-12.1" />
            <h3 className='relative mt-4 text-gray text-sm'>or, login using</h3>
            <img src={line} alt="" className="absolute -mt-1 ml-17.7 h-0.1 w-11.9" />
            </div>

            <div className='flex gap-1'>
            <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
            <img src={google} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
            </div>

            <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
            <img src={facebook} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
            </div>

            <div className='h-6.1 w-11 mt-4 ml-4 bg-white border rounded' >
            <img src={apple} alt="" className="relative mt-1 ml-6.2 h-5 cursor-pointer" />
            </div>
            </div>

            <div>
                <h3 className='relative mt-4 text-dark text-sm'>New to PickBetta?
                    <span className='text-green font-semibold cursor-pointer'>
                    <Link to="/signup"> Create Account</Link></span>
                </h3>
            </div>
        </div>
    )
}