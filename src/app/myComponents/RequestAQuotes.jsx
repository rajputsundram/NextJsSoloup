'use client'
import { IoCall } from "react-icons/io5";
import { FaReply } from "react-icons/fa";
const RequestAQuotes=()=>{


    return(
         <>
        
        <div className=" h-full mt-28 sm:mt-[7rem] flex  flex-wrap">
            {/* textsection */}
            <div className="flex flex-col h-full sm:h-9  mx-0 px-0 w-full  sm:w-[55%] items-start">
                <h2 className="sm:ml-24 ml-7  text-blue-600 text-xl font-bold">REQUEST A QUOTE</h2>
                <h1 className="sm:ml-24 ml-7 mt-3 scale-200 font-mono font-bold text-blue-950 sm:text-5xl text-3xl  ">Need A Free Quote? Please Feel Free to Contact Us</h1>
                <div className="flex sm:ml-24 mt-8 gap-[100px]  ">
                    <div className="flex">
                        <p className=" text-2xl text-blue-800"><FaReply/></p>
                        <p className="ml-2 text-2xl font-bold">Reply within 24 hours</p>
                    </div>
                    <div className="flex">
                        <p className=" text-2xl text-blue-800"><IoCall/></p>
                        <p className="ml-2 text-2xl font-bold">24 hrs telephone support</p>
                    </div>

                </div>
                <p className="sm:ml-24  ml-7  mt-12 font-sans font-lg text-gray-600">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                <div className="sm:ml-20 ml-7  font-bold text-xl">
                  

                </div>
 {/* calls  */}

 <div className="flex sm:ml-24 my-10 ml-[21px] sm:mt-10 justify-center items-center">
               <div className="h-14 w-14  flex justify-center items-center text-white bg-blue-600 "><IoCall /></div> 
                <div className="flex flex-col text-xl font-bold gap-2 ml-6 ">
                    <p >Call to ask any question</p>
                    <p>+91 8684961182</p>
                </div>
            </div>
          
            </div>


          

            <div className=" sm:w-[34%] w-[100%] mx-5 sm:h-[34rem] h-[30rem] sm:mt-0 mt-[10%] flex flex-col justify-center items-center bg-blue-200">
<form action="" className="flex gap-8 flex-col">
    <input type="text" placeholder="Your Name" className="h-[50px] w-[400px]  outline-none p-2"/>
    <input type="text" placeholder="Your Email"  className=" h-[50px] w-[400px] outline-none p-2"/>
    <select className="outline-none h-9"  >
                                        <option selected="">Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select>
                                    <textarea name="" id="" placeholder="Message" className="w-[400px] h-[100px] outline-none p-2"></textarea>

                                    <button className="h-[50px] p-3 bg-blue-700 text-white">Request a Quotes</button>

</form>

            </div>

           

        </div>
        </>
    )



}
export default RequestAQuotes;