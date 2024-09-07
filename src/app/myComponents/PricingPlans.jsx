'use client'
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const PricingPlans = () => {

    const contents = [

        { heading: "Basic Plan ", p: "For Small Size Business", price: "5k" },
        { heading: "Standard Plan ", p: "For Medium Size Business", price: "9k" },
        { heading: "Advanced Plan ", p: "For Large Size Business", price: "16k" }
    ]
    const cards = [
        
            {
              id: 1,
              item: [
                { text: 'HTML5 & CSS3', isChecked: true },
                { text: 'Bootstrap v5', isChecked: true },
                { text: 'Responsive Layout', isChecked: false },
                { text: 'Cross-browser Support', isChecked: false },
              ],
            },
            {
              id: 2,
              item: [
                { text: 'HTML5 & CSS3', isChecked: true },
                { text: 'Bootstrap v5', isChecked: true },
                { text: 'Responsive Layout', isChecked: true },
                { text: 'Cross-browser Support', isChecked: false },
              ],
            },
            {
              id: 3,
              item: [
                { text: 'HTML5 & CSS3', isChecked: true },
                { text: 'Bootstrap v5', isChecked: true },
                { text: 'Responsive Layout', isChecked:true },
                { text: 'Cross-browser Support', isChecked: true },
              ],
            },
          ];

    return (
        <div className="h-full sm:16 mt-24 ">
            {/* Heading */}
            <div className="flex flex-col  justify-center mb-12 items-center">
                <h2 className="font-bold sm:my-6 text-xl text-blue-600">Our Services</h2>
                <h1 className="sm:text-6xl text-3xl  flex text-center w-[100%] sm:w-[50%] font-bold">Custom IT Solutions for Your Successful Business
                </h1>
            </div>

            <div className="flex flex-col sm:flex-row sm:mt-16  justify-center items-center">
                {
                    contents.map((item, index) => {
                        return (
                            <>
                                <div className={`bg-blue-200 shadow-xl   h-[490px] w-[430px] rounded-sm key={index} ${index == 1 ? "bg-white" : "bg-blue-200"}`}>
                                    <div className="ml-12 h-24 flex flex-col justify-center border-">
                                        <h1 className="text-blue-700 font-extrabold text-3xl font-mono">{item.heading}</h1>
                                        <p className="text-brown-200 my-1">{item.p}</p>
                                    </div>
                                    <hr className="text-gray-500" />
                                    <div className="flex items-center ml-12 my-4">
                                        <h1 className="text-extrabold font-bold text-5xl">{item.price}</h1><p className="font-bold">/Month</p>
                                    </div>
                                    
                                        {/* Map corresponding card items here */}
                        <div className="ml-12">
                        {cards[index].item.map((item, i) => (
                            <div key={i} className="flex justify-between items-center mb-2">
                                <p>{item.text}</p>
                                <p className="mx-6 ">{item.isChecked ? <FaCheck className="text-green-500" /> : <ImCross className="text-red-500" />}</p>
                            </div>
                        ))}
                    </div>
                                    

                                      

                                    <div className="ml-12 mt-9">
                                        <button className="w-36 bg-blue-500 text-white h-12">Order Now</button>
                                    </div>

                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default PricingPlans;