'use client'

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

function Banner2() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    if (!isClient) return null // prevents SSR crash

    return (
        <div className='mx-auto pt-10'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                loop={true}
                freeMode={true}
                speed={6000}
                autoplay={{
                    delay: 0,

                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                style={{
                    transitionTimingFunction: 'linear'
                }}
            >


                <SwiperSlide >

                    <div className='flex items-center pt-20'>
                        <Image src={doctor1} alt="doctor1" className='h-[600px] w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide  >

                    <div className='grid grid-flow-col grid-rows-2 gap-4 h-[750px]'>
                        <div>
                            <Image src={bannershort1} alt="doctor2a" className='h-full w-full rounded-2xl' />
                        </div>
                        <div>
                            <Image src={bannershort2} alt="doctor2b" className='h-full w-full rounded-2xl' />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='flex items-center pt-20'>
                        <Image src={doctor2} alt="doctor1" className='h-[600px] w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide  >

                    <div className='grid grid-flow-col grid-rows-2 gap-4 h-[750px]'>
                        <div>
                            <Image src={bannershort3} alt="doctor2a" className='h-full w-full rounded-2xl' />
                        </div>
                        <div>
                            <Image src={bannershort4} alt="doctor2b" className='h-full w-full rounded-2xl' />
                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide >

                    <div className='flex items-center pt-20'>
                        <Image src={doctor3} alt="doctor1" className='h-[600px] w-full rounded-2xl' />
                    </div>

                </SwiperSlide>
                <SwiperSlide  >

                    <div className='grid grid-flow-col grid-rows-2 gap-4 h-[750px]'>
                        <div>
                            <Image src={bannershort1} alt="doctor2a" className='h-full w-full rounded-2xl' />
                        </div>
                        <div>
                            <Image src={bannershort4} alt="doctor2b" className='h-full w-full rounded-2xl' />
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    )
}

export default Banner2
