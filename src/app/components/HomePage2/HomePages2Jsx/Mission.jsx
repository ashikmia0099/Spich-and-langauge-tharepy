'use client';

import React from 'react'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { BackgroundBeams } from "../../../../components/ui/background-beams";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';


import swiper1 from '../../../../../public/ssltimg/swiper1.webp'
import swiper2 from '../../../../../public/ssltimg/swiper2.webp'
import swiper3 from '../../../../../public/ssltimg/swiper3.webp'
import confacanceimage from '../../../../../public/ssltimg/confacanceimage.jpg'
import sec4cartoonimg from '../../../../../public/ssltimg/sec4cartoonimg.jpg'
import doctorpationt1 from '../../../../../public/ssltimg/doctorpationt1.jpg'

import banner1 from '../../../../../public/ssltimg/banner1.jpg'
import banner2 from '../../../../../public/ssltimg/banner2.jpg'
import banner3 from '../../../../../public/ssltimg/banner3.jpg'
import banner4 from '../../../../../public/ssltimg/banner4.jpg'
import sec4imag3 from '../../../../../public/ssltimg/sec4imag3.jpg'
import { IoArrowForwardSharp } from 'react-icons/io5';


import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});


function Mission() {
    return (
        // <div className='bg-gradient-to-b from-[#282525]  to-[#282525] pb-20'>
        <div className='bg-white'>
            <div className=' bg-gradient-to-b from-[#282525]  to-[#282525] mt-32'>

                {/* pagination section */}
                <div className=''>
                    <h1 className={`text-9xl font-extrabold uppercase leading-16 text-center pt-20 `}>
                        <AuroraText>Our Mission</AuroraText>
                    </h1>
                    <p className={`text-xl font-semibold text-white text-center px-[25%] py-10 ${montserrat.className}`}>

                        One Kajabi product works great. Two or more? That's when the magic happens.
                        Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                    </p>
                    <div className=" mt-10 pb-20  mx-auto">
                        <Swiper
                            style={{
                                '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',

                            }}
                            slidesPerView={1.8}          // Show center + half on each side
                            centeredSlides={true}        // Center active slide
                            spaceBetween={20}            // Space between slides
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            pagination={{
                                clickable: true,

                            }}

                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide className=' rounded-2xl  bg-gradient-to-r from-[#8f8ee9] to-[#84C2DB] '>
                                <Image src={banner1} alt="Slide 1" className="h-[650px] w-full rounded-xl " />
                            </SwiperSlide>

                            <SwiperSlide className='bg-gradient-to-r from-[#8f8ee9] to-[#84dbcd] rounded-2xl '>
                                <Image src={banner2} alt="Slide 2" className="h-[650px] w-full rounded-xl " />
                            </SwiperSlide>

                            <SwiperSlide className='bg-gradient-to-r from-[#3e3d9e] to-[#9784db] rounded-2xl '>
                                <Image src={banner3} alt="Slide 3" className="h-[650px] w-full rounded-xl " />
                            </SwiperSlide>
                            <SwiperSlide className='bg-gradient-to-r from-[#abe98e] to-[#880bdb] rounded-2xl '>
                                <Image src={banner4} alt="Slide 3" className="h-[650px] w-full rounded-xl " />
                            </SwiperSlide>

                        </Swiper>
                    </div>


                </div>

                {/* grid seciton */}

            </div>

            <div className='relative '>
                {/* grid secion 1 */}
                <div className=' pt-24 max-w-[1536px] mx-auto px-5 '>
                    <div className=' grid grid-cols-2 gap-32'>
                        {/* text part */}

                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className={`text-6xl font-bold uppercase leading-16 text-left pt-20 pr-[15%] text-black`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={`text-2xl font-bold text-left py-10 pr-[15%] text-black ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </div>
                        </div>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-10 shadow-2xl shadow-[#84C2DB]'>
                            
                            <Image src={sec4cartoonimg} alt="Slide 1" className="h-full w-full rounded-2xl object-cover" />
                        </div>
                    </div>
                </div>

                {/* grid secion 2 */}
                <div className=' pt-24 max-w-[1536px] mx-auto px-5 '>
                    <div className=' grid grid-cols-2 gap-32'>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-xl p-10 shadow-2xl shadow-[#84C2DB]'>
                            <Image src={doctorpationt1} alt="Slide 1" className="h-full w-full rounded-2xl object-cover" />
                        </div>
                        {/* text part */}

                        <div className='flex items-center justify-center pl-28'>
                            <div >
                                <h1 className={`text-6xl font-bold uppercase leading-16 text-left   text-black`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={` text-2xl font-semibold text-black text-left py-10  ${montserrat.className}`}>
                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* grid secion 3 */}
                <div className=' pt-24 max-w-[1536px] mx-auto px-5 pb-20'>
                    <div className=' grid grid-cols-2 '>
                        {/* text part */}

                        <div className='flex items-center justify-center'>
                            <div >
                                <h1 className={`text-6xl font-bold uppercase leading-16 text-left pt-20 pr-[15%] text-black`}>
                                    One Kajabi product works great. Two or more
                                </h1>
                                <p className={` text-2xl font-semibold text-black text-left py-10  ${montserrat.className}`}>
                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <button className='btn h-14 px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </div>
                        </div>

                        {/* image part */}
                        <div className=' bg-[#84c2dbb7] rounded-2xl p-10 shadow-xl shadow-[#84C2DB]'>
                            <Image src={sec4imag3} alt="Slide 1" className="h-full w-full rounded-2xl object-cover" />
                        </div>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </div>
    )
}

export default Mission