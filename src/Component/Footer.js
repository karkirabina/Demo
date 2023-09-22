import React from 'react';




const Footer = () => {
  return (
    <div className='bg-[#333] text-[#fff] text-center p-[20px]'>
      <p>&copy; {new Date().getFullYear()} My Website</p>
    </div>
  );
};

export default Footer;
