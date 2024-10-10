import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <>
            <div id="workflow"></div>
            <div className="mt-20">
                {/* Header */}
                <motion.h2
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide"
                >
                    Accelerate your
                    <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                        {" "}coding workflow.
                    </span>
                </motion.h2>
                
                {/* Content */}
                <div className="flex flex-wrap justify-center">
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="pt-6 p-2 w-full lg:w-1/2"
                    >
                        <img src={codeImg} alt="Code" />
                    </motion.div>

                    {/* Checklist Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}  // Konten checklist muncul dari kanan dengan opacity 0
                        whileInView={{ opacity: 1, x: 0 }}  // Saat terlihat, bergerak ke posisi normal
                        transition={{ duration: 0.8, delay: 0.4 }}  // Durasi animasi dan jeda
                        viewport={{ once: true }}  // Animasi hanya terjadi sekali
                        className="pt-12 w-full lg:w-1/2"
                    >
                        {checklistItems.map((item, index) => (
                            <div key={index} className="flex mb-12">
                                <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                                    <CheckCircle2 />
                                </div>
                                <div>
                                    <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                    <p className="text-md text-neutral-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Workflow;
