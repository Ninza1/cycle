"use client";

import { motion } from "framer-motion";
import style from "./home.module.css"



export const Hero = () => {


    const arrow = {
        initial: { opacity: 0, top: "120%" },
        animate: { opacity: 1, top: "100%" },
    }
    return (
        <div className={style.hero}>
            <div className=''>
                <div>
                    <h1 className='text-[3em] text-center font-[600] text-(--black)'> Your feedback hub, <br /> on autopilot</h1>
                    <p className='text-black/54 max-w-[550px] mx-auto text-center'>
                        Cycle is the fastest way for your team to capture product feedback and share customer insights – without the busywork.
                    </p>
                </div>
                <div className={style.dropzon + " max-w-[66.2rem] w-[40rem] mx-auto mt-15 p-5 py-10 border-1 border-[#0b08ad33]"}>
                    <div className="relative z-1 overflow-hidden rounded-[16px]">
                        <div className={style.content + ' flex flex-col justify-center items-center gap-5 px-6 py-10 border-1 border-dashed overflow-hidden relative border-[#38388a1f] rounded-[16px] backdrop-blur-xs boxshodow-[0px_0px_24px_4px_#FFF_inset]'}>

                            <div className="w-[60px] h-[60px] flex justify-center items-center ">
                                <div className={style.sphere + ' min-w-[120px] min-h-[120px]'}></div>
                            </div>
                            <motion.div
                                className=" font-medium relative"
                            >
                                Drop Anything to Capture Feedback
                                <motion.div
                                    className="absolute top-0 left-0 w-30 h-[100%] overflow-hidden"
                                    style={{ background: "linear-gradient(90deg, transparent 0%, rgb(255 255 255 / 97%) 50%, transparent 100%)" }}
                                    animate={{
                                        left: ["-50%", '100%', "100%", "100%", "100%"],
                                    }}
                                    transition={{
                                        duration: 10,         // Time for one full cycle (5 seconds)
                                        repeat: Infinity,    // Infinite loop
                                        repeatType: 'loop',  // Continuous loop
                                        ease: 'linear',
                                        delay: 2     // Smooth linear motion
                                    }}
                                />
                            </motion.div>
                        </div>
                        <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2f686ef1975f6b392a5f_shadow-dropzone-min.png" loading="lazy" sizes="(max-width: 767px) 100vw, (max-width: 991px) 99vw, 85vw"
                            srcSet="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2f686ef1975f6b392a5f_shadow-dropzone-min-p-500.png 500w, https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65ee2f686ef1975f6b392a5f_shadow-dropzone-min.png 776w" alt=""
                            className="shadows absolute -z-1 translate-[-50%] top-[70%] left-[40%] w-[110%" style={{ opacity: "0.6", visibility: "inherit" }} />
                    </div>

                </div>

                <motion.div className="absolute top-20 left-40" whileHover="animate" initial="initial"
                    animate="initial">
                    <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65f0905f0598c5d524e19953_intercom-svg-55.svg" alt="" />
                    <motion.div
                        variants={arrow}
                        className="absolute top-[100%] left-[50%] translate-x-[-50%]"
                    >
                        <img src="https://cdn.prod.website-files.com/62b5b85dd560583e288cb389/65e6f2dc09d7f8b41fbe8489_intercom-svg.svg"
                            className="border-1 border-dashed border-[#2b44e7]  rounded-[8px] p-2  min-w-50" alt="" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}
