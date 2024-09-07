
"use client"
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import {  usePathname } from 'next/navigation';

const SecondNav=({containerStyle,linksStyle})=>{
    const pathname=usePathname();

    const links=[
        {name:"home",path:"/"},
        {name:"about",path:"/about"},
        {name:"services",path:"/services"},
        {name:"blog",path:"/blog"},
        {name:"pages",path:"/pages"},
        {name:"contact",path:"/contact"},
    ]
    return(
<div className="flex  justify-between items-center h-24 ">
    {/* logo section */}
    <div className="text-4xl font-bold px-10">
        Soloup
    </div>


    {/* nav link secotion */}
    <div className="flex justify-between px-5 ">

    <nav className='flex px-7 justify-center items-center gap-6'>
      {
        links.map((link,index)=>{
          return<Link href={link.path} key={index} className={`${link.path===pathname && "text-blue-800 border-b-2 border-blue-800"} capitalize font-medium hover: border-blue-700   transition all `}>{link.name}</Link>
        })
      }
    </nav>

  
{/* search section */}
<div className="flex items-center px-6 justify-center">
<input type="text" className="w-28 h-7 outline rounded-sm px-1" />
<FaSearch className="w-7"/>

</div>
{/* button section */}
<div className="h-10 flex justify-center items-center w-36 bg-amber-500">
<Link href={"http://localhost:3001"}>Download App</Link>
</div>
    
</div>
</div>

    )
}

export default SecondNav;