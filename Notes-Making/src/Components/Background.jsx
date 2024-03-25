import React from 'react'

function Background() {
    return (
        <>
            <div className=' relative w-full h-screen bg-zinc-800 z-[2]'>
            <div 
            className='absolute top-2 left-1/2 -translate-x-[50%] text-xl flex justify-center py-10 text-zinc-900'>
                Documents
            </div>
                <div 
                className=' text-zinc-700 text-[30vh] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                Docs.
                </div>
            </div>
        </>
    )
}

export default Background