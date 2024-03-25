import React, { useState } from 'react'
import Cards from './Cards'
import Input from './Input';


function Foreground() {

  const [notes, setNotes] = useState([])

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className='z-[3] w-full h-screen fixed top-0 left-0 flex flex-wrap gap-10'>
      <Input
        onAdd={addNote}
      />
      {notes.map((noteItem) => {
        return (
          <Cards
            desc={noteItem.desc} />
        )
      })}
    </div>
  )
}

export default Foreground