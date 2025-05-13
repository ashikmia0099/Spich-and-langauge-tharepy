'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { AuroraText } from '../../../../components/magicui/aurora-text'
import { Sirin_Stencil } from 'next/font/google'
import { IoArrowForwardSharp } from 'react-icons/io5'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Marquee } from "../../../../components/magicui/marquee";

import { Montserrat } from 'next/font/google';

import '../localcss/banner1.css'


// Image imports
import bannerimage2 from '../../../../../public/images/bannerimage.webp'
import doctor1 from '../../../../../public/ssltimg/doctor1.jpg'
import doctor2 from '../../../../../public/ssltimg/doctor2.jpg'
import doctor3 from '../../../../../public/ssltimg/doctor3.jpg'
import bannerheaderimg from '../../../../../public/ssltimg/bannerheaderimg.jpg'
import bannerheaderimage2 from '../../../../../public/ssltimg/bannerheaderimage2.jpg'
import WhatDoctorSay from '@/HomePages/WhatDoctorSay/WhatDoctorSay'
import Banner2 from './Banner2'




// ✅ Load the font with explicit weight
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500',], // choose the weights you want
});

function Banner1() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])

  return (
    <div className='max-w-[1536px] mx-auto pt-16'>
      <div className='grid grid-cols-2 h-screen items-center justify-center -mt-20 '>

        {/* Text Section */}
        <div>
          <h1 className={`text-8xl font-extrabold uppercase leading-28 goudy-bookletter-1911-regular`}>
            <span className='text-[#84C2DB]'>Society of Speech &</span> <AuroraText> Language Therapists</AuroraText>
          </h1>
        

          <p className={`text-2xl font-bold mt-10 ${montserrat.className}`}>
            The Society of Speech & Language Therapists (SSLT) is a non-political, voluntary official professional body committed to advancing education, training, and ethical practice in communication, hearing, and swallowing healthcare in Bangladesh. Established in 2017 and recognized by the Bangladesh Government
          </p>
          <button className='btn h-14 px-6 shadow-2xs rounded-full mt-5 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
            Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
          </button>
        </div>

        {/* Banner Image */}
        <div>
          <Image src={bannerheaderimage2} className=' h-full w-full' alt="Banner Image" />
        </div>
      </div>

      {/* Doctors Section */}
      <div className='mt-5'>

      </div>
    </div>
  )
}

export default Banner1
