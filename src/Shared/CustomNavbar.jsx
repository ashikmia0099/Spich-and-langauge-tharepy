"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import { IoNotificationsSharp, IoChatbubbleEllipses, IoNotifications } from "react-icons/io5";
import { CiShop } from "react-icons/ci";
import { FaRegUserCircle, FaHome, FaNetworkWired, FaNewspaper } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { RiMenu2Line, RiContactsBook3Fill } from "react-icons/ri";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { GiLifeBar } from "react-icons/gi";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

import ssllogo from '../../public/images/ssltLogo.jpg'
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

// shadcn data

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,

} from "@/components/ui/drawer"


import { Button } from "@/components/ui/button"
import Resources from "@/app/components/NavbarResources/Resources";


function CustomNavbar() {



    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    // const { handleSignInWithEmail, user, setUser, handleSignOut } = useAuth()
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);


    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const closeDrawer = () => {
        setIsDrawerOpen(false);
    };



    const isActive = (href) => {
        return pathname === href ||
            (href !== '/' && pathname.startsWith(href));
    };



    // const handleLogout = () => {
    //     handleSignOut()
    //         .then(() => {

    //             router.push('/Auth')

    //         })
    //         .catch((error) => {

    //             return (error)

    //         })
    // }









    const links = (
        <>

            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/">Home</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold relative ${isActive("/components/Services") ? "text-[#84C2DB]" : "text-black"} ${isOpen ? "text-[#84C2DB]" : "text-black"}`}>
                <button onClick={() => setIsOpen(!isOpen)} className="xl:text-lg lg:text-[16px] text-lg font-semibold" >
                    <span>Resources</span> <span> <IoIosArrowDown className={`text-2xl mt-1 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} /></span>
                </button>

            </li>
           
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/News') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/News">News & Updates</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/Gallary') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Gallary">Gallary</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/Membership') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Membership">Membership</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/About') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/About">About Us</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/Contact') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Contact">Contact</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/components/Details') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/components/Details">Details</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/Deshboard') ? 'text-[#84C2DB]' : 'text-black'}`}>
                <Link href="/Deshboard">Deshboard</Link>
            </li>


        </>

    );


    const mobileLinks = (

        <>

            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><FaHome /></span>
                <Link href="/">Home</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Services') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
                <Link href="/components/Services">Services</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Work') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><FaNetworkWired /></span>
                <Link href="/components/Work">Work</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Process') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><VscServerProcess /></span>
                <Link href="/components/Process">Process</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/AboutUs') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><TbArrowRoundaboutRight /></span>
                <Link href="/components/AboutUs">About</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/Homepages/home') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><FaNewspaper /></span>
                <Link href="/components/Blogs">Blogs</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Careers') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><GiLifeBar /></span>
                <Link href="/components/Careers">Careers</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/ContactUs') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><RiContactsBook3Fill /></span>
                <Link href="/components/ContactUs">Contact Us</Link>
            </li>
            <li className={`text-lg font-semibold flex gap-3 items-center border-b border-[#585858] pb-4 ${isActive('/components/Notifications') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <span className="text-2xl"><IoNotifications /></span>
                <Link href="/components/Notifications">Notifications</Link>
            </li>
            <li className={`xl:text-lg lg:text-[16px] text-lg font-semibold ${isActive('/dashboard') ? 'text-[#84C2DB]' : 'text-white'}`}>
                <Link href="/dashboard">Dashboard</Link>
            </li>


        </>

    );






    return (
        <div className="sticky top-5 z-40 ">
            <div className="navbar max-w-[1596px] h-24 mx-auto bg-white/60 backdrop-blur-sm rounded-3xl">
                <div className="navbar-start">
                    <Link href="/">
                        <h1 className="flex items-center gap-2">
                            <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                                <Image src={ssllogo} className=" h-10 w-10 lg:h-14 lg:w-14 rounded-full"></Image>
                            </span>
                            <span className="font-bold text-[14px] md:text-2xl text-black block lg:hidden xl:block">
                               SSLT
                            </span>
                        </h1>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3 lg:gap-2 xl:gap-3">{links}</ul>
                </div>

                <div className="navbar-end">

                    <div className="hidden lg:block px-5 xl:px-0">


                        <Link href={"/components/Auth"}>
                            <button className="btn text-black bg-[#84C2DB] rounded-full h-10 px-5 xl:h-14 text-lg font-medium border-none shadow-2xs">
                                <span>Member Login</span> 
                            </button>
                        </Link>

                    </div>
                    <div className="dropdown">
                        <button
                            className="btn bg-[#9dff00bb] shadow-2xs border-none lg:hidden"
                            onClick={toggleDrawer}
                        >
                            <RiMenu2Line className="text-2xl text-white" />
                        </button>

                        {/* Drawer with Animation */}
                        <div className={`fixed inset-0 z-40 transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                            {/* Overlay */}
                            <div
                                className="fixed inset-0 bg-black/50 transition-opacity duration-300"
                                onClick={closeDrawer}
                            ></div>

                            {/* Drawer Side */}
                            <div className={`fixed top-0 left-0 h-full w-full md:w-[80%] max-w-md bg-[#131212] text-white transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                                <div className="flex pt-5 px-5 justify-between border-b border-[#585858] pb-6">
                                    <div>
                                        <h1 className="flex items-center gap-2">
                                            <span className="text-lg md:text-3xl font-extrabold text-[#A259FF]">
                                                <Image src={ssllogo} className=" h-10 w-10 rounded-full"></Image>
                                            </span>
                                            <span className="font-bold text-[14px] md:text-2xl text-black  block">
                                                SSLT
                                            </span>
                                        </h1>
                                    </div>
                                    <div>
                                        <button
                                            className="text-4xl text-white cursor-pointer"
                                            onClick={closeDrawer}
                                        >
                                            <RxCrossCircled className="text-red-700" />
                                        </button>
                                    </div>
                                </div>
                                <div className="overflow-y-auto h-[calc(100vh-80px)] bg-[#2B2B2B]">
                                    <ul className="pl-6 mt-5 space-y-2">
                                        {mobileLinks}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: '80vh', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                        className="absolute w-full flex justify-center mt-0  z-50"
                    >
                        <div className="bg-white shadow-2xl shadow-[#949494] w-full max-w-[1596px] rounded-bl-lg rounded-br-lg">
                            {/* Content goes here */}
                            <p className="text-white text-2xl">
                                <Resources></Resources>
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>


        </div>

    )
}

export default CustomNavbar