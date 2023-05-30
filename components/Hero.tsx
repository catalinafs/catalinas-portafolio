import React from 'react';
import Image from 'next/image';

const Hero = () => {
    return (
        <div
            className='flex flex-col justify-center items-center gap-8 mt-[100px] mb-[100px] lg:flex-row'
        >
            <div
                className='bg-whiteText w-[310px] h-[310px] flex justify-center items-center 
                rounded-RadiusRounded'
            >
                <Image
                    className='rounded-RadiusRounded'
                    src='/assets/images/catalina-image.jpg'
                    alt='image-portafolio'
                    width={300}
                    height={300}
                />
            </div>

            <div className='text-whiteText max-w-[700px] mx-8'>
                <div className='text-3xl font-bold'>
                    <h2>Hi!</h2>
                    <h2 className='text-3xl font-medium mb-12'>
                        I am a <span className='text-[#27d483]'>Full-Stack</span> Developer
                    </h2>
                    <p className='text-base'>
                        How about you swipe down, so you can know a little bit more about me?
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;
