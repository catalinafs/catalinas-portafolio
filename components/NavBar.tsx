import Image from 'next/image';
import React from 'react';
import GitHub from '@/public/assets/icons/GitHub.js'
import Linkedin from '@/public/assets/icons/Linkedin.js'
import Linkedin_Logo from '@/public/assets/icons/Linkedin_Logo.js'
import Link from 'next/link';

//#1c1c1c
//#121212
//#2E2E2E
//#B22D33
//#dd403a

//#F2F2F2
//#121212
//#E5383B
//#ee042c
//#00104f
//#ffffff
//#222222

const NavBar = () => {
    // const name = '<Catalina';
    // const lastName = 'Forero/>';

    return (
        <div className='min-h-[65px] w-full bg-gray-600 flex items-center justify-around'>
            <div className=''>
                {/* <div className='font-bold text-l'> */}
                {/* <h2 className='text-[#3d9ba5fa] '>{name}</h2>
                    <h2 className='text-[#3d9ba5fa] pl-[35px]'>{lastName}</h2> */}
                <Image src='/assets/images/Name_Logo.svg' alt='Logo_Name' width={150} height={63} />
            </div>

            <div className='flex items-center gap-6 font-semibold' >
                <Link
                    href='/'
                // className='text-redNormal inline-block relative after:underline after:content-[" "] 
                // after:absolute after:w-full after:h-1 after:bottom-0 after:left-0 after:bg-redTOMMY
                // after:scale-x-0 after:origin-bottom-right after:transition-transform-[6s_ease-out]
                // hover:after:scale-x-100 hover:after:origin-bottom-left' 
                >
                    {/* className='text-[#d45e5a] hover:text-redTOMMY' > */}
                    <h3 className='text-redNormal inline-block relative after:underline after:content-[" "] 
                    after:absolute after:w-full after:h-[3px] after:bottom-0 after:left-0 after:bg-redNormal
                    after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                    after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left' >Home</h3>
                </Link>
                <Link
                    href='/proyects'
                    className='text-whiteText inline-block relative after:underline after:content-[" "] 
                    after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 after:bg-whiteText
                    after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                    after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left'
                >
                    <h3>Proyects</h3>
                </Link>
                <Link
                    href='#About_Me'
                    className='text-whiteText inline-block relative after:underline after:content-[" "] 
                    after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 after:bg-whiteText
                    after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                    after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left'
                >
                    <h3>About Me</h3>
                </Link>
                <Link
                    href='/proyects.tsx'
                    className='text-whiteText inline-block relative after:underline after:content-[" "] 
                    after:absolute after:w-full after:h-[2.5px] after:bottom-0 after:left-0 after:bg-whiteText
                    after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-[0.6s]
                    after:easi-in-out hover:after:scale-x-100 hover:after:origin-bottom-left'
                >
                    <h3>Contact Me</h3>
                </Link>
            </div>
            <div className='flex items-center gap-16'>

                <div className='flex items-center gap-2'>
                    <a
                        href='https://github.com/catalinafs'
                        target='_blank'
                    >
                        {/* <Image
                        src='./assets/icons/GitHub_Logo.svg' 
                        alt='githubs_logo' width={35} height={35} color='#454545' /> */}
                        <GitHub className='hover:fill-[#ffffff]' />
                    </a>
                    <a
                        href='#'
                        // className='flex items-center justify-center rounded-[8px] hover:bg-blueTOMMY'
                    >
                        {/* <Image
                            src='./assets/icons/Linkedin-Logo.svg'
                            alt='linkedins_logo'
                            width={35}
                            height={35}
                        /> */}
                        {/* <Linkedin className='hover:fill-[#5C5C5C]' /> */}
                        <Linkedin_Logo />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
