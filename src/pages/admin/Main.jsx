import React from 'react'
import { FaArrowDown } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { CiViewList } from "react-icons/ci";
import { PiCoinsDuotone } from "react-icons/pi";
import { BsFileBarGraph } from "react-icons/bs";
import { RiFileWarningLine } from "react-icons/ri";
import StatsIcon from './StatsIcon';
const Main = () => {
  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl font-bold pb-1'>Hi, Admin</h1>
          <p className='pb-1 text-black/75 text-sm'>Quickly Review what’s going on in your store</p>
        </div>
        <div>
        <input className="flex min-h-[39px] w-full rounded-md border px-3 py-2 text-sm text-gray-600 transition-all hover:border-gray-400 dark:hover:border-gray-400 dark:text-gray-300 flatpickr-input" placeholder="Start Date" type="date"/>
        </div>
      </div>
        <h5 className='pt-2 text-medium text-black/75 text-[18px]'>Overall Details</h5>
        <div className=' grid gap-2 grid-cols-12'>
          <div className='lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12'>
            <div className='border-2 rounded-md p-2 shadow-md'>
              <div className='flex justify-between py-2'>
                <StatsIcon icon2={<FaArrowDown className='inline' size={12}/>} icon={<PiCoinsDuotone className='text-gray-400' size={60}/>} mainTxt='$0.00' subTxt='Total Revenue'/> 
                <StatsIcon icon2={<FaArrowDown className='inline' size={12}/>} icon={<CiViewList className='text-gray-400' size={60}/>} mainTxt='$0.00' subTxt='Total Revenue'/> 
                <StatsIcon icon2={<FaArrowDown className='inline' size={12}/>} icon={<CiUser className='text-gray-400' size={60}/>} mainTxt='$0.00' subTxt='Total Revenue'/> 
              </div>
              <div className='flex justify-between ps-5 pe-5 mt-3 py-2'>
                <StatsIcon className="ps-5" icon={<BsFileBarGraph className='text-gray-400' size={60}/>} mainTxt='$0.00' subTxt='Total Revenue'/> 
                <StatsIcon className="pe-5" icon={<RiFileWarningLine className='text-gray-400' size={60}/>} mainTxt='$0.00' subTxt='Total Revenue'/> 
              </div>
            </div>
          </div>
          <div className='col-span-12 lg:col-span-5 md:col-span-12 sm:col-span-12'>
            <div className='h-[310px] bg-blue-600 border-2 rounded-md'>

            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default Main