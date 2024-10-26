//import { Link } from "react-router-dom";
import home_image from './../assets/images/home_image.png'
import home_image2 from './../assets/images/home_image2.png'
import home_image3 from './../assets/images/home_image3.png'
import home_image4 from './../assets/images/home_image4.png'
import presentation from './../assets/icons/presentation.png'
//import writing from './../assets/icons/writing.png'
import analysis from './../assets/icons/analysis.png'
import faq_styled from './../assets/images/faq_styled.png'
import star from './../assets/icons/star_orange.png'
import leslie from './../assets/images/leslie.png'

export const Landingpage = () => {

    return (
      <div className="home">
        <div>
          <h3 className="relative text-4xl text-dark font-extrabold font-montserrat mt-11 ml-5 max-w-20 text-center">
            Your ultimate source for <span className="italic text-green-deep underline"> fact-checked </span>sports <span className="italic text-green-deep underline">betting data</span>
          </h3>
        </div>

        <div>
          <p className="relative mt-3 text-sm text-gray text-center ml-9 max-w-19 font-montserrat">We don’t advise you to pick, we advise you to pickbetta!</p>
        </div>
        <div>
          <img src={home_image} alt="" className="relative sm:mt-4 sm:ml-8 sm:w-19" />
          <p className="relative sm:text-center sm:text-base text-gray sm:mt-4 sm:ml-5.2 sm:max-w-20 font-montserrat">Experience the power of verified data- Try pickbetta free for one week. We’re so
            confident in the value that we deliver that we’re giving you the chance to fact-check
            our data yourself. See the difference that accurate, reliable insights can make in your
            betting strategy.
          </p>
          <p className="relative mt-3 ml-5.2 text-dark text-base font-bold max-w-20 font-montserrat">
          Try PickBetta free for a week—just $10 a week after. Start winning smarter today!
          </p>
          <button className="relative h-7 w-20 -ml-0.4 bg-green-deep rounded text-white mt-4 font-montserrat">Start now!</button>
        </div>

        <div>
          <h3 className="relative ml-5.2 mt-8 text-xl font-extrabold text-left font-montserrat">Who We Are</h3>
          <p className="relative mt-4 ml-5.2 text-base text-gray text-left max-w-19.5 font-montserrat">
          We are sports bettors, just like you. After decades of placing bets, scrolling countless sites
          for reliable information, and dealing with the frustrations of biased picks and unreliable data,
          we knew there had to be a better way. That’s why we created PickBetta—a platform designed by
          bettors, for bettors. We understand what you need because we’re in the game with you. We place
          multiple bets daily during year round.
          </p>
          <img src={home_image2} alt="" className="relative mt-4 ml-5 w-20.5" />
        </div>

        <div>
          <h3 className="relative ml-5.2 mt-8 text-xl font-extrabold text-left font-montserrat">Why Create PickBetta</h3>
          <p className="relative mt-4 ml-5.2 text-base text-gray text-left max-w-19.4 font-montserrat">
          The betting community deserves better than the usual fluff and unreliable picks that saturate
          the market. We built PickBetta to fill a crucial gap—a state-of-the-art digital sports data
          warehouse that delivers only the most accurate, fact-checked information. Our goal is to empower
          you with the data you need to make informed, confident betting decisions. No fluff, no gimmicks—just
          pure, valuable insights.
          </p>
          <img src={home_image3} alt="" className="relative mt-4 ml-5 w-20.5" />
        </div>

        <div>
          <h3 className="relative ml-5 mt-8 text-xl font-extrabold text-left font-montserrat">What Do We Offer</h3>
          <p className="relative mt-4 ml-5 text-base text-gray text-left max-w-19.4 font-montserrat">
          PickBetta is your go-to source for trustworthy sports betting data. With nearly a century of
          sports data at your fingertips, our platform provides:
          </p>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-17 w-20.5 rounded-xl">
          <img src={presentation} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left font-montserrat">Fact-Checked Insights</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19 font-montserrat">Every stat, trend, and
              piece of data is rigorously verified to ensure accuracy.
            </p>
          </div>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-17 w-20.5 rounded-xl">
          <img src={presentation} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left font-montserrat">Customizable Tools</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6 font-montserrat">Tailor your
              experience with personalized dashboards, real-time alerts, and interactive features.
            </p>
          </div>
        </div>

        <div>
          <div className="relative ml-5 mt-6 bg-gray-lighter h-19.2 w-20.5 rounded-xl">
          <img src={analysis} alt="" className="relative pt-6 ml-4" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left font-montserrat">Comprehensive Coverage</h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6 font-montserrat">Whether you’re into
              NFL, NCAAF, NCAAB, or NBA basketball, we’ve got you covered with detailed analysis and timely
              data.
            </p>
          </div>
        </div>

        <div>
          <h3 className="relative mt-8 ml-5 text-2xl font-extrabold text-left font-montserrat">How We Deliver Value</h3>
          <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.4 font-montserrat">
          We deliver unparalleled data through a cutting-edge online mobile portal designed for ease of
          use and accessibility. Our platform is built to reach the entire betting community through the
          power of word-of-mouth. We know that once you experience the value PickBetta offers, you’ll
          spread the word—because, like us, you recognize the difference that accurate, unbiased data makes.
          </p>
          <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.4 font-montserrat">
          <span className="text-xl font-bold">Join us at PickBetta—</span>where we don’t advise you to pick, we advise you to pick better. This
          is more than just a product; it’s a movement for a smarter, more informed betting community.
          </p>
          <img src={home_image4} alt="" className="relative mt-4 ml-5 w-20.5" />
        </div>

        <div>
          <h3 className='relative sm:ml-5 sm:mt-7 sm:text-left sm:text-dark sm:text-base font-bold'>The Clients' Testimonials</h3>
          <div className='flex flex-nowrap overflow-scroll scroll-smooth'>
            <div className='relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl'>
              <div className='flex gap-1'>
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className='relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium'>
              “You made it so simple. My new site is so much faster and easier to work with than my old site.
              I just choose the page, make the change.”
              </p>

              <div>
              <img src={leslie} alt="" className="relative sm:pt-0.5 sm:ml-0" />
              <h3 className='relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold'>
              Leslie Alexander
              </h3>
              <h3 className='relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium'>
              Freelance React Developer
              </h3>
              </div>
            </div>

            <div className='relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl'>
              <div className='flex gap-1'>
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className='relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium'>
              “You made it so simple. My new site is so much faster and easier to work with than my old site.
              I just choose the page, make the change.”
              </p>

              <div>
              <img src={leslie} alt="" className="relative sm:pt-0.5 sm:ml-0" />
              <h3 className='relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold'>
              Leslie Alexander
              </h3>
              <h3 className='relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium'>
              Freelance React Developer
              </h3>
              </div>
            </div>

            <div className='relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl'>
              <div className='flex gap-1'>
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className='relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium'>
              “You made it so simple. My new site is so much faster and easier to work with than my old site.
              I just choose the page, make the change.”
              </p>

              <div>
              <img src={leslie} alt="" className="relative sm:pt-0.5 sm:ml-0" />
              <h3 className='relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold'>
              Leslie Alexander
              </h3>
              <h3 className='relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium'>
              Freelance React Developer
              </h3>
              </div>
            </div>
          </div>
        </div>

        <div>
            <div className="relative ml-5 mt-9 h-19.5 w-20.4 bg-green rounded-2xl">
            <img src={faq_styled} className='absolute mt-0 ml-19.17 h-19.5 rounded-tr-2xl'/>
                <h3 className="relative pt-8 ml-4 max-w-16 text-left text-white text-xl font-bold font-montserrat">Get PickBetta for just $10 a week</h3>
                <p className="relative pt-3 ml-4 max-w-19.3 text-left text-white text-base font-medium font-montserrat">
                Your first week is always free. Start your trial now and see the difference!
                </p>
                <button className="relative p-2 w-13 ml-4 mt-4 float-left font-bold text-green bg-white rounded font-montserrat">Start Now!</button>
            </div>
        </div>
      </div>
    );
  };