import Marquee from "react-fast-marquee";
import PropTypes from 'prop-types';

const Feedback = ({ feedback }) => {
    const { name,comment } = feedback;
    console.log(feedback)
  

    return (
        <div >

            <div className="">
              
                <Marquee>
                    <div className="max-w-xs h-96 ">

                        <div className="p-8 bg-gray-900 rounded">
                            <div className="mb-4 text-center">

                                <h2 className="text-center mb-2 text-xl font-semibold text-white lg:text-4xl">
                                    {name}
                                </h2>
                                <p className="text-lg font-medium tracking-wide text-white">
                                    {comment}
                                </p>

                            </div>
                        </div>
                        <div className="w-11/12 h-3 mx-auto bg-gray-900 rounded-b opacity-75" />
                        <div className="w-10/12 h-3 mx-auto bg-gray-900 rounded-b opacity-50" />
                        <div className="w-9/12 h-3 mx-auto bg-gray-900 rounded-b opacity-25" />


                    </div>
                </Marquee>

                {/* <div className="relative w-full h-full">
                    <div className="absolute hidden w-full bg-gray-50 lg:block h-96" />
                    <div className=" 
                    relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-400 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="2c67e949-4a23-49f7-bf27-ca140852cf21"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#2c67e949-4a23-49f7-bf27-ca140852cf21)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Affordable</span>
                                </span>{' '}
                                for everyone
                            </h2>
                            <p className="text-base text-gray-700 md:text-lg">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae.
                            </p>
                        </div>
                        <div className="grid grid-cols-3">
                            {
                                customer_feedback.map((feedback, idx) => <Feedback key={idx}
                                    feedback={feedback}
                                ></Feedback>)
                            }
                        </div>

                    </div>


                    <></>
                </div> */}


            </div>
        </div>
    );
};

Feedback.propTypes = {
    feedback: PropTypes.object
}
export default Feedback;