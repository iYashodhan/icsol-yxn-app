import React from 'react';
import Image from 'next/Image';

function Blog({image, description}) {
  return <div className="min-w-min m-2 overscroll ">
      <Image src={image} alt="person" height={350} width={350}/>
      <p className="text-md text-black">{description}</p>
  </div>;
}

export default Blog;
