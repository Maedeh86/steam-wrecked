import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type HeaderIconTypes = {
  linkClass?: string;
  imgClass?: string;
}

const HeaderIcon = ({linkClass, imgClass}:HeaderIconTypes) => {
  return (
    <Link href="/" className={`${linkClass}`}>
     
       <Image
  src="/images/logo/SteamWrecked_LOGO.png"
  alt="Steam Wrecked Logo"
  width={0}
  height={0}
  sizes='100vw'
  className={`${imgClass}`}
  data-testid="header-logo"
/>

   
    </Link>
  );
};

export default HeaderIcon;