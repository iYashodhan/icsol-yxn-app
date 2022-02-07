import React from 'react';
import Image from 'next/image';

function Blog({image, description}) {
  return <div className="min-w-max max-w-min overscroll-x-auto">
      <Image src={image} alt="person" height={350} width={350}/>
      <p className="text-md text-black">{description}</p>
  </div>;
}

export default Blog;
