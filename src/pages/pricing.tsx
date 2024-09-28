import check from './../assets/icons/check_green.png'

export const Pricing = () => {
    return (
        <div className="relative h-84 w-full overflow-hidden">
            <div>
                <h3 className="relative text-4xl text-dark font-extrabold mt-11 ml-5 max-w-20 text-center">
                    Pricing
                </h3>
                <p className="relative mt-3 text-sm text-gray text-center ml-9 max-w-19">
                    Choose the pricing plan that works best for you and start your membership now.
                </p>
            </div>

            <div className='flex flex-col'>
                <div className="relative ml-5 mt-5 h-21 w-20.5 bg-white shadow rounded-xl">
                    <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center">
                        $10/wk
                    </h3>
                    <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center">
                        Basic Plan
                    </h3>
                    <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center">
                        Billed weekly
                    </h3>

                    <div>
                        <img src={check} className='relative mt-5.2 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Access to all basic features
                        </p>
                    </div>

                    <div>
                        <img src={check} className='relative mt-3 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Basic reporting and analytics
                        </p>
                    </div>

                    <button className='relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter'>Choose plan</button>
                </div>

                <div className="relative ml-5 mt-4 h-21 w-20.5 bg-white shadow rounded-xl">
                    <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center">
                        $30/mth
                    </h3>
                    <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center">
                        Most Popular Plan
                    </h3>
                    <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center">
                        Billed monthly
                    </h3>

                    <div>
                        <img src={check} className='relative mt-5.2 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            200+ integrations
                        </p>
                    </div>

                    <div>
                        <img src={check} className='relative mt-3 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Advanced reporting and analytics
                        </p>
                    </div>

                    <button className='relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter'>Choose plan</button>
                </div>

                <div className="relative ml-5 mt-4 h-23.5 w-20.5 bg-white shadow rounded-xl">
                    <h3 className="relative text-4xl text-dark font-extrabold pt-4 max-w-20 text-center">
                        $300/season
                    </h3>
                    <h3 className="relative text-xl text-dark font-extrabold pt-3 max-w-20 text-center">
                        Premium Plan
                    </h3>
                    <h3 className="relative text-base text-gray font-medium pt-3 max-w-20 text-center">
                        Billed seasonally
                    </h3>

                    <div>
                        <img src={check} className='relative mt-5.2 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Advanced custom fields
                        </p>
                    </div>

                    <div>
                        <img src={check} className='relative mt-3 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Audit log and data history
                        </p>
                    </div>

                    <div>
                        <img src={check} className='relative mt-3 ml-5 '/>
                        <p className="relative ml-8 text-base text-gray font-medium -mt-5 max-w-20 text-left">
                            Unlimited individual users
                        </p>
                    </div>

                    <button className='relative mt-4 text-base text-green font-extrabold h-7 w-19.5 border rounded-xl hover:bg-gray-lighter'>Choose plan</button>
                </div>
            </div>
        </div>
    )
}