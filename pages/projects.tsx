import GitHub from '@/public/assets/icons/GitHub';
import Linkedin_Logo from '@/public/assets/icons/Linkedin_Logo';
import React from 'react';

const Proyects = () => {
    return (
        <div className='bg-red text-whiteText w-full flex flex-col items-center gap-4 mb-14 py-[30px]
        box-content pb-[65px]' >
            <h2 className='text-4xl font-medium mb-8 text-[#27d483]'>Proyects</h2>

            <div className='flex items-center gap-16'>
                <div className='flex items-center gap-10'>
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
            </div>
        </div>
    );
}

export default Proyects;