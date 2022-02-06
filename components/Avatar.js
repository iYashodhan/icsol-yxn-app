import React from "react";
import Image from "next/image";

function Avatar({ person, position }) {
  return (
    <div className="flex flex-col items-center justify-center my-4">
      <div className="rounded-full overflow-hidden">
        <Image src={person} alt="person" height={150} width={150} />
      </div>
      <p className="text-md text-center mt-2">{position}</p>
    </div>
  );
}

export default Avatar;
