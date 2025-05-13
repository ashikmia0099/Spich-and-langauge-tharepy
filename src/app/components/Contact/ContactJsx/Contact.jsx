import React from 'react'

import { AuroraText } from '../../../../components/magicui/aurora-text'
import { FaMapMarkerAlt, FaPhoneAlt, FaRegClock } from 'react-icons/fa'
import { MdOutlineEmail } from 'react-icons/md'


import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function Contact() {
    return (
        <div className='max-w-[1596px] mx-auto bg-white'>
            <div >

                <h1 className={`text-8xl font-extrabold uppercase leading-28 text-center px-[20%] pt-16`}>
                    <AuroraText>We Have love from You</AuroraText>
                </h1>
                <p className={`px-[15%] text-2xl leading-9 text-center py-10 ${montserrat.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit quia repudiandae enim voluptate, eaque repellendus asperiores molestias facere, sit ducimus odio accusantium quidem.</p>
            </div>

            <div className=' grid grid-cols-2 gap-y-22 gap-20 px-36 pb-36 pt-20'>
                
                {/* phone */}
                
                <div className=' px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                    <FaPhoneAlt className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Phone</h4>
                    <p className=' text-lg font-semibold leading-6 pt-3'>amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            +8801403226133
                        </h4>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            +8801503225612
                        </h4>
                    </div>
                </div>

             
                {/* Email */}

                <div className=' px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                    <MdOutlineEmail className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Email</h4>
                    <p className=' text-lg font-semibold leading-6 pt-3'>officiis corporis earum suscipit amet consectetur adipisicing elit. Quam odit nam laudantium  </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            ashik@support@gmail.com
                        </h4>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            sslt222@gmail.com
                        </h4>
                    </div>
                </div>

             
                {/* Location */}

                <div className=' px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                    <FaMapMarkerAlt className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Location</h4>
                    <p className=' text-lg font-semibold leading-6 pt-3'>amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            1210, Mirpur 10 Dhanmondi,Dhaka
                        </h4>
                        
                    </div>
                </div>

             
                {/* time */}

                <div className=' px-10 py-6 rounded-2xl shadow-xl shadow-[#91aab4] '>
                    <div className=' h-16 w-16 bg-[#cfeefab7] rounded-sm flex items-center justify-center'>
                    <FaRegClock className=' text-3xl text-[#11aeec]' />
                    </div>
                    <h4 className=' text-2xl font-bold text-black pt-3'>Opening Day / Time</h4>
                    <p className=' text-lg font-semibold leading-6 pt-3'>amet consectetur adipisicing elit. Quam odit nam laudantium officiis corporis earum suscipit </p>
                    <div className=' pt-4 space-y-1.5'>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            Monday - Friday (9 - 5 pm)
                        </h4>
                        <h4 className=' text-xl font-bold text-[#0881b1]'>
                            Saturday 9 - 3 pm (applicant day)
                        </h4>
                    </div>
                </div>

             

            </div>
        </div>
    )
}

export default Contact