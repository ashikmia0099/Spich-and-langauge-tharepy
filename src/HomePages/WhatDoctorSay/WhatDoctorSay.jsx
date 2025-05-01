import React from 'react';
import { TypingAnimation } from "../../components/magicui/typing-animation";
import { Marquee } from "../../components/magicui/marquee";
import { BoxReveal } from "../../components/magicui/box-reveal";
import { AuroraText } from '../../components/magicui/aurora-text'
import { CardBody, CardContainer, CardItem } from "../../components/ui/3d-card";
import { ShimmerButton } from "../../components/magicui/shimmer-button";
import { BorderBeam } from "../../components/magicui/border-beam";
import { ShineBorder } from "../../components/magicui/shine-border";



// Helper function to join class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

function WhatDoctorSay() {


    const reviews = [
        {
            name: "Jack",
            username: "@jack",
            body: "I've never seen anything like this before. It's amazing. I love it.",
            img: "https://avatar.vercel.sh/jack",
        },
        {
            name: "Jill",
            username: "@jill",
            body: "I don't know what to say. I'm speechless. This is amazing.",
            img: "https://avatar.vercel.sh/jill",
        },
        {
            name: "John",
            username: "@john",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/john",
        },
        {
            name: "Jane",
            username: "@jane",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jane",
        },
        {
            name: "Jenny",
            username: "@jenny",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/jenny",
        },
        {
            name: "James",
            username: "@james",
            body: "I'm at a loss for words. This is amazing. I love it.",
            img: "https://avatar.vercel.sh/james",
        },
    ];

    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);

    const ReviewCard = ({ img, name, username, body }) => {
        return (
            <figure
                className={cn(
                    "relative h-full w-64 cursor-pointer  rounded-xl border p-4",
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
                )}
            >
                <div className="flex flex-row items-center gap-2">
                    <img className="rounded-full" width="32" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-sm font-medium dark:text-white">
                            {name}
                        </figcaption>
                        <p className="text-xs font-medium dark:text-white/40">{username}</p>
                    </div>
                </div>
                <blockquote className="mt-2 text-sm">{body}</blockquote>
            </figure>
        );
    };

    const ReviewCardvartical = ({ img, name, username, body }) => {
        return (
          <figure
            className={cn(
              "relative h-full w-fit sm:w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
              // light styles
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              // dark styles
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <img className="rounded-full" width="32" height="32" alt="" src={img} />
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {name}
                </figcaption>
                <p className="text-xs font-medium dark:text-white/40">{username}</p>
              </div>
            </div>
            <blockquote className="mt-2 text-sm">{body}</blockquote>
          </figure>
        );
      };
      

    return (
        <div>
            {/* marques section */}
            <div>
                <h1 className="text-6xl text-center font-bold uppercase pt-24 pb-6 ">

                    <AuroraText className="text-6xl border-b-2 w-[45%] mx-auto pb-4 leading-20">
                        What Our Mission And Vission
                    </AuroraText>


                </h1>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                    <Marquee pauseOnHover className="[--duration:20s]">
                        {firstRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:5s] px-5">
                        {secondRow.map((review) => (
                            <ReviewCard key={review.username} {...review} />
                        ))}
                    </Marquee>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 px-5"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 px-5"></div>
                </div>
            </div>

            {/* banner secion */}


            <div className=' mt-16'>
                <div className=' grid grid-cols-8 gap-2.5 px-5'>

                    {/* right section */}
                    <div className=' -mt-14 col-span-3'>
                        <CardContainer className="inter-var">
                            <CardBody className=" w-full relative group/card     ">


                                <CardItem translateZ="100" className="w-full ">
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-[537px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>

                            </CardBody>
                        </CardContainer>
                        <BorderBeam duration={8} size={100} />
                    </div>

                    {/* left section */}


                    <div className=' col-span-5 h-[537px] p-5 px-8 bg-white/30 backdrop-blur-none w-full  rounded-xl relative overflow-hidden  border border-white/20 mt-5'>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                        <div className=' flex items-center justify-between mb-2.5'>
                            <h1 className=' text-xl font-bold uppercase'>Our Mission</h1>
                            <button className=' btn shadow-2xs rounded-full bg-[#007797] border-none text-xl font-semibold'>Learn More</button>

                        </div>
                        <div className=' mt-5'>
                            <div className=' h-full bg-white/15 backdrop-blur-none p-3 pt-2.5 rounded-xl'>
                                <ul className=' p-5 space-y-2.5 pb-10'>
                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>1. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>2. </span> Energistically innovate exceptional synergy before Energistically before.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>3. </span> Energistically innovate exceptional synergy before Energistically innovate Energistically.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>4. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>5. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>6. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            {/* banner section 2 */}

            <div className=' mt-16'>
                <div className=' grid grid-cols-12 gap-2.5 px-5'>

                    <div className=' col-span-4 h-[537px]  bg-white/30 backdrop-blur-none w-full  rounded-xl relative overflow-hidden  border border-white/20 mt-5'>
                        
                        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
                            <Marquee pauseOnHover vertical className="[--duration:20s]">
                                {firstRow.map((review) => (
                                    <ReviewCardvartical key={review.username} {...review} />
                                ))}
                            </Marquee>
                            <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                                {secondRow.map((review) => (
                                    <ReviewCardvartical key={review.username} {...review} />
                                ))}
                            </Marquee>
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 "></div>
                            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 "></div>
                            <BorderBeam duration={8} size={100} />
                        </div>

                    </div>

                    {/* right section */}
                    <div className=' -mt-14 col-span-3'>
                        <CardContainer className="inter-var">
                            <CardBody className=" w-full relative group/card     ">


                                <CardItem translateZ="100" className="w-full ">
                                    <img
                                        src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        height="1000"
                                        width="1000"
                                        className="h-[537px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt="thumbnail"
                                    />
                                </CardItem>

                            </CardBody>
                        </CardContainer>
                        <BorderBeam duration={8} size={100} />
                    </div>

                    {/* left section */}


                    <div className=' col-span-5 h-[537px] p-5 px-8 bg-white/30 backdrop-blur-none w-full  rounded-xl relative overflow-hidden  border border-white/20 mt-5'>
                        <ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
                        <div className=' flex items-center justify-between mb-2.5'>
                            <h1 className=' text-xl font-bold uppercase'>Our Vision</h1>
                            <button className=' btn shadow-2xs rounded-full bg-[#007797] border-none text-xl font-semibold'>Learn More</button>

                        </div>
                        <div className=' mt-5'>
                            <div className=' h-full bg-white/15 backdrop-blur-none p-3 pt-2.5 rounded-xl'>
                                <ul className=' p-5 space-y-2.5 pb-10'>
                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>1. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>2. </span> Energistically innovate exceptional synergy before Energistically before.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>3. </span> Energistically innovate exceptional synergy before Energistically innovate Energistically.</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>4. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>5. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                    <li className=' text-lg font-semibold'> <span className=' text-xl font-bold'>6. </span> Energistically innovate exceptional synergy before Energistically innovate exceptional synergy before</li>

                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}

export default WhatDoctorSay;
