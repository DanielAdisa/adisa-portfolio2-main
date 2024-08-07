import Link from "next/link"
import "../styles/globals.css";

import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid"

function StudioNavbar(props: any) {
  return (
    <div>
        <div className=" flex justify-between items-center p-5">
            
            <Link href={'/'} className="text-[#25D366] flex items-center">
            <ArrowUturnLeftIcon className="h-5 w-6 text-[#25D366] mr-2"/>
                Back to Porfolio
            </Link>
        </div>
        <hr className="border-[#25D366]"/>
        <>{props.renderDefault(props)}</>

    </div>
  )
}
export default StudioNavbar