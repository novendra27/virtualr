import { motion } from "framer-motion";
import { features } from "../constants";

const FeatureSection = () => {
    return (
        <>
            <div id="features"></div>
            <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
                {/* Feature Header */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
                        feature
                    </span>
                    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking wide">
                        Easily build
                        <span className="bg-gradient-to-r from-orange-900 to-orange-800 text-transparent bg-clip-text">
                            {" "}your code
                        </span>
                    </h2>
                </motion.div>
                
                {/* Feature List */}
                <div className="flex flex-wrap mt-10 lg:mt-20">
                    {features.map((feature, index) => (
                        <motion.div 
                            key={index} 
                            className="w-full sm:w-1/2 lg:w-1/3"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex">
                                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center rounded-full">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                                    <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default FeatureSection;
