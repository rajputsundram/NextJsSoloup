'use client'
import  FadeInSection from "./myComponents/AnimatedComponents"
import ChooseUs from "./myComponents/WhyChooseUs"
import CraetiveSec from "./myComponents/CreativeSec/CreativeSec";
import Service from "./services/page";
import PricingPlans from "./myComponents/PricingPlans"
import RequestAQuote from "./myComponents/RequestAQuotes"
import OurClient from "./myComponents/OurClients"
import OurTeamMembers from "./myComponents/OurTeamMembers";
import Blogs from "./blog/page"
import Footer from "./myComponents/Footer/Footer"


import AboutUs from "./about/page";
import { useState, useEffect } from "react";


export default function Home() {
  return (
   <main className=" flex flex-col items-center justify-center">
    
<CraetiveSec/>
<AboutUs/>
<ChooseUs/>
<Service/>
<PricingPlans/>
<RequestAQuote/>
<OurClient/>
<OurTeamMembers/>
<Blogs/>
<Footer/>


   </main>
  );
}
