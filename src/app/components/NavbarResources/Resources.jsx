import React from 'react';

import image1 from '../../../../public/ssltimg/doctor1.jpg'
import image2 from '../../../../public/ssltimg/doctor2.jpg'
import image3 from '../../../../public/ssltimg/doctor3.jpg'
import Image from 'next/image';
import { FaUserDoctor } from 'react-icons/fa6';
import { SiAsciidoctor } from "react-icons/si";

function Resources() {
  return (
    <div className=""> {/* Full screen height to control overall size */}
      <div className="px-5 py-5 grid grid-cols-6 h-full">
        <div className="col-span-4 grid grid-cols-2 gap-10 overflow-y-auto overflow-hidden h-[76vh]">
          <div className="relative h-screen overflow-hidden">
            {/* Fixed Header */}
            <div className="absolute top-0 left-0 right-0 bg-white z-10">
              <h1 className="text-3xl font-bold text-black border-b-2 border-black pb-2.5 uppercase px-4 pt-4">
                Build & Launch
              </h1>
            </div>

            {/* Scrollable Area */}
            <div className="absolute top-[80px] bottom-0 left-0 right-0 overflow-y-auto px-4 pr-6 pt-4">
              <div className="join join-vertical bg-white">
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              

              </div>
            </div>
          </div>


          {/* scroll area secion 2 */}
          <div className="relative h-screen overflow-hidden">
            {/* Fixed Header */}
            <div className="absolute top-0 left-0 right-0 bg-white z-10">
              <h1 className="text-3xl font-bold text-black border-b-2 border-black pb-2.5 uppercase px-4 pt-4">
              The Global and National Context
              </h1>
            </div>

            {/* Scrollable Area */}
            <div className="absolute top-[80px] bottom-0 left-0 right-0 overflow-y-auto px-4 pr-6 pt-4">
              <div className="join join-vertical bg-white">
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-xl leading-7 flex items-center gap-3 p-1" ><span><SiAsciidoctor className=' text-3xl' /></span> <span className=' '>Addressing Gaps in Training, Professional Development</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              
                <div className="collapse collapse-arrow join-item ">
                  <input type="radio" name="my-accordion-4" defaultChecked />
                  <div className="collapse-title font-bold text-black text-2xl leading-7 flex items-center gap-2 p-1" ><span><FaUserDoctor className=' text-3xl' /></span> <span>The Evolution of Communication</span></div>
                  <div className="collapse-content text-sm text-black space-y-2">
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>1.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Benefits for SSLT Student Members</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>2.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Teacher treading</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>3.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>The Formation of SSLT: A Response to Emerging Needs</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>4.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Vision, Mission, and Objectives</span></ol>
                    <ol className=' text-xl font-semibold flex items-center gap-3'> <span className=' text-2xl font-semibold'>5.</span> <span className=' text-lg font-semibold hover:text-blue-600  hover:border-b border-blue-700 pr-3 pt-1'>Membership Benefits for General Members</span></ol>

                  </div>
                </div>
              

              </div>
            </div>
          </div>




        </div>

        {/* image section */}

        <div className="col-span-2">
          <div className='grid grid-flow-col grid-rows-2 gap-8 px-10 py-16'>
            <div>
              <Image src={image1} className=' rounded-2xl w-full '></Image>
            </div>
            <div>
              <Image src={image2} className=' rounded-2xl w-full'></Image>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;
