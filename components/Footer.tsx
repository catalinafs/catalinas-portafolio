import React from 'react';

const Footer = () => {
    return (
        <footer
            className='min-h-[65px] w-full bg-gray-600 relative bottom-0 left-0'
        >
            <div className=' flex justify-center items-center py-[30px] gap-9' >
                <div>
                    <h2 className='text-whiteText' >Social Medias</h2>
                    <ul className='text-gray-300'>
                        <li>instagram</li>
                        <li>linkedin</li>
                        <li>github</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-whiteText' >Contact Me</h2>
                    <ul className='text-gray-300'>
                        <li>catalinaforerosuarez@gmail.com</li>
                        <li>Linkedin</li>
                    </ul>
                </div>
            </div>
            <div >All right reserved</div>
        </footer>
    );
}

export default Footer;