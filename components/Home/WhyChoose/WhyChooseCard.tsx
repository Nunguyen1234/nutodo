import React from "react";
import Image from 'next/image'

type WhyChooseCardProps = {
  image: string;
  title: string;
};

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image src={image} alt={title} width={80} height={80} className="mb-4" />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default WhyChooseCard;

