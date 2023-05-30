import React from 'react';
import GitHub from '@/public/assets/icons/GitHub.js';
import Image from 'next/image';
import Link from 'next/link';
import Linkedin_Logo from '@/public/assets/icons/Linkedin_Logo.js';


const NavBar = () => {
    return (
        <nav className='min-h-[65px] w-full bg-gray-700 flex items-center justify-around pr-[10px] mb-[50px]'>
            <Link href='/'>
                <Image src='/assets/images/Logo-Name.svg' alt='Logo_Name' width={150} height={63} />
            </Link>

            <div className='flex items-center gap-6 font-semibold' >
                <Link
                    href='/'
                >
                    <h3
                        className='text-[#17f18c] inline-block relative after:underline after:content-[" "]
                        after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 
                        after:bg-[#17f18c] after:scale-x-0 after:origin-bottom-right 
                        after:transition-transform after:duration-[0.6s] after:easi-in-out 
                        hover:after:scale-x-100 hover:after:origin-bottom-left'
                    >
                        Home
                    </h3>
                </Link>
                <Link
                    href='/projects'

                >
                    <h3
                        className='text-whiteText inline-block relative after:underline after:content-[" "] 
                        after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 
                      after:bg-[#17f18c] after:scale-x-0 after:origin-bottom-right after:transition-transform 
                        after:duration-[0.6s] after:easi-in-out hover:after:scale-x-100 
                        hover:after:origin-bottom-left'
                    >Proyects</h3>
                </Link>
                <Link
                    href='/about_me'
                >
                    <h3
                        className='text-whiteText inline-block relative after:underline after:content-[" "] 
                        after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 
                      after:bg-[#17f18c] after:scale-x-0 after:origin-bottom-right after:transition-transform 
                        after:duration-[0.6s] after:easi-in-out hover:after:scale-x-100 
                        hover:after:origin-bottom-left'
                    >About Me</h3>
                </Link>
                <Link
                    href='#Footer'
                >
                    <h3
                        className='text-whiteText inline-block relative after:underline after:content-[" "] 
                        after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 
                      after:bg-[#17f18c] after:scale-x-0 after:origin-bottom-right after:transition-transform 
                        after:duration-[0.6s] after:easi-in-out hover:after:scale-x-100 
                        hover:after:origin-bottom-left scroll-smooth'
                    >Contact Me</h3>
                </Link>
            </div>

            <div className='flex items-center gap-3'>
                <a
                    href='https://github.com/catalinafs'
                    target='_blank'
                    className='rounded'
                >
                    <GitHub className='fill-[#EFEFEF] hover:fill-[#a7a7a7]' width={28} height={28} />
                </a>
                <a
                    href='https://www.linkedin.com/in/catalina-forero-suarez-83a0b61b5'
                >
                    <Linkedin_Logo
                        className='fill-[#EFEFEF] hover:fill-[#a7a7a7]'
                        width={27}
                        height={27}
                    />
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
