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
          <h3 className="relative sm:text-center text-4xl text-dark font-extrabold font-montserrat sm:mt-11 sm:ml-5 sm:max-w-20 xl:ml-10  xl:text-6xl xl:max-w-45 xl:text-left xl:leading-20">
            Your ultimate source for{" "}
            <span className="sm:italic sm:text-green-deep sm:underline xl:font-medium">
              {" "}
              fact-checked{" "}
            </span>
            sports{" "}
            <span className="sm:italic sm:text-green-deep sm:underline xl:font-medium">
              betting data
            </span>
          </h3>
        </div>

        <div>
          <p className="relative  mt-3 text-sm text-gray text-center ml-9 max-w-19 font-montserrat xl:text-base xl:max-w-30 xl:text-left xl:ml-8 xl:text-green-deep ">
            We don’t advise you to pick, we advise you to pickbetta!
          </p>
        </div>
        <div>
          <img
            src={home_image}
            alt=""
            className="relative sm:mt-4 sm:ml-8 sm:w-19 xl:ml-55 xl:-mt-19.2 xl:w-31 xl:h-35"
          />
          <p className="relative sm:text-center sm:text-base sm:text-gray sm:mt-4 sm:ml-5.2 sm:max-w-20 font-montserrat xl:text-left xl:text-base xl:ml-10 xl:-mt-19.3 xl:max-w-39.5 xl:text-dark-gray xl:leading-20">
            Experience the power of verified data- Try pickbetta free for one
            week. We’re so confident in the value that we deliver that we’re
            giving you the chance to fact-check our data yourself. See the
            difference that accurate, reliable insights can make in your betting
            strategy.
          </p>
          <p className="relative sm:mt-3 ml-5.2 sm:text-dark sm:text-base sm:font-bold sm:max-w-20 sm:font-montserrat xl:text-left xl:ml-10 xl:max-w-39.5">
            Try PickBetta free for a week—just $10 a week after. Start winning
            smarter today!
          </p>
          <button className="relative sm:h-7 sm:w-20 sm:-ml-0.4 sm:bg-green-deep rounded sm:text-white sm:mt-4 font-montserrat xl:float-left xl:ml-10 xl:w-15 xl:mt-5">
            Start now!
          </button>
        </div>

        <div>
          <h3 className="relative sm:ml-5.2 sm:mt-8 sm:text-xl sm:font-extrabold sm:text-left font-montserrat  xl:text-right xl:text-dark-gray-900 xl:text-5xl xl:mt-20 xl:mr-21">
            Who We Are
          </h3>
          <p className="relative sm:mt-4 sm:ml-5.2 sm:text-base sm:text-gray sm:text-left sm:max-w-19.5 sm:font-montserrat xl:text-left xl:mt-2 xl:ml-49 xl:max-w-37.5">
            We are sports bettors, just like you. After decades of placing bets,
            scrolling countless sites for reliable information, and dealing with
            the frustrations of biased picks and unreliable data, we knew there
            had to be a better way. That’s why we created PickBetta—a platform
            designed by bettors, for bettors. We understand what you need
            because we’re in the game with you. We place multiple bets daily
            during year round.
          </p>
          <img
            src={home_image2}
            alt=""
            className="relative sm:mt-4 sm:ml-5 sm:w-20.5 xl:ml-12 xl:-mt-20 xl:w-35"
          />
        </div>

        <div>
          <h3 className="relative sm:ml-5.2 sm:mt-8 sm:text-xl sm:font-extrabold sm:text-left font-montserrat xl:text-left xl:mt-17 xl:ml-10 xl:text-5xl">
            Why Create PickBetta
          </h3>
          <p className="relative sm:mt-4 sm:ml-5.2 sm:text-base sm:text-gray sm:text-left sm:max-w-19.4 xl:text-left xl:ml-10 xl:max-w-35 font-montserrat">
            The betting community deserves better than the usual fluff and
            unreliable picks that saturate the market. We built PickBetta to
            fill a crucial gap—a state-of-the-art digital sports data warehouse
            that delivers only the most accurate, fact-checked information. Our
            goal is to empower you with the data you need to make informed,
            confident betting decisions. No fluff, no gimmicks—just pure,
            valuable insights.
          </p>
          <img
            src={home_image3}
            alt=""
            className="relative sm:mt-4 sm:ml-5 sm:w-20.5  xl:ml-47  xl:w-35 xl:-mt-20"
          />
        </div>

        <div>
          <h3
            className="relative sm:ml-5 sm:mt-8 sm:text-xl sm:font-extrabold sm:text-left font-montserrat
          xl:text-center xl:text-dark-gray-900 xl:text-5xl xl:mt-15"
          >
            What Do We Offer
          </h3>
          <p className="relative sm:mt-4 sm:ml-5 sm:text-base sm:text-gray sm:text-left sm:max-w-19.4 font-montserrat xl:text-center xl:max-w-72 xl:ml-13">
            PickBetta is your go-to source for trustworthy sports betting data.
            With nearly a century of sports data at your fingertips, our
            platform provides:
          </p>
        </div>

        <div>
          <div className="relative sm:ml-5 sm:mt-6 sm:bg-gray-lighter sm:h-17 sm:w-20.5 sm:rounded-xl xl:bg-white">
            <img
              src={presentation}
              alt=""
              className="relative sm:pt-6 sm:ml-4 xl:w-8 xl:ml-12"
            />
            <h3 className="relative sm:ml-5 sm:mt-4 text-xl font-extrabold text-left font-montserrat xl:ml-12">
              Fact-Checked Insights
            </h3>
            <p
              className="relative mt-3 ml-5 sm:text-base sm:text-gray sm:text-left sm:max-w-19 font-montserrat
            xl:text-gray xl:ml-12"
            >
              Every stat, trend, and piece of data is rigorously verified to
              ensure accuracy.
            </p>
          </div>
        </div>

        <div>
          <div className="relative sm:ml-5 sm:mt-6 sm:bg-gray-lighter sm:h-17 sm:w-20.5 sm:rounded-xl xl:ml-35 xl:-mt-17 xl:bg-white">
            <img
              src={presentation}
              alt=""
              className="relative pt-6 ml-4 xl:w-8"
            />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left font-montserrat">
              Customizable Tools
            </h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6 font-montserrat xl:max-w-18">
              Tailor your experience with personalized dashboards, real-time
              alerts, and interactive features.
            </p>
          </div>
        </div>

        <div>
          <div className="relative sm:ml-5 sm:mt-6 sm:bg-gray-lighter sm:h-19.2 sm:w-20.5 sm:rounded-xl xl:ml-64 xl:-mt-17 xl:bg-white">
            <img src={analysis} alt="" className="relative pt-6 ml-4 xl:w-8" />
            <h3 className="relative ml-5 mt-4 text-xl font-extrabold text-left font-montserrat">
              Comprehensive Coverage
            </h3>
            <p className="relative mt-3 ml-5 text-base text-gray text-left max-w-19.6 font-montserrat xl:max-w-17">
              Whether you’re into NFL, NCAAF, NCAAB, or NBA basketball, we’ve
              got you covered with detailed analysis and timely data.
            </p>
          </div>
        </div>

        <div>
          <h3
            className="relative sm:mt-8 sm:ml-5 sm:text-2xl sm:font-extrabold sm:text-left sm:font-montserrat 
          xl:text-right xl:text-dark-gray-900 xl:text-3xl xl:mt-15 xl:mr-27.5"
          >
            How We Deliver Value
          </h3>
          <p className="relative sm:mt-3 sm:ml-5 sm:text-base sm:text-gray sm:text-left sm:max-w-19.4 font-montserrat xl:text-left   xl:ml-40 xl:max-w-40">
            We deliver unparalleled data through a cutting-edge online mobile
            portal designed for ease of use and accessibility. Our platform is
            built to reach the entire betting community through the power of
            word-of-mouth. We know that once you experience the value PickBetta
            offers, you’ll spread the word—because, like us, you recognize the
            difference that accurate, unbiased data makes.
          </p>
          <p
            className="relative sm:mt-3 sm:ml-5 sm:text-base sm:text-gray sm:text-left sm:max-w-19.4 font-montserrat
          xl:text-left   xl:ml-40 xl:max-w-40"
          >
            <span className="text-xl font-bold">Join us at PickBetta—</span>
            where we don’t advise you to pick, we advise you to pick better.
            This is more than just a product; it’s a movement for a smarter,
            more informed betting community.
          </p>
          <img
            src={home_image4}
            alt=""
            className="relative sm:mt-4 sm:ml-5 sm:w-20.5 xl:ml-10 xl:-mt-20 xl:w-30"
          />
        </div>

        <div>
          <h3
            className="relative sm:ml-5 sm:mt-7 sm:text-left sm:text-dark sm:text-base font-bold
          xl:text-center xl:text-dark-gray-900 xl:text-5xl xl:mt-15"
          >
            The Clients' Testimonials
          </h3>
          <div className="flex flex-nowrap overflow-scroll scroll-smooth">
            <div className="relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:ml-11.7 xl:min-w-24">
              <div className="flex gap-1">
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className="relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>

              <div>
                <img
                  src={leslie}
                  alt=""
                  className="relative sm:pt-0.5 sm:ml-0"
                />
                <h3 className="relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold">
                  Leslie Alexander
                </h3>
                <h3 className="relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium">
                  Freelance React Developer
                </h3>
              </div>
            </div>

            <div className="relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:min-w-24">
              <div className="flex gap-1">
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className="relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>

              <div>
                <img
                  src={leslie}
                  alt=""
                  className="relative sm:pt-0.5 sm:ml-0"
                />
                <h3 className="relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold">
                  Leslie Alexander
                </h3>
                <h3 className="relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium">
                  Freelance React Developer
                </h3>
              </div>
            </div>

            <div className="relative sm:ml-5 sm:mt-5 sm:h-17 sm:w-20.5 sm:min-w-20.5 sm:bg-white shadow rounded-xl xl:min-w-24">
              <div className="flex gap-1">
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-4" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
                <img src={star} alt="" className="relative sm:pt-5 sm:ml-0" />
              </div>

              <p className="relative sm:ml-4 sm:mt-5 sm:text-left sm:text-gray sm:text-sm sm:max-w-19.6 font-medium">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>

              <div>
                <img
                  src={leslie}
                  alt=""
                  className="relative sm:pt-0.5 sm:ml-0"
                />
                <h3 className="relative sm:-mt-7.5 sm:ml-8.5 sm:text-left sm:test-dark sm:text-sm font-bold">
                  Leslie Alexander
                </h3>
                <h3 className="relative sm:mt-0.5 sm:ml-8.5 sm:text-left sm:test-gray sm:text-xss font-medium">
                  Freelance React Developer
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative sm:ml-5 sm:mt-9 sm:h-19.5 sm:w-20.4 bg-green sm:rounded-2xl xl:ml-9 xl:mt-9 xl:h-19.5 xl:w-80 xl:rounded-3xl">
            <img
              src={faq_styled}
              className="absolute sm:mt-0 sm:ml-19.17 sm:h-19.5 sm:rounded-tr-2xl xl:ml-66.2 xl:w-17 xl:rounded-tr-3xl xl:rounded-br-3xl"
            />
            <h3 className="relative sm:pt-8 sm:ml-4 sm:max-w-16 text-left text-white sm:text-xl font-bold font-montserrat xl:text-5xl xl:pt-8 xl:ml-10 xl:max-w-55">
              Get PickBetta for just $10 a week
            </h3>
            <p className="relative sm:pt-3 sm:ml-4 sm:max-w-19.3 text-left text-white sm:text-base font-medium font-montserrat xl:pt-3 xl:ml-10 xl:max-w-50 xl:text-xl">
              Your first week is always free. Start your trial now and see the
              difference!
            </p>
            <button className="relative sm:p-2 sm:w-13 sm:ml-4 sm:mt-4 float-left font-bold text-green bg-white rounded font-montserrat xl:p-2 xl:w-17 xl:ml-10 xl:mt-4">
              Start Now!
            </button>
          </div>
        </div>
      </div>
    );
  };