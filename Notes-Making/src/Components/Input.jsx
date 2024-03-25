import React,{useState} from 'react'

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
    <form>
    <div>
      <input type="text" placeholder='add items to list'
        className='border-4 border-zinc-3 mt-5'
        name='desc'
        value={note.desc}
        onChange={handleChange}
      />
      <button className='bg-green-500 rounded-3xl px-4 py-2'
      onClick={submitNote}
      >Add</button>
    </div>
  </form>
  )
}

export default Input