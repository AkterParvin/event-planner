import { useLoaderData } from "react-router-dom";
import Services from "../Services/Services";
import Team from "../Team/Team";
import Content from "../content/Content";






const Home = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div >
            <div className="my-28">
                <h2 className="md:text-6xl text-center font-bold text-2xl text-blue-800 mb-16">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        data.map((service, idx) => <Services key={idx}
                            service={service}
                        ></Services>)
                    }

                </div>
                <div className="my-8">
                    <Team></Team>
                </div>

                <div className="mb-10">
                    <Content></Content>
                </div>
                <div>
                    {/* <Feedback></Feedback> */}
                </div>

                
            </div>
        </div>
    );
};

export default Home;