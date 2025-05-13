
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { FaHome, FaUsers, FaNetworkWired, FaNewspaper, FaProjectDiagram, FaWpforms, FaList, FaRegListAlt, FaThList } from "react-icons/fa";
import { MdBroadcastOnHome, MdMedicalServices, MdOutlineMiscellaneousServices, MdMiscellaneousServices, MdCategory, MdFolderShared, MdContactPhone } from "react-icons/md";
import { GiLifeBar, GiNewspaper, GiChoice } from "react-icons/gi";
import { VscServerProcess } from "react-icons/vsc";
import { TbArrowRoundaboutRight } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { FaFileWaveform } from 'react-icons/fa6';
import { FaEdit } from "react-icons/fa";
import { LuUsersRound } from 'react-icons/lu';
import { CiBoxList, CiViewList } from 'react-icons/ci';
import { FcBusinessContact } from 'react-icons/fc';



function Sidebar() {
  const pathname = usePathname();

  // Separate dropdown states
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [AllUsersdropDown, setAllUsers] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [workDropdown, setWorkDropdown] = useState(false);
  const [processDropdown, setProcessDropdown] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [blogsDropdown, setBlogsDropdown] = useState(false);
  const [careersDropdown, setCareersDropdown] = useState(false);
  const [SharedFile, setSharedFile] = useState(false);
  const [contactus, setContactus] = useState(false);


  const isActive = (href) => {
    return pathname === href || (href !== '/' && pathname.startsWith(href));
  };

  const menuItemClass = (active) =>
    `text-lg font-semibold flex gap-3 items-center  pb-4 ${active ? "text-[#9EFF00]" : "text-white"}`;

  const renderDropdownIcon = (open) =>
    <IoIosArrowDown className={`text-2xl transition-transform ${open ? "rotate-180" : "rotate-0"}`} />;

  return (
    <div className="bg-[#191919] h-full ">
      <div className="max-w-[1596px] mx-auto ">

        {/* Login logout users */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAllUsers(!AllUsersdropDown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaUsers /></span>
              <span>All User Information</span>
            </div>
            {renderDropdownIcon(AllUsersdropDown)}
          </div>
          {AllUsersdropDown && (
            <ul className=" mt-2 border-l border-gray-600 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DeshboardLoginLogout/AllUsers'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><LuUsersRound /></span>
                <Link href="/dashboard/DeshboardLoginLogout/AllUsers">All Users</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Genearal Mambership */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setAboutDropdown(!aboutDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><TbArrowRoundaboutRight /></span>
              <span>Genearal Mambership</span>
            </div>
            {renderDropdownIcon(aboutDropdown)}
          </div>
          {aboutDropdown && (
            <ul className="ml-6 mt-2  border-gray-500 pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardAbout/AboutDataList">All Genearal Mambership List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardAbout/AboutBannerList">Genearal Mambership Post List</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Student Mambership */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setBlogsDropdown(!blogsDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNewspaper /></span>
              <span>Student Mambership</span>
            </div>
            {renderDropdownIcon(blogsDropdown)}
          </div>
          {blogsDropdown && (
            <ul className=" mt-2  border-gray-500 pl-4">
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DashboardBlogs/AllCategory">All Student Mambership List</Link>
              </li>
              <li className={`${menuItemClass(isActive('/dashboard/DashboardBlogs/AllBlogs'))} xl:text-lg lg:text-[16px]`}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DashboardBlogs/AllBlogs">Student Mambership Form</Link>
              </li>

            </ul>
          )}
        </li>

        {/* Home */}
        <li className={`${menuItemClass(isActive("/"))} flex-col gap-3 py-2  px-5`}>
          <div className="flex items-center  justify-between cursor-pointer w-full" onClick={() => setHomeDropdown(!homeDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaHome /></span>
              <span>Home</span>
            </div>
            <div>
              {renderDropdownIcon(homeDropdown)}
            </div>
          </div>
          {homeDropdown && (
            <ul className="ml-6 mt-2 border-l border-gray-600 pl-4">
              <li className={menuItemClass(isActive("/components/Work"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/Work">Banner Image List</Link>
              </li>
              <li className={menuItemClass(isActive("/components/Process"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/Process">Mission Image List</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/AboutUs">Vission Image List</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/AboutUs">Object Card List</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/AboutUs">Questio Data List</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/components/AboutUs">Community Data List</Link>
              </li>

              {/* form data  */}

              <li className={menuItemClass(isActive("/components/Work"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/components/Work">Banner Image Form</Link>
              </li>
              <li className={menuItemClass(isActive("/components/Process"))}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/components/Process">Mission Image Form</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/components/AboutUs">Vission Image Form</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/components/AboutUs">Object Card Form</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/components/AboutUs">Questio Data Form</Link>
              </li>
              <li className={menuItemClass(isActive("/components/AboutUs"))}>
                <span className="text-2xl"><FaFileWaveform  /></span>
                <Link href="/components/AboutUs">Community Data Form</Link>
              </li>


            </ul>
          )}
        </li>


        {/* Resourse */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setServiceDropdown(!serviceDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdOutlineMiscellaneousServices /></span>
              <span>Resourse</span>
            </div>
            {renderDropdownIcon(serviceDropdown)}
          </div>
          {serviceDropdown && (
            <ul className=" mt-2  border-gray-500 pl-4">
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News Category List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News Title List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/ServiceAllCategoryList"))}>
                <span className="text-2xl"><FaList /></span>
                <Link href="/dashboard/DeshboardServices/ServiceAllCategoryList">All News List</Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DeshboardServices/AllServiceList"> All News Category Form  </Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DeshboardServices/AllServiceList">All News Title Form </Link>
              </li>
              <li className={menuItemClass(isActive("/dashboard/DeshboardServices/AllServiceList"))}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardResourse/DeshboardResourseNewsForm"> All News Form  </Link>
              </li>
            </ul>
          )}
        </li>

        {/* News */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setWorkDropdown(!workDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><FaNetworkWired /></span>
              <span>News</span>
            </div>
            {renderDropdownIcon(workDropdown)}
          </div>
          {workDropdown && (
            <ul className=" mt-2  ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DashboardWork/AllProject">All News Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaWpforms /></span>
                <Link href="/Deshboard/DeshboardNews/DeshboardNewsAllDataForm">All News Data From</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Gallary */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setProcessDropdown(!processDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><VscServerProcess /></span>
              <span>Gallary</span>
            </div>
            {renderDropdownIcon(processDropdown)}
          </div>
          {processDropdown && (
            <ul className=" mt-2  border-gray-500 ">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessList">Gallary All Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardProcess/AllProcessTitleTextList">Gallary Post Form </Link>
              </li>

            </ul>
          )}
        </li>



        {/* About */}
        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setCareersDropdown(!careersDropdown)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><GiLifeBar /></span>
              <span>About</span>
            </div>
            {renderDropdownIcon(careersDropdown)}
          </div>
          {careersDropdown && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardAbout/DeshboardAboutCardForm"> About All Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/Deshboard/DeshboardAbout/DeshboardAboutCardForm">About Card Data Form</Link>
              </li>
            </ul>
          )}
        </li>

        {/* Contact us */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setContactus(!contactus)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdContactPhone /></span>
              <span>Contact</span>
            </div>
            {renderDropdownIcon(contactus)}
          </div>
          {contactus && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardContactUs/PhoneEmailForm"> Contact All Data List</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/Deshboard/DeshboardContact/DeshboardContactDataForm">Contact All Data Form</Link>
              </li>
            </ul>
          )}
        </li>


        {/* shared files */}


        <li className={`flex-col gap-3 py-2 px-5 ${menuItemClass(false)}`}>
          <div className="flex items-center justify-between cursor-pointer w-full" onClick={() => setSharedFile(!SharedFile)}>
            <div className="flex items-center gap-3">
              <span className="text-2xl"><MdFolderShared /></span>
              <span>Shared Files</span>
            </div>
            {renderDropdownIcon(SharedFile)}
          </div>
          {SharedFile && (
            <ul className="ml-6 mt-2   pl-4">
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaThList /></span>
                <Link href="/dashboard/DashboardCareer/CareerFirstTitleFormList"> Shared Footer Hero All Data</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardShared/SharedFooterHero">Shared Footer Hero All Data Form</Link>
              </li>
              <li className={menuItemClass(false)}>
                <span className="text-2xl"><FaFileWaveform /></span>
                <Link href="/dashboard/DashboardShared/Frequently_Asked_Questions_Form">Frequently Asked Questions</Link>
              </li>


            </ul>
          )}
        </li>


      </div>
    </div>
  );
}

export default Sidebar;