import React, { useRef, useState } from 'react'
import Cards from './Cards'
import Input from './Input';


function Foreground() {
  const ref = useRef(null);

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div ref={ref} className='z-[3] w-full h-screen fixed top-0 left-0 flex flex-wrap gap-10'>
      <Input
        onAdd={addNote} 
        refrence={ref}
        />
      {notes.map((noteItem, index) => {
        return (
          <Cards
            key={index}
            id={index}
            desc={noteItem.desc}
            onDelete={deleteNote}
            refrence={ref}
          />
        )
      })}
    </div>
  )
}

export default Foreground