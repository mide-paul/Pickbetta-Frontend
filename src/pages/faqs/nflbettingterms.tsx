import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import search from './../../assets/icons/search.png'
import line from './../../assets/images/line_green.png'
import faq_styled from './../../assets/images/faq_styled.png'

export const Nflbettingterms = () => {
  const [ open, setOpen ] = useState(false);
  const [ opentwo, setOpentwo ] = useState(false);
  const [ openthree, setOpenthree ] = useState(false);
  const [ openfour, setOpenfour ] = useState(false);
  const [ openfive, setOpenfive ] = useState(false);
  const [ opensix, setOpensix ] = useState(false);
  const [ openseven, setOpenseven ] = useState(false);
  const [ openeight, setOpeneight ] = useState(false);
  const [ opennine, setOpennine ] = useState(false);
  const [ openten, setOpenten ] = useState(false);
  const [ openeleven, setOpeneleven ] = useState(false);
  const [ opentwelve, setOpentwelve ] = useState(false);
  const [ openthirteen, setOpenthirteen ] = useState(false);
  const [ openfourteen, setOpenfourteen ] = useState(false);
  const [ openfifteen, setOpenfifteen ] = useState(false);
  const [ opensixteen, setOpensixteen ] = useState(false);
  const [ openseventeen, setOpenseventeen ] = useState(false);
  const [ openeighteen, setOpeneighteen ] = useState(false);
  const [ opennineteen, setOpennineteen ] = useState(false);
  const [ opentwenty, setOpentwenty ] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null)
  const droptwoRef = useRef<HTMLDivElement>(null)
  const dropthreeRef = useRef<HTMLDivElement>(null)
  const dropfourRef = useRef<HTMLDivElement>(null)
  const dropfiveRef = useRef<HTMLDivElement>(null)
  const dropsixRef = useRef<HTMLDivElement>(null)
  const dropsevenRef = useRef<HTMLDivElement>(null)
  const dropeightRef = useRef<HTMLDivElement>(null)
  const dropnineRef = useRef<HTMLDivElement>(null)
  const droptenRef = useRef<HTMLDivElement>(null)
  const dropelevenRef = useRef<HTMLDivElement>(null)
  const droptwelveRef = useRef<HTMLDivElement>(null)
  const dropthirteenRef = useRef<HTMLDivElement>(null)
  const dropfourteenRef = useRef<HTMLDivElement>(null)
  const dropfifteenRef = useRef<HTMLDivElement>(null)
  const dropsixteenRef = useRef<HTMLDivElement>(null)
  const dropseventeenRef = useRef<HTMLDivElement>(null)
  const dropeighteenRef = useRef<HTMLDivElement>(null)
  const dropnineteenRef = useRef<HTMLDivElement>(null)
  const droptwentyRef = useRef<HTMLDivElement>(null)

  const handleClickOutsideDropdown =(e:any)=>{
    if(open && !dropdownRef.current?. contains(e.target as Node)){
      setOpen(false)
      }
    }

const handleClickOutsideDropdowntwo =(e:any)=>{
    if(opentwo && !droptwoRef.current?. contains(e.target as Node)){
        setOpentwo(false)
        }
    }

const handleClickOutsideDropdownthree =(e:any)=>{
    if(openthree && !dropthreeRef.current?. contains(e.target as Node)){
        setOpenthree(false)
        }
    }

const handleClickOutsideDropdownfour =(e:any)=>{
    if(openfour && !dropfourRef.current?. contains(e.target as Node)){
        setOpenfour(false)
        }
    }

const handleClickOutsideDropdownfive =(e:any)=>{
    if(openfive && !dropfiveRef.current?. contains(e.target as Node)){
        setOpenfive(false)
        }
    }

const handleClickOutsideDropdownsix =(e:any)=>{
    if(opensix && !dropsixRef.current?. contains(e.target as Node)){
        setOpensix(false)
        }
    }

const handleClickOutsideDropdownseven =(e:any)=>{
    if(openseven && !dropsevenRef.current?. contains(e.target as Node)){
        setOpenseven(false)
        }
    }

const handleClickOutsideDropdowneight =(e:any)=>{
    if(openeight && !dropeightRef.current?. contains(e.target as Node)){
        setOpeneight(false)
        }
    }

const handleClickOutsideDropdownnine =(e:any)=>{
    if(opennine && !dropnineRef.current?. contains(e.target as Node)){
        setOpennine(false)
        }
    }

const handleClickOutsideDropdownten =(e:any)=>{
    if(openten && !droptenRef.current?. contains(e.target as Node)){
        setOpenten(false)
        }
    }

const handleClickOutsideDropdowneleven =(e:any)=>{
    if(openeleven && !dropelevenRef.current?. contains(e.target as Node)){
        setOpeneleven(false)
        }
    }

const handleClickOutsideDropdowntwelve =(e:any)=>{
    if(opentwelve && !droptwelveRef.current?. contains(e.target as Node)){
        setOpentwelve(false)
        }
    }

const handleClickOutsideDropdownthirteen =(e:any)=>{
    if(openthirteen && !dropthirteenRef.current?. contains(e.target as Node)){
        setOpenthirteen(false)
        }
    }

const handleClickOutsideDropdownfourteen =(e:any)=>{
    if(openfourteen && !dropfourteenRef.current?. contains(e.target as Node)){
        setOpenfourteen(false)
        }
    }

const handleClickOutsideDropdownfifteen =(e:any)=>{
    if(openfifteen && !dropfifteenRef.current?. contains(e.target as Node)){
        setOpenfifteen(false)
        }
    }

const handleClickOutsideDropdownsixteen =(e:any)=>{
    if(opensixteen && !dropsixteenRef.current?. contains(e.target as Node)){
        setOpensixteen(false)
        }
    }

const handleClickOutsideDropdownseventeen =(e:any)=>{
    if(openseventeen && !dropseventeenRef.current?. contains(e.target as Node)){
        setOpenseventeen(false)
        }
    }

const handleClickOutsideDropdowneighteen =(e:any)=>{
    if(openeighteen && !dropeighteenRef.current?. contains(e.target as Node)){
        setOpeneighteen(false)
        }
    }

const handleClickOutsideDropdownnineteen =(e:any)=>{
    if(opennineteen && !dropnineteenRef.current?. contains(e.target as Node)){
        setOpennineteen(false)
        }
    }

const handleClickOutsideDropdowntwenty =(e:any)=>{
    if(opentwenty && !droptwentyRef.current?. contains(e.target as Node)){
        setOpentwenty(false)
        }
    }
    
  window.addEventListener("click",handleClickOutsideDropdown)
  window.addEventListener("click",handleClickOutsideDropdowntwo)
  window.addEventListener("click",handleClickOutsideDropdownthree)
  window.addEventListener("click",handleClickOutsideDropdownfour)
  window.addEventListener("click",handleClickOutsideDropdownfive)
  window.addEventListener("click",handleClickOutsideDropdownsix)
  window.addEventListener("click",handleClickOutsideDropdownseven)
  window.addEventListener("click",handleClickOutsideDropdowneight)
  window.addEventListener("click",handleClickOutsideDropdownnine)
  window.addEventListener("click",handleClickOutsideDropdownten)
  window.addEventListener("click",handleClickOutsideDropdowneleven)
  window.addEventListener("click",handleClickOutsideDropdowntwelve)
  window.addEventListener("click",handleClickOutsideDropdownthirteen)
  window.addEventListener("click",handleClickOutsideDropdownfourteen)
  window.addEventListener("click",handleClickOutsideDropdownfifteen)
  window.addEventListener("click",handleClickOutsideDropdownsixteen)
  window.addEventListener("click",handleClickOutsideDropdownseventeen)
  window.addEventListener("click",handleClickOutsideDropdowneighteen)
  window.addEventListener("click",handleClickOutsideDropdownnineteen)
  window.addEventListener("click",handleClickOutsideDropdowntwenty)

    return (
        <div className="relative h-133 w-full bg-white overflow-hidden">
            <div>
                <h3 className="relative text-4xl text-dark font-extrabold mt-11 ml-5 max-w-20 text-center">
                Frequently Asked Questions (FAQs)
                </h3>
            </div>

            <div>
                <input className="relative text-sm mt-4 pl-6 h-6.3 w-20.5 border rounded" placeholder="Search for questions" />
                <img src={search} className='relative -mt-5.2 ml-6 h-4'/>
            </div>

            <div className='flex overflow-scroll scroll-smooth text-nowrap'>
                <Link to="/faqs"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General Questions</h3></Link>
                <Link to="/subscriptions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Subscription & Pricing</h3></Link>
                <Link to="/features"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Features & Functionality</h3></Link>
                <Link to="/data"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Data & Analytics</h3></Link>
                <Link to="/generalnfl"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General NFL Betting Questions</h3></Link>
                <Link to="/betting"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Betting Types & Strategies</h3></Link>
                <Link to="/nflbettingrules"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Rules & Terms</h3></Link>
                <Link to="/nflbettingtips"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>NFL Betting Tips & Insight</h3></Link>
                <Link to="/generalquestions"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>General Responsible Gambling Questions</h3></Link>
                <Link to="/financialmanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Financial Management & Limits</h3></Link>
                <Link to="/timemanagement"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Time Management & Self-Control</h3></Link>
                <Link to="/understandingtheodds"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Understanding the Odds & Managing Expectations</h3></Link>
                <Link to="/pickbettaterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>PickBetta Terms & Sports Analytics</h3></Link>
                <Link to="/sportbettingterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Sports Betting Terms</h3></Link>
                <div>
                <h3 className='relative mt-5 ml-5 text-left text-sm text-green font-extrabold'>NFL Betting Terms & Definitions</h3>
                <img src={line} className='relative mt-2 ml-5 h-1 w-15.9'/>
                </div>
                <Link to="/sportsbookterms"><h3 className='relative mt-5 ml-5 text-left text-sm text-dark font-medium'>Sportsbook Terms & Definitions</h3></Link>
            </div>

            <div>
                <div ref={dropdownRef} className="relative mt-4 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpen(!open)} className='relative text-sm text-left font-bold'>Point Spread:</h3>
                    <h3 onClick={() => setOpen(!open)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { open && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The number of points by which a team is favored to win. Bettors can wager on
                            whether the favorite will win by more than the spread or if the underdog will
                            lose by less (or win outright).
                        </p>
                    )}
                </div>

                <div ref={droptwoRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwo(!opentwo)} className='relative text-sm text-left font-bold'>Moneyline:</h3>
                    <h3 onClick={() => setOpentwo(!opentwo)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { opentwo && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet on which team will win the game outright, regardless of the point spread.
                            Favorites have negative odds (e.g., -150), while underdogs have positive odds (e.g., +200).
                        </p>
                    )}
                </div>

                <div ref={dropthreeRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenthree(!openthree)} className='relative text-sm text-left font-bold'>Over/Under (Total):</h3>
                    <h3 onClick={() => setOpenthree(!openthree)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openthree && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A wager on whether the total points scored by both teams will go over or under
                            a number set by the sportsbook.
                        </p>
                    )}
                </div>

                <div ref={dropfourRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfour(!openfour)} className='relative text-sm text-left font-bold'>Against the Spread (ATS):</h3>
                    <h3 onClick={() => setOpenfour(!openfour)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openfour && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A betting term indicating how often a team covers or beats the point spread. For
                            example, if a team is 7-3 ATS, they have covered the spread in 7 out of 10 games.
                        </p>
                    )}
                </div>

                <div ref={dropfiveRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfive(!openfive)} className='relative text-sm text-left font-bold max-w-18'>Parlay:</h3>
                    <h3 onClick={() => setOpenfive(!openfive)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openfive && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet that combines two or more individual bets into one. All selections must win
                            for the parlay to pay out, but the potential payout is higher than individual bets.
                        </p>
                    )}
                </div>

                <div ref={dropsixRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpensix(!opensix)} className='relative text-sm text-left font-bold max-w-18'>Teaser:</h3>
                    <h3 onClick={() => setOpensix(!opensix)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opensix && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A type of parlay where bettors can adjust the point spread or total in their
                            favor, usually by 6, 6.5, or 7 points, but at reduced odds.
                        </p>
                    )}
                </div>

                <div ref={dropsevenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenseven(!openseven)} className='relative text-sm text-left font-bold max-w-18'>Prop Bet (Proposition Bet):</h3>
                    <h3 onClick={() => setOpenseven(!openseven)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openseven && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A bet on specific events within a game, such as a player's rushing yards, whether
                            a certain team will score first, or if a player will score a touchdown.
                        </p>
                    )}
                </div>

                <div ref={dropeightRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpeneight(!openeight)} className='relative text-sm text-left font-bold max-w-18'>Live Betting (In-Play Betting):</h3>
                    <h3 onClick={() => setOpeneight(!openeight)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openeight && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Betting that takes place during the game with odds and lines updated in real-time
                            based on game progress and events.
                        </p>
                    )}
                </div>

                <div ref={dropnineRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpennine(!opennine)} className='relative text-sm text-left font-bold max-w-18'>Push:</h3>
                    <h3 onClick={() => setOpennine(!opennine)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opennine && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A tie between the bettor and the sportsbook. For example, if the point spread is
                            3 and the favorite wins by exactly 3 points, the bet is a push, and the original
                            wager is refunded.
                        </p>
                    )}
                </div>

                <div ref={droptenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenten(!openten)} className='relative text-sm text-left font-bold max-w-18'>Futures Bet:</h3>
                    <h3 onClick={() => setOpenten(!openten)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openten && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A long-term bet on outcomes that occur later in the season, such as who will
                            win the Super Bowl, conference championships, or individual awards like MVP.
                            change in real-time based on the action and events as the game progresses.
                        </p>
                    )}
                </div>

                <div ref={dropelevenRef} className="relative mt-4 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpeneleven(!openeleven)} className='relative text-sm text-left font-bold'>Handle:</h3>
                    <h3 onClick={() => setOpeneleven(!openeleven)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openeleven && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The total amount of money wagered on a particular game, event, or set of bets.
                        </p>
                    )}
                </div>

                <div ref={droptwelveRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwelve(!opentwelve)} className='relative text-sm text-left font-bold'>Vigorish (Juice):</h3>
                    <h3 onClick={() => setOpentwelve(!opentwelve)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { opentwelve && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The sportsbook's fee or commission on a bet. It is usually built into the odds,
                            such as -110 odds, where the bettor must wager $110 to win $100.
                        </p>
                    )}
                </div>

                <div ref={dropthirteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenthirteen(!openthirteen)} className='relative text-sm text-left font-bold'>Cover:</h3>
                    <h3 onClick={() => setOpenthirteen(!openthirteen)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openthirteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            When a team beats the point spread. For example, if a team is favored by 7
                            points and wins by 10, they "cover" the spread.
                        </p>
                    )}
                </div>

                <div ref={dropfourteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfourteen(!openfourteen)} className='relative text-sm text-left font-bold'>Public Betting (Betting the Public):</h3>
                    <h3 onClick={() => setOpenfourteen(!openfourteen)} className="absolute ml-19.5 -mt-4.6 font-medium text-xl text-dark">+</h3>
                    { openfourteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Refers to the general public’s tendency to bet on popular teams, favorites,
                            or high-profile games, which can skew betting lines.
                        </p>
                    )}
                </div>

                <div ref={dropfifteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenfifteen(!openfifteen)} className='relative text-sm text-left font-bold max-w-18'>Sharp Money:</h3>
                    <h3 onClick={() => setOpenfifteen(!openfifteen)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openfifteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            Bets placed by professional or highly knowledgeable bettors. Sharp money often
                            moves betting lines because it is respected by sportsbooks.
                        </p>
                    )}
                </div>

                <div ref={dropsixteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpensixteen(!opensixteen)} className='relative text-sm text-left font-bold max-w-18'>Opening Line:</h3>
                    <h3 onClick={() => setOpensixteen(!opensixteen)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opensixteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The initial odds or point spread set by the sportsbook when betting opens for
                            a game. This line often shifts based on betting action.
                        </p>
                    )}
                </div>

                <div ref={dropseventeenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpenseventeen(!openseventeen)} className='relative text-sm text-left font-bold max-w-18'>Closing Line:</h3>
                    <h3 onClick={() => setOpenseventeen(!openseventeen)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openseventeen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The final odds or point spread at the time betting closes, just before the game
                            starts. This is often a reflection of public and sharp money throughout the week.
                        </p>
                    )}
                </div>

                <div ref={dropeighteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpeneighteen(!openeighteen)} className='relative text-sm text-left font-bold max-w-18'>Line Movement:</h3>
                    <h3 onClick={() => setOpeneighteen(!openeighteen)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { openeighteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            The shift in the betting line or odds caused by betting activity, injuries,
                            weather reports, or other factors leading up to the game.
                        </p>
                    )}
                </div>

                <div ref={dropnineteenRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpennineteen(!opennineteen)} className='relative text-sm text-left font-bold max-w-18'>First-Half Bet:</h3>
                    <h3 onClick={() => setOpennineteen(!opennineteen)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opennineteen && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A wager placed on the outcome of the first half of the game, rather than the
                            full game. The point spread, moneyline, and total can all have first-half versions.
                        </p>
                    )}
                </div>

                <div ref={droptwentyRef} className="relative mt-3 ml-5 p-2.5 w-20.4 border rounded">
                    <h3 onClick={() => setOpentwenty(!opentwenty)} className='relative text-sm text-left font-bold max-w-18'>Middling:</h3>
                    <h3 onClick={() => setOpentwenty(!opentwenty)} className="absolute ml-19.5 -mt-5.2 font-medium text-xl text-dark">+</h3>
                    { opentwenty && (
                        <p className="relative pt-2 text-sm font-medium text-left">
                            A betting strategy where you place bets on both sides of a spread when the line
                            moves, allowing the possibility of winning both bets if the final score falls
                            between the two numbers.
                        </p>
                    )}
                </div>
            </div>

            <div>
                <div className="relative ml-5 mt-9 h-19.5 w-20.4 bg-green rounded-2xl">
                <img src={faq_styled} className='absolute mt-0 ml-19.17 h-19.5 rounded-tr-2xl'/>
                    <h3 className="relative pt-8 ml-4 max-w-16 text-left text-white text-xl font-bold">Get PickBetta for just $10 a week</h3>
                    <p className="relative pt-3 ml-4 max-w-19.3 text-left text-white text-base font-medium">
                    Your first week is always free. Start your trial now and see the difference!
                    </p>
                    <button className="relative p-2 w-13 ml-4 mt-4 float-left font-bold text-green bg-white rounded">Start Now!</button>
                </div>
            </div>
        </div>
    )
}