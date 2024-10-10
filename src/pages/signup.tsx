import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from './../assets/icons/logo.png'
import arrow from './../assets/icons/arrow_left_long.png'
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye';

const USER_REGEX = /^[A-z][A-z0-9-_ ]{3,30}$/;
const EMAIL_REGEX = /^(?=.*[a-z])(?=.*[@]).{3,23}$/;
const NUMBER_REGEX = /^[0-9][0-9-_ ]{9,9}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,15}$/;

export const Signup = () => {

    const userRef = useRef<HTMLInputElement | null>(null);

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail]=useState("");
    const [validEmail, setValidEmail]=useState(false);
    const [emailFocus, setEmailFocus]=useState(false);

    const [number, setNumber]=useState("");
    const [validNumber, setValidNumber]=useState(false);
    const [numberFocus, setNumberFocus]=useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

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
        setValidName(USER_REGEX.test(user));
    }, [user])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidNumber(NUMBER_REGEX.test(number));
    }, [number])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])
    
    return (
        <div className="h-47 w-full bg-gray-white overflow-hidden">
            <div>
            <img src={logo} alt="" className="absolute mt-3 ml-13 z-10" />
            </div>

            <div>
            <Link to="/"><img src={arrow} alt="" className="relative mt-9 ml-4 w-4" /></Link>
            <h3 className='relative ml-4 mt-4 font-medium text-dark text-left text-base'>Create Account</h3>
            </div>
            
            <form>
            <div className='flex flex-col'>
                <label htmlFor="username" className='relative ml-4 mt-4 text-sm text-gray text-left'>
                    Username
                    <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} />
                </label>
                <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                value={user}
                onChange={(e)=>setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
                className='relative ml-4 mt-2 h-6 w-21.3 text-sm pl-3 border rounded'
                />

                <p id="uidnote" className={userFocus && user &&
                !validName ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  4 to 30 characters.<br />
                  Must begin with a letter.<br />
                  Letters, numbers, underscores, hyphens allowed.
                </p>
              </div>

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
                <label htmlFor="phonenumber" className='relative ml-4 mt-4 text-sm text-gray text-left'>
                    Phone Number
                    <FontAwesomeIcon icon={faCheck} className={validNumber ? "valid" : "hide"} />
                    <FontAwesomeIcon icon={faTimes} className={validNumber || !number ? "hide" : "invalid"} />
                </label>
                <input
                type="number"
                id="number"
                name="number"
                autoComplete="off"
                value={number}
                onChange={(e)=>setNumber(e.target.value)}
                required
                aria-invalid={validNumber ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setNumberFocus(true)}
                onBlur={() => setNumberFocus(false)}
                className='relative ml-4 mt-2 h-6 w-21.3 text-sm pl-6.2 border rounded'
                />
                <h3 className="absolute ml-5.2 mt-8 text-sm text-dark text-left">US</h3>

                <p id="uidnote" className={numberFocus && number &&
                !validNumber ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  10 characters.<br />
                  Must begin with a number.
                  only numbers are allowed.
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

              <div className='flex flex-col'>
              <label htmlFor="confirm_pwd" className="relative ml-4 mt-4 text-sm text-gray text-left">
                Confirm Password
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
            </label>
            <input
                type={type}
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                autoComplete="new-password"
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
                className="relative ml-4 mt-2 h-6 w-21.3 text-sm pl-3 border rounded"
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
            </p>
            <span className="items-center" onClick={handleToggle}>
                    <Icon className="absolute ml-13 -mt-5.2 z-10 cursor-pointer" icon={icon} size={20}/>
            </span>
            </div>

              <div>
                <input type='radio' className='relative ml-4 mt-6 float-left' />
                <h3 className='absolute ml-6.2 mt-4 text-sm text-dark text-left max-w-18'>I agree to the
                    <span className='text-green font-semibold underline'> Terms & Conditions</span> and <span className='text-green font-semibold underline'>Privacy Policy</span></h3>
              </div>
            </form>

            <button
            disabled={!validName || !validPwd || !validMatch ? true : false}
            type="submit"
            className='relative mt-9.5 -ml-7 h-6 w-21.3 bg-green text-white text-sm rounded'>
            Create Account
            </button>

            <div>
                <h3 className='relative mt-4 text-dark text-sm'>Already have an account?
                    <span className='text-green font-semibold cursor-pointer'>
                    <Link to="/login"> Login</Link></span>
                </h3>
            </div>
        </div>
    )
}