"use client";


import { AuroraText } from '../../../../components/magicui/aurora-text'

import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});



import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

// Image imports
import doctor1 from '../../../../../public/ssltimg/man1.jpg'
import doctor2 from '../../../../../public/ssltimg/man2.jpg'
import doctor3 from '../../../../../public/ssltimg/man3.jpg'


import bannershort1 from '../../../../../public/ssltimg/bannershort1.jpg'
import bannershort2 from '../../../../../public/ssltimg/bannershort2.jpg'
import bannershort3 from '../../../../../public/ssltimg/bannershort3.jpg'
import bannershort4 from '../../../../../public/ssltimg/bannershort4.jpg'



import 'swiper/css/navigation';



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



function Gallary() {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null // prevents SSR crash



    return (
        <div>
            <div className='max-w-[1596px] mx-auto bg-white'>
                <div >

                    <h1 className={`text-8xl font-extrabold uppercase leading-28 text-center px-[15%] pt-16`}>
                        <AuroraText>See Our Event </AuroraText>
                    </h1>
                    <p className={`px-[15%] text-xl font-semibold leading-7 text-center py-10 ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.</p>
                </div>

                {/* grid section  */}


                <div className=' pb-20'>
                    {/* grid 1 */}
                    <div className=' grid grid-cols-3 gap-7'>
                        <div className=' h-96 border-2 rounded-2xl'>
                            <Image src={bannershort1} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' h-96 border-2 rounded-2xl'>
                            <Image src={bannershort2} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' h-96 border-2 rounded-2xl'>
                            <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                       
                    </div>
                    {/* grid 2 */}
                    <div className='grid grid-cols-3 gap-7 h-[600px] mt-6'>
                        <div className='col-span-2 w-full h-[600px]  border-2 rounded-2xl'>
                        <Image src={bannershort1} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' col-span-1 h-[600px] grid grid-rows-2 gap-y-3'>
                            <div className=' h-full border-2 rounded-2xl'>
                            <Image src={bannershort1} className=' h-full w-full rounded-2xl'></Image>
                            </div>
                            <div className=' h-full border-2 rounded-2xl'>
                            <Image src={bannershort1} className=' h-full w-full rounded-2xl'></Image>
                            </div>
                        </div>
                    </div>

                    {/* grid 3 */}

                    <div className=' grid grid-cols-5 h-[500px] gap-7 mt-6' >
                        <div className=' col-span-3 h-[500px] w-full border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' col-span-2  h-[500px] w-full border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>

                    </div>

                    {/* grid 4 */}
                    <div className=' grid grid-cols-3 h-[500px] gap-7 mt-6'>
                        <div className=' h-[500px] border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' h-[500px] border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' h-[500px] border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                    </div>

                    {/* grid 5 */}

                    <div className=' grid grid-cols-5 h-[500px] gap-7 mt-6' >
                        <div className=' col-span-3 h-[500px] w-full border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' col-span-2  h-[500px] w-full border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>

                    </div>

                    {/* grid 6 */}

                    <div className='grid grid-cols-3 h-[600px] gap-7  mt-6'>
                        <div className='col-span-2 w-full h-[600px] border-2 rounded-2xl'>
                        <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                        </div>
                        <div className=' col-span-1 grid grid-rows-2 h-[600px] gap-y-3'>
                            <div className=' h-full border-2 rounded-2xl'>
                            <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                            </div>
                            <div className=' h-full border-2 rounded-2xl'>
                            <Image src={bannershort3} className=' h-full w-full rounded-2xl'></Image>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Gallary