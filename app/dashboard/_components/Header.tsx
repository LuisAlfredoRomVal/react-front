import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-screen h-[10vh] bg-orange-200 flex flex-row items-center px-10">
      <Image alt="OxxoLogo" src="/Oxxo_Logo.png" width={100} height={100} draggable={false}/>
    </div>
  );
};

export default Header;
