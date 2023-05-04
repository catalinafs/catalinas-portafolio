import GitHub from '@/public/assets/icons/GitHub';
import React from 'react';

const Footer = () => {
    return (
        //footer-distributer
        <footer
            className='static bottom-0 bg-[#2d2a30] box-border w-full
            font-sans px-[50px] pt-[50px] pb-[60px] mt-[80px] align-top'
        >
            <div className='grid grid-cols-2 justify-center items-center font-bold text-[16px]'>

                {/* footer-left */}
                <div className='flex justify-center items-center flex-col'>

                    <h3 className='text-whiteText m-0'>Catalina<span className='text-redNormal'>Developer</span></h3>

                    {/* footer-links */}
                    <p className='text-whiteText mt-[20px] mx-0 mb-[12px]'>
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Home</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >About</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Contact</a>{' '}
                        |{' '}
                        <a
                            href='#'
                            className='inline-block leading-[1.8] no-underline text-inherit'
                        >Blog</a>{' '}
                        |
                    </p>
                </div>

                {/* footer-center */}
                <div className='flex flex-col my-[30px] gap-2 justify-center items-center'>
                    <div className='flex items-center gap-1' >
                        <GitHub className='hover:fill-[#ffffff]' width={30} height={30} />
                        <p className='inline-block text-whiteText align-middle m-0'>
                            <span className='block font-normal text-[14px] leading-[2px]'>Github</span></p>
                    </div>
                    <div className='flex items-center gap-1' >
                        <GitHub className='hover:fill-[#ffffff]' width={30} height={30} />
                        <p className='inline-block text-whiteText align-middle m-0'>+57 316 8603691</p>
                    </div>
                    <div className='flex items-center gap-1' >
                        <GitHub className='hover:fill-[#ffffff]' width={30} height={30} />
                        <p className='inline-block text-whiteText align-middle m-0'>
                            <a href='#gmail' className='text-redNormal'>catalinaforerosuarez@gmail.com</a></p>
                    </div>
                </div>
            </div>
            {/* footer-company-name */}
            <div className='flex justify-center items-center'>
                <p className='text-[#8f9296] text-[14px] font-normal m-0'>All rights reserved @ 2023 <strong>Catalina<span className='text-[#b43430]'>Developer</span></strong> </p>
            </div>
        </footer>
    );
}

export default Footer;