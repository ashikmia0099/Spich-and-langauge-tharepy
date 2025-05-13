"use client";


import Image from 'next/image';
import { AuroraText } from '../../../../components/magicui/aurora-text'



import image1 from '../../../../../public/ssltimg/doctor1.jpg'

import { Montserrat } from 'next/font/google';
import { IoArrowForwardSharp } from 'react-icons/io5';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function News() {




    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div className=' border-b-2'>

                <h1 className={`text-8xl font-extrabold uppercase leading-28 text-center px-[20%] pt-16`}>
                    <AuroraText>Our All Update & Latest news</AuroraText>
                </h1>
                <p className={`px-[15%] text-2xl font-semibold leading-9 text-center py-10 ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.</p>
            </div>

            {/* card section  */}


            <div className=' pb-10 px-[10%] pt-12' >
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>
                <div className=' py-3'>
                    <div className=' px-6 py-6 hover:bg-[#a2bfca] rounded-xl flex items-center justify-between '>
                        <div className=' flex items-center  gap-5'>
                            <Image src={image1} className=' h-20 w-20 rounded-xl'></Image>
                            <div>
                                <h3 className={` text-xl font-[500]  ${montserrat.className}`}> Lorem ipsum dolor sit amet consectetur adipisicing</h3>

                                <h5 className={` text-sm font-[300] uppercase pt-3  ${montserrat.className}`}>14 jun 2024</h5>
                            </div>
                        </div>
                        <div>
                            <button className='btn h-12 uppercase px-6 shadow-2xs rounded-full  bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                                see more
                            </button>
                        </div>
                    </div>
                </div>


            </div>

            {/* pagination */}

            <div className='flex items-center justify-center pb-16'>
                <div className="join rounded-full border-2 px-5 py-3">

                    <button className="join-item btn text-xl bg-[#ffffff] border-none text-black shadow-none rounded-l-full"> <span>«</span> Previous</button>
                    <button className="join-item btn text-xl border-r-2 border-y-0 border-l-2 border-gray bg-[#ffffff] text-black shadow-none">1</button>
                    <button className="join-item btn text-xl  border-y-0 border-l-0 border-r-2 border-gray bg-[#ffffff] text-black shadow-none">2</button>
                    <button className="join-item btn text-xl border-r-2 border-y-0 border-l-0 border-gray bg-[#ffffff] text-black shadow-none">3</button>

                    <button className="join-item btn text-xl bg-[#ffffff] border-none text-black shadow-none rounded-r-full">Next <span> »</span></button>
                </div>
            </div>
        </div>
    )
}

export default News

