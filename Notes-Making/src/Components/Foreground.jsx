import React from 'react'
import Cards from './Cards'

function Foreground() {
  return (
    <div className='z-[3] w-full h-screen fixed top-0 left-0'>
    <Cards />
    </div>
  )
}

export default Foreground