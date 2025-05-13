import React from 'react'

import ssllogo from '../../public/images/ssltLogo.jpg'
import Image from 'next/image'
import { FaArrowRight, FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6'

function Footer() {
    return (
        <div className='bg-gradient-to-b from-[#000000] to-[#000000] relative z-0'>
            <div className='py-10 max-w-[1536px] mx-auto'>
                {/* Section 1 */}
                <div className='grid grid-cols-9 gap-20'>
                    {/* Left */}
                    <div className='col-span-3 pt-10'>
                        <div className='flex items-center justify-center p-10'>
                            <Image src={ssllogo} alt="SSL Logo" className='h-full w-full' />
                        </div>
                    </div>
                    {/* Right */}
                    <div className='col-span-6 pt-10 flex items-center justify-center'>
                        <div>
                            <h1 className='text-6xl text-[#84C2DB] font-bold uppercase leading-16'>
                                Join Our Worldclass Community
                            </h1>
                            <button className='btn text-2xl mt-5 rounded-full border-none bg-[#84C2DB] text-black'>
                                Get Membership <FaArrowRight />
                            </button>
                            <p className='text-xl font-bold text-white mt-3'>
                                By proceeding you agree to our Platform Terms & Privacy Notice.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Section 2 */}
                <div className='grid grid-cols-9 gap-20 pt-10'>
                    {/* Left */}
                    <div className='col-span-3 flex gap-3 items-center justify-center'>
                        <FaFacebook className='text-3xl text-white' />
                        <FaXTwitter className='text-3xl text-white' />
                        <FaInstagram className='text-3xl text-white' />
                        <FaYoutube className='text-3xl text-white' />
                    </div>

                    {/* Right */}
                    <div className='col-span-6'>
                        <div className='grid grid-cols-2'>
                            {/* Features */}
                            <div>
                                <h1 className='text-3xl font-bold text-white pb-3'>Features</h1>
                                <ul className='pl-2 space-y-1.5'>
                                    {['Resources', 'News and Update', 'Practices Area', 'Membership', 'About Us', 'Contact'].map((item, idx) => (
                                        <li key={idx} className='text-xl font-medium text-[#585757]'>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h1 className='text-3xl font-bold text-white pb-3'>Contact Us</h1>
                                <ul className='pl-2 space-y-1.5'>
                                    <li className='text-xl font-medium text-white flex items-center gap-3'>
                                        <FaWhatsapp /> +8801641564651
                                    </li>
                                    <li className='text-xl font-medium text-white flex items-center gap-3'>
                                        <FaLocationDot /> 1210, Mirpur, Dhanmondi, Dhaka
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer