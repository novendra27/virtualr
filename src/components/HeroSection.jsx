import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"

const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            {/* Header */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR builds tools 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                    {" "}for developers
                </span>
            </h1>
            {/* Description */}
            <p className="mt-10 text-lg text-center text-neutral-500 max-2-4xl">
                Empower your creativity and bring your VR app ideas to life witg our intuitive development tools. Get Started today and turn your dreams into reality.
            </p>
            {/* Button Getting Started */}
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-500 py-3 px-4 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">
                    Documentation
                </a>
            </div>
            {/* Video */}
            <div className="flex mt-10 justify-center">
                <VideoContent srcVideo={video1} />
                <VideoContent srcVideo={video2} />
            </div>
        </div>
    )
}

function VideoContent({ srcVideo }) {
    return (
        <video autoPlay loop muted className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
            <source src={srcVideo} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    );
}

export default HeroSection