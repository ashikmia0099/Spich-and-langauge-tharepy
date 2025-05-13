import React from 'react'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { IoArrowForwardSharp } from 'react-icons/io5'
import Vission from './Vission'
import { AuroraText } from '../../../../components/magicui/aurora-text'



import { Montserrat } from 'next/font/google';

// ✅ Load the font with explicit weight
const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['600',], // choose the weights you want
});


function Questions() {
    return (
        <div>
            <div className='max-w-[1536px] mx-auto pb-30 pt-10 px-5'>
                <div className=' mt-20 grid grid-cols-2 gap-5'>
                    {/* text */}
                   <div className=' flex items-center justify-center'>
                   <div className=' sticky'>
                        <h1 className='text-8xl font-extrabold uppercase leading-24 text-left text-[#83C1DA]'> <AuroraText>Frequently Asked Questions</AuroraText></h1>
                        <button className='btn shadow-2xs rounded-full mt-7 bg-[#84C2DB] border-none text-black text-lg font-bold flex items-center justify-center'>
                            Get Membership <span className='pt-1'><IoArrowForwardSharp /></span>
                        </button>
                    </div>
                   </div>
                    {/* questions */}

                    <div>
                        <div className="join join-vertical bg-white w-full">
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5 ${montserrat.className}`}>What is Kajabi?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full p-0">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Why choose Kajabi?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>How does Kajabi help me build my business?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Can I outgrow Kajabi?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>How does Kajabi compare with other knowledge commerce platforms?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Can I cancel my Kajabi subscription at any time?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Does Kajabi take a cut of my revenue?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Can I use Kajabi on mobile devices?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Does Kajabi support integrations with other tools or platforms?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                            <div className="collapse collapse-plus join-item border-black border-b-2 w-full">
                                <input type="radio" name="my-accordion-4" defaultChecked />
                                <div className={`collapse-title p-0 font-bold text-2xl pt-5  ${montserrat.className}`}>Still have more questions?</div>
                                <div className="collapse-content text-lg font-semibold">Synergistically productivate fully researched infomediaries rather than distinctive growth strategies. Compellingly facilitate an expanded array of innovation whereas team building systems. Competently brand scalable metrics for dynamic infrastructures. Collaboratively integrate turnkey scenarios before.</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions