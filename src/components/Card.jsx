import React from 'react'

const Card = (props) => {
  return (
    <div>
         <a href={props.elem.url}>
                      <div className='bg-gray-600 rounded-2xl flex flex-col justify-center items-center overflow-hidden'>
        <div className='h-70 w-67 bg-white'>
          <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
       </div>
       <h1 className='font-extrabold text-2xl'>{props.elem.author}</h1>
       </div>
       </a>


 
    </div>
  )
}

export default Card
