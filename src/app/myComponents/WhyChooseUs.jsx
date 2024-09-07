'use client'

import { LiaUsersCogSolid } from "react-icons/lia";
import { IoCallSharp } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";
const ChooseUs = () => {
    return (

        <div className="sm:mt-24  mt-[8rem] h-auto">
            {/* Heading sec */}
            <div className="flex flex-col  justify-center items-center">
                <h2 className="font-bold sm:my-6 text-xl text-blue-600">WHY CHOOSE US</h2>
                <h1 className="sm:text-6xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            {/* second sec */}
            <div className="flex justify-center sm:flex-row flex-col mt-10 items-center">
                <div className="sm:ml-24 ml-5 ">
                <div className="flex flex-col  mb-10">
                    <p className= "  h-14 w-14 bg-blue-700 text-white  flex justify-center items-center"><LuPackage/></p>
                    <h1 className="font-bold text-xl my-3">Best In Industry</h1>
                    <p className="w-[420px]">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>

                </div>
                <div className="flex flex-col">
                    <p className= "  h-14 w-14 bg-blue-700 text-white  flex justify-center items-center"><FaAward/></p>
                    <h1 className="font-bold text-xl my-3">Award Winning</h1>
                    <p className="w-[420px]">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>

                </div>
                </div>
                <div className="relative bg-[url('/Images/whyChooseUs.jpg')] h-[400px] w-[98%] sm:w-[30%] bg-cover mt-8 m-2 bg-center"></div>
               <div className="flex flex-col ml-5 sm:ml-10">
                <div className="flex flex-col mb-10">
                    <p className= "  h-14 w-14 bg-blue-700 text-white  flex justify-center items-center"><LiaUsersCogSolid/></p>
                    <h1 className="font-bold text-xl my-3">Professional Staff</h1>
                    <p className="w-[420px]">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                </div>
                <div className="flex flex-col">
                    <p className= " h-14 w-14 bg-blue-700 text-white  flex justify-center items-center"><IoCallSharp/></p>
                    <h1 className="font-bold text-xl my-3">24/7 Support</h1>
                    <p className="w-[420px]">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
                </div>
                </div>
            </div>


        </div>
    )
}

export default ChooseUs;