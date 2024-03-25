import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";



function Cards() {
    return (
        <div className='relative overflow-hidden w-[25vh] h-[33vh] bg-black rounded-3xl text-white py-10 px-8'>
            <FaRegFileAlt />
            <p className='text-xs leading-tight mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <div className='footer absolute w-full bottom-0 left-0'>
                <div className='flex items-center justify-between py-3 px-8 mb-3'>
                    <div>0.4mb</div>
                    <LuDownload />
                </div>
                <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                <h3 className='text-xs'>
                    Download Now
                </h3>
                </div>
            </div>
        </div>
    )
}

export default Cards