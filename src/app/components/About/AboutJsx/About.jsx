"use client";

import React from 'react'

import { AuroraText } from '../../../../components/magicui/aurora-text'
import Image from 'next/image';

import doctor1 from '../../../../../public/ssltimg/doctor1.jpg'

import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});



function About() {
    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div >

                <h1 className={`text-8xl font-extrabold uppercase leading-28 text-center px-[20%] pt-16`}>
                    <AuroraText>What Say Our Members</AuroraText>
                </h1>
                <p className={`px-[10%] text-2xl  leading-9 text-center py-10 ${montserrat.className}`}>Meet the dedicated professionals who serve as the current Executive Committee (EC) members of the Society of Speech & Language Therapists (SSLT). These individuals are committed to advancing the fields of communication, swallowing, and hearing health, while also safeguarding the rights and practice of our members. Through their leadership, expertise, and unwavering dedication, they ensure that SSLT remains a strong advocate for professional standards, ethical practices, and the well-being of both the members and the communities we serve.</p>
            </div>

            {/* president */}
            <div className=' px-20 pb-20'>
                <div className=' grid grid-cols-3 gap-10 px-20 py-12 rounded-3xl shadow-lg shadow-[#91aab4] border-t-4 border-x-2 border-[#91aab4]'>
                    {/* image */}
                    <div className=' col-span-1 flex items-center justify-center'>
                        <Image src={doctor1} className=' rounded-full h-80 w-80'></Image>
                    </div>
                    {/* text- */}
                    <div className=' col-span-2 flex items-center justify-center'>
                        <div>
                            <h1 className=' text-black font-bold text-4xl pb-3'>Message from the President</h1>
                            <h1 className=' text-black font-semibold text-2xl pb-3'>Dear Members and Visitors</h1>
                            <p className=' pr-5 pl-2'>
                                Welcome to the official website of the Society of Speech & Language Therapists (SSLT). As the President of this respected organization, I am proud to represent a community of dedicated professionals committed to advancing the fields of communication, hearing, and swallowing healthcare in Bangladesh.
                                Our mission is to uphold the highest standards of professional practice, advocate for the rights and recognition of our members, and ensure that those we serve receive the best possible care. Through collaboration and continued effort, we have made significant progress in enhancing public awareness, improving educational opportunities, and establishing a cohesive professional network.
                                I encourage you to explore our website to learn more about our ongoing initiatives, resources, and ways you can contribute to the success of our shared mission. Your support and active participation are crucial in helping us further develop our profession and serve the community.
                                Thank you for your dedication to advancing communication, hearing, and swallowing care. I look forward to our continued collective progress.

                            </p>
                            <div className=' pt-6'>
                                <p className=' text-lg font-semibold'>
                                    Warm regards,
                                </p>
                                <h3 className=' text-2xl font-bold'>
                                    Fida Al-Shams
                                </h3>
                                <p className='text-lg font-semibold'>
                                    President, Society of Speech & Language Therapists (SSLT)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' grid grid-cols-2 gap-7 pb-20'>

                {/* general sectriy */}
                <div className='  pb-20'>
                    <div className='  px-20 py-12 rounded-3xl shadow-lg shadow-[#91aab4] border-t-4 border-x-2 border-[#91aab4]'>
                        {/* image */}
                        <div className='  flex items-center justify-center'>
                            <Image src={doctor1} className=' rounded-full h-80 w-80'></Image>
                        </div>
                        {/* text- */}
                        <div className='  flex items-center justify-center pt-10'>
                            <div>
                                <h1 className=' text-black font-bold text-4xl pb-3'>Message from the General Secretary</h1>
                                <h1 className=' text-black font-semibold text-2xl pb-3'>Dear Members and Colleagues</h1>
                                <p className=' pr-5 pl-2'>
                                    Welcome to the official online platform of the Society of Speech & Language Therapists (SSLT). As the General Secretary, it is an honor to serve our dynamic and growing community of professionals dedicated to enhancing communication, swallowing, and hearing health across Bangladesh.
                                    At SSLT, we are committed to supporting our members through advocacy, continuous professional development, and creating a collaborative environment. I encourage all members to actively participate in our events and initiatives, as your engagement plays a vital role in advancing our profession and ensuring the highest standards of care for those we serve.
                                    Thank you for your ongoing dedication and contributions to our Society and the field. Together, we will continue to make meaningful strides in improving the lives of individuals across the country.

                                </p>
                                <div className=' pt-6'>
                                    <p className=' text-lg font-semibold'>
                                        Best regards,,
                                    </p>
                                    <h3 className=' text-2xl font-bold'>
                                        Tahmina Sultana
                                    </h3>
                                    <p className='text-lg font-semibold'>
                                        General Secretary, Society of Speech & Language Therapists (SSLT)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Founding Memver */}
                <div className='  pb-20'>
                    <div className='  px-20 py-12 rounded-3xl shadow-lg shadow-[#91aab4] border-t-4 border-x-2 border-[#91aab4]'>
                        {/* image */}
                        <div className='  flex items-center justify-center'>
                            <Image src={doctor1} className=' rounded-full h-80 w-80'></Image>
                        </div>
                        {/* text- */}
                        <div className='  flex items-center justify-center pt-10'>
                            <div>
                                <h1 className=' text-black font-bold text-4xl pb-3'>Message from the Founding Members </h1>
                                <h1 className=' text-black font-semibold text-2xl pb-3'>Dear Members and Colleagues</h1>
                                <p className=' pr-5 pl-2'>
                                    The founding members of SSLT were visionary pioneers who identified the essential need for a professional body to represent and advance the practice of healthcare professionals specializing in communication, swallowing, hearing, and related fields in Bangladesh. Through their dedication, strategic vision, and tireless efforts, they established the foundation of what is now a respected and influential organization within the healthcare sector.
                                    Their collective contributions have ensured that SSLT serves as a platform for professionals in the field, advocating for their rights, promoting ethical practices, and fostering an environment of growth and development.
                                    
                                </p>
                                <div className=' pt-6'>
                                    <p className=' text-lg font-semibold'>
                                        Best regards,,
                                    </p>
                                    <h3 className=' text-2xl font-bold'>
                                    Founding Members
                                    </h3>
                                    <p className='text-lg font-semibold'>
                                        Society of Speech & Language Therapists (SSLT)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About