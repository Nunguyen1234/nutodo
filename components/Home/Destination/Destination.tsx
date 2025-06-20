import React from 'react'
import SectionHeading from '../../Helper/SectionHeading';
import DestinationSlider from './DestinationSlider';

const Destination = () => {
  return <div className='pt-20 bp-20 bg-gray-100'>
    {/* Section Heading */}
    <SectionHeading heading='Discover the Prussian agricultural products' />
    {/* Section Content */}
    <div className='mt-14 w-[80%] mx-auto'>
      {/* Slider */}
      <DestinationSlider />
    </div>
  </div>
};  

export default Destination
