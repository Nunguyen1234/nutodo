import React from 'react'

type Props = {
    heading:string;
}
const SectionHeading = ({heading}:Props) => {
  return <div className='w-[80%] mx-auto'>
    <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
    <p className='mt-2 text-gray-700 sm:text-base text-sm font-medium'>Product traceability is the process of identifying and monitoring the origin, production and distribution process of the product to ensure quality, safety and transparency for consumers.</p>
  </div>
}

export default SectionHeading
