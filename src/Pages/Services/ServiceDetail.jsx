import { useLoaderData, useParams } from "react-router-dom";
import Feedback from "../Feedback/Feedback";
// import Header from "../Shared/Header/Header";


const ServiceDetail = () => {
    const service = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const getServiceId =
        service.find(serviceId => serviceId.id === idInt);

    // console.log(getServiceId);
    const { title, thumbnail_img, detail, price, customer_feedback
    } = getServiceId;
    // console.log(getServiceId, customer_feedback);
    return (
        <div>
            <div className="mt-14  bg-slate-50 flex justify-center ">
                <div className="pt-6 md:px-8 lg:px-14 md:pt-5 ">

                    <div className="w-[92%] md:w-[80%] mx-auto h-[60%] relative ">
                        <img src={thumbnail_img} alt="" className="w-full h-[98%] rounded-xl inset-0 shadow-2xl shadow-blue-500" />

                        <div className="absolute top-[78%]  left-0 w-full h-[20%] inset-0 bg-neutral-600 bg-opacity-80 overflow-hidden rounded-b-xl">

                            <p className=" px-4 py-2 rounded-lg text-xl font-semibold text-white top-[20%] absolute left-8"

                            >Price Starts from ${price}</p>
                        </div>
                    </div>

                    <div className="w-[80%] mx-auto">
                        <h1 className="mt-8 md:mt-14 text-2xl md:text-4xl font-bold mb-6">{title} </h1>
                        <h2 className="text-[#0b0b0bb3] text-base font-medium">
                            {detail}
                        </h2>
                    </div>
                </div>
               
            </div>
            <div className="">
                <div className="relative w-full h-full">
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
                </div>

            </div>
        </div>
    );
};

export default ServiceDetail;