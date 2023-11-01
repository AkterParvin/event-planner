import Nav from "../NavBar/Nav";
import  { useRef } from 'react';

const Header = () => {
 
        const videoRef = useRef(null);

        const handleMouseEnter = () => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        };

        const handleMouseLeave = () => {
            if (videoRef.current) {
                videoRef.current.pause();
            }
        };
    return (
        <div className="relative">
            <div className=' flex flex-col justify-center items-center  '>
                <div
                    className="relative group overflow-hidden"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <video
                        ref={videoRef}
                        src="/vid.mp4"
                        loop
                        muted
                        className="h-[90vh] w-screen object-cover transition-all duration-500 hover:scale-105 hover:opacity-75"
                    />
                </div>


                {/* <video src="vid.mp4"  loop muted className="h-[80vh] w-screen object-cover hover:au " /> */}

                <div className="flex flex-col justify-center items-center absolute top-[45%] text-center">
                    <h1 className="text-white font-bold text-2xl md:text-4xl lg:text-6xl mb-6 ">Corporate Event Management Services</h1>
                    <p className="text-neutral-200 font-semibold text-xl">Shift an industry | Spark a change | Shape a brand</p>
                </div>
            </div>
            <div className="absolute top-0 w-full ">
                <Nav></Nav>
            </div>
        </div>
    );
};

export default Header;