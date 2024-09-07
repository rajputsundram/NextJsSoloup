'use client'

import { MdOutlineSecurity } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";
import { FaCode } from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { FaSearch } from "react-icons/fa";
const Service = () => {
    const content = [
        { icon: <MdOutlineSecurity />, name: "Cyber Security", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: <GrAnalytics />, name: "Data Analytics", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: < FaCode />, name: "Web Development", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: < DiAndroid />, name: "Apps Development", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { icon: <FaSearch />, name: "SEO Optimization", para: "Amet justo dolor lorem kasd amet magna sea stet eos vero lorem ipsum dolore sed" },
        { heading: "", name: "", para: "" },
    ]
    return (
        <div className="sm:mt-36 mt-10">
            {/* Heading */}
            <div className="flex flex-col  justify-center items-center">
                <h2 className="font-bold sm:my-6 text-xl text-blue-600">Our Services</h2>
                <h1 className="sm:text-6xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">Custom IT Solutions for Your Successful Business
                </h1>
            </div>
            {/* contentes */}
            <div className="flex flex-wrap justify-center items-center gap-16 mt-20">
                {
                    content.map((item, index) => {
                        return (
                            <>

                                <div className="rounded-[2px] flex  h-[270px] w-[390px] bg-blue-100 justify-center flex-col items-center">
                                    <div className="bg-blue-500 transform rotate-[50deg] rounded-[1px] mb-5">
                                        <p className="transform rotate-[-50deg] h-16 w-16 flex justify-center items-center text-white  ">{item.icon}</p>
                                    </div>
                                    <h1 className="font-bold text-2xl">{item.name}</h1>
                                    <p className="flex text-center p-4">{item.para}</p>
                                </div>
                            </>
                        )

                    })
                }

            </div>

            <div>

            </div>
        </div>
    )
}

export default Service;