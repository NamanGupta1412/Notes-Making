import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { motion } from "framer-motion"



function Cards(props) {
    
    function handleClick() {
        props.onDelete(props.id);
      }

    return (
        <motion.div drag dragConstraints={props.refrence} className='mt-[80px] ml-11 relative overflow-hidden w-[25vh] h-[33vh] bg-black rounded-3xl text-white py-10 px-6'>
            <FaRegFileAlt />
            <textarea className='text-xs leading-tight mt-5 bg-transparent border-none focus-visible:border-red-500 h-[70%]'>
                {props.desc}
            </textarea>
            <div className='footer absolute w-full bottom-0 left-0'>
                <div className='tag w-full py-4 bg-green-600 flex items-center justify-center'>
                    <h3 className='text-xs w-full'>
                    <button onClick={handleClick} className='w-full'>DELETE</button>
                    </h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Cards