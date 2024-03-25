import React from 'react'
import Cards from './Cards'



function Foreground() {


const data = 
[
{
  desc: "This is a Fake Data",
  
},
{
  desc: "This is a Fake Data2",
  
},
{
  desc: "This is a Fake Data3",
  
},
];
  return (
    <div className='z-[3] w-full h-screen fixed top-0 left-0'>
    {data.map((t,i)=>(
      <Cards data={t}/>
    ))}
    
    </div>
  )
}

export default Foreground