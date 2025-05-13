'use client';

import React from 'react'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { BackgroundBeams } from "../../../../components/ui/background-beams";
import { BackgroundBeamsWithCollision } from "../../../../components/ui/background-beams-with-collision";
import { CardSpotlight } from "../../../../components/ui/card-spotlight";


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

import vision1 from '../../../../../public/ssltimg/vision1.jpg'
import vision2 from '../../../../../public/ssltimg/vision2.jpg'
import vision3 from '../../../../../public/ssltimg/vision3.jpg'
import vision4 from '../../../../../public/ssltimg/vision4.jpg'
import vision5 from '../../../../../public/ssltimg/vision5.jpg'

import { IoArrowForwardSharp } from 'react-icons/io5';
import { FaBookMedical, FaHandHoldingMedical, FaSnowboarding } from 'react-icons/fa';
import { FaHouseMedicalCircleCheck, FaUserDoctor } from "react-icons/fa6";
import { GiMedicines, GiPlagueDoctorProfile } from 'react-icons/gi';
import { RiMedicineBottleFill } from 'react-icons/ri';



import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['500',], // choose the weights you want
});




function Vission() {
    return (
        <div className='bg-gradient-to-b from-[#000000]  to-[#000000] relative z-0'>

            <div>
                <div className='  pt-32'>

                    {/* pagination section */}
                    <div className=''>
                        <h1 className={`text-9xl font-extrabold uppercase leading-16 text-center `}>
                            <AuroraText>Our Vission</AuroraText>
                        </h1>
                        <p className={`text-2xl font-semibold text-white text-center px-[20%] py-10 pt-20 ${montserrat.className}`}>

                            One Kajabi product works great. Two or more? That's when the magic happens.
                            Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                        </p>
                        <div className=" mt-10 pb-20 ml-60 ">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',

                                }}
                                slidesPerView={4}          // Show center + half on each side
                                // Center active slide
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
                                    <Image src={vision1} alt="Slide 1" className="h-[650px] w-full rounded-xl object-cover" />
                                </SwiperSlide>

                                <SwiperSlide className='bg-gradient-to-r from-[#8f8ee9] to-[#84dbcd] rounded-2xl '>
                                    <Image src={vision2} alt="Slide 2" className="h-[650px] w-full rounded-xl object-cover" />
                                </SwiperSlide>

                                <SwiperSlide className='bg-gradient-to-r from-[#3e3d9e] to-[#9784db] rounded-2xl '>
                                    <Image src={vision3} alt="Slide 3" className="h-[650px] w-full rounded-xl object-cover" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-gradient-to-r from-[#abe98e] to-[#880bdb] rounded-2xl '>
                                    <Image src={vision4} alt="Slide 3" className="h-[650px] w-full rounded-xl object-cover" />
                                </SwiperSlide>
                                <SwiperSlide className='bg-gradient-to-r from-[#8f8ee9] to-[#84dbcd] rounded-2xl '>
                                    <Image src={vision5} alt="Slide 2" className="h-[650px] w-full rounded-xl object-cover" />
                                </SwiperSlide>



                            </Swiper>
                        </div>


                    </div>

                    {/* grid seciton */}

                </div>

                {/* grid secion 1 */}
                <div className='max-w-[1536px] mx-auto pb-32'>
                    <div className=' grid grid-cols-2 justify-between py-20 gap-32'>
                        {/* hadding text */}
                        <div className=' mb-10'>
                            <h1 className={`text-9xl font-extrabold uppercase leading-28 text-center `}>
                                <AuroraText> <div className=' text-left'> <AuroraText>  Our Gols </AuroraText></div> <span className=' text-center'>And</span> <span>objectives</span></AuroraText>
                            </h1>
                        </div>
                        <div className=' flex items-center justify-end pl-40'>
                            <div className=' items-end right-1'>
                                <p className={`text-2xl font-semibold text-white text-left ${montserrat.className}`}>

                                    One Kajabi product works great. Two or more? That's when the magic happens.
                                    Creators who blend our tools don't just expand their offerings—they amplify their results. See for yourself how the right mix could transform your vision into reality.
                                </p>
                                <button className='btn h-14 px-6 shadow-2xs rounded-full mt-10  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                    Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-4 gap-x-10 gap-y-10'>
                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaBookMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaHandHoldingMedical />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaUserDoctor />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <GiPlagueDoctorProfile />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <GiMedicines />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <RiMedicineBottleFill />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaSnowboarding />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>

                        <CardSpotlight className="h-96 w-full shadow-lg shadow-[#84C2DB]">
                            <p className="text-5xl font-bold relative z-20 mt-2 text-[#84C2DB]">
                                <FaHouseMedicalCircleCheck />
                            </p>
                            <div className="text-neutral-200 mt-4 relative z-20 text-2xl font-semibold">
                                Follow these steps to your account:

                            </div>
                            <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                                Ensuring your account is properly secured helps protect your personal
                                information and dataEnsuring your account is properly secured helps protect your personal
                                information and data is properly secured helps protect your personal
                                information and data.
                            </p>
                        </CardSpotlight>




                    </div>
                </div>
            </div>


        </div>
    )
}

export default Vission