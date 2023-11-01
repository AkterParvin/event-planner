import { Outlet } from "react-router-dom";

import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer/Footer";


const Root = () => {
    return (
        <div className="container mx-auto">
          <Header></Header>
            <div className=" max-w-7xl mx-auto  px-5 md:px-8 lg:px-10">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;