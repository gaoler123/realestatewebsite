import React from 'react'
// import Search from './Search'

const Heading = (props) => {
  return (
    <div className='flex flex-row sm: flex-col'>
        <div className='w-full'>
          <h1 className='font-montserrat font-bold px-16 py-10 text-3xl font-bold md:text-left sm:px-5 sm:pt-24'>
            {props.title}
          </h1>
        </div>
      </div>
  )
}

export default Heading