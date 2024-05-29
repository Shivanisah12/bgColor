import React, { useState } from 'react'

const App = () => {
  const[color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full '>
           <button
           onClick={() => setColor("red")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "red"}}
           >Red</button>
            <button
             onClick={() => setColor("yellow")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "yellow"}}
           >yellow</button>
            <button
             onClick={() => setColor("green")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "green"}}
           >green</button>
            <button
             onClick={() => setColor("blue")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "blue"}}
           >blue</button>
            <button
             onClick={() => setColor("pink")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "pink"}}
           >pink</button>
           <button
            onClick={() => setColor("orange")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "orange"}}
           >orange</button>
            <button
             onClick={() => setColor("black")}
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "black"}}
           >black</button>
            <button
           className='outline-none px-4 py1 rounded-full text-white shadow-sm'
           style={{background: "purple"}}
           >purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
