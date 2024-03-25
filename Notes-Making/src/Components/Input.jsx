import React,{useState} from 'react';
import { motion } from "framer-motion"

function Input(props) {

const [note, setNote] = useState({
desc : "",
})

function handleChange(e){
    const {name, value} = e.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
}

function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);
}

  return (
    <motion.form drag dragConstraints={props.refrence} className=' box-border' onSubmit={submitNote}>
    <div className='flex flex-col items-center mt-[60px] ml-11'>
      <textarea type="text" placeholder='Notes'
        className='overflow-hidden py-4 box-border px-4 flex flex-wrap items-center justify-center border-4 border-zinc-3 mt-5 h-[33vh] w-[25vh] rounded-[40px] bg-zinc-500'
        name='desc'
        value={note.desc}
        onChange={handleChange}
      />
      <button className='bg-black rounded-full px-4 py-2 text-white mt-2 w-[60%]'
      >Add</button>
    </div>
  </motion.form>
  )
}

export default Input