import React from 'react';
import { projectsData } from '@/pages/api/projectsData';
import { useOrder } from '@/hooks/useOrder/index.js';
import Image from 'next/image';

const Projects = () => {
    const data = projectsData.data;

    let arr = useOrder(data);

    let arreglo = arr.slice(0, 6);

    return (
        <div
            className='text-whiteText w-full flex flex-col items-center mb-14 bg-[#2e2e2e] py-[30px] 
            box-content pb-[65px]'
        >
            <h2 className='text-3xl font-medium mb-12'>
                My <span className='text-[#27d483]'>Projects</span>
            </h2>

            <div className='flex flex-wrap gap-10 mx-20 justify-center'>
                {arreglo.map((item: {
                    id: number;
                    title: string;
                    year: number;
                    image: string;
                    technologies: any;
                    description: string;
                    link_repository: string;
                    link: string;
                }) => {

                    const { id, title, year, image, technologies, description, link_repository, link } = item;

                    return (
                        <div
                            key={id}
                            className='bg-[#252525] text-[#fff] flex flex-col
                            items-center justify-between gap-3 w-[300px] rounded-[15px] p-[15px]'
                        >
                            <div className='flex justify-between items-center w-full'>
                                <a href={link} target='__blank' className=''>
                                    <h2 className='font-bold text-xl'>{title}</h2>
                                </a>
                                <h3 className='text-[#8f9296]'>{year}</h3>
                            </div>
                            <Image src={image} alt='image' width={200} height={130} className='' />
                            <p className='break-words w-[250px]'>{description}</p>
                            <div className='w-full flex items-center justify-end gap-3'>
                                <a
                                    href={link_repository}
                                    target='__blank'
                                    className='underline hover:no-underline font-bold'
                                >Github</a>
                                <a
                                    href={link}
                                    target='__blank'
                                    className='underline hover:no-underline font-bold'
                                >View Live</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Projects;
