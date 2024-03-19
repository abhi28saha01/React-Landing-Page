import React, { useState } from 'react';
import { ImCross } from "react-icons/im";
import { TiTick } from "react-icons/ti";

const Pricing = () => {

    const [isYearly , setIsYearly] = useState(false)

    const Packagess = [
        {
            name : "Start" , 
            description : "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            monthlyPrice : 49,
            yearlyPrice : 399,
            videos : true,
            homework : true,
            doubt : false,
            conference : false,
            personal_guidence : false
        },
        {
            name : "Advance" , 
            description : "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            monthlyPrice : 79,
            yearlyPrice : 599,  
            videos : true,
            homework : true,
            doubt : true,
            conference : true,
            personal_guidence : false              
        },
        {
            name : "Premium" , 
            description : "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            monthlyPrice : 99,
            yearlyPrice : 999,
            videos : true,
            homework : true,
            doubt : true,
            conference : true,
            personal_guidence : true                
        },
    ]

    const toggleChange = () => {
        setIsYearly(!isYearly);
    }

  return (
    <div className='md:px-14 p-4 max-w-s mx-auto py-10'>
        <div className='text-center'>
            <h2 className='md:text-5xl text-3xl font-extrabold text-primary'>Here are all Our Course plans</h2>
            <p className='text-tartiary md:w-1/3 mx-auto px-4 '>A simple paragraph is comprised of three major components. The which is often a declarative sentence.</p>
        

        <div className='mt-10'>
            <label htmlFor='toggle' className='inline-flex items-center cursor-pointer'>
                <span className='mr-8 text-2xl font-semibold text-primary'>Monthly</span>
                <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-500 ease-in-out'>
                    <div className={`w-6 h6 rounded-full transition duration-500 ease-in-out  ${isYearly ? "bg-primary text-white ml-8" : "bg-gray-500 text-white"}`}>{isYearly ? "Y" : "M"}</div>
                </div>
                <span className='ml-8 text-2xl font-semibold text-primary'>Yearly</span>
            </label>
            <input type='checkbox' id='toggle' className='hidden' checked={isYearly} onChange={toggleChange} />
        </div>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 w-11/12 mx-auto'>
            {
                Packagess.map((pkg,idx) => (
                    <div key={idx} className='border py-10 md:px-6 px-4 rounded-lg shadow-3xl'>
                        <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>
                        <p className='text-tartiary text-center my-5'>{pkg.description}</p>
                        <p className='mt-5 text-center text-secondary text-4xl font-bold'>{isYearly ? `${pkg.yearlyPrice}/-` : `${pkg.monthlyPrice}/-`} <span className='text-base text-tartiary font-medium'>{isYearly ? "Yearly" : "Monthly"}</span> </p>
                        <ul className='mt-4 space-y-2 px-4'>
                            <li className='flex items-center gap-2'><div className={` ${pkg.videos ? "text-green-500" : "text-red-600"}`}>{pkg.videos ? <TiTick/> : <ImCross/>}</div>Videos of Lessons</li>
                            <li className='flex items-center gap-2'><div className={` ${pkg.homework ? "text-green-500" : "text-red-600"}`}>{pkg.homework ? <TiTick/> : <ImCross/>}</div>Homework check</li>
                            <li className='flex items-center gap-2'><div className={` ${pkg.doubt ? "text-green-500" : "text-red-600"}`}>{pkg.doubt ? <TiTick/> : <ImCross/>}</div>Additional Doubt Session</li>
                            <li className='flex items-center gap-2'><div className={` ${pkg.conference ? "text-green-500" : "text-red-600"}`}>{pkg.conference ? <TiTick/> : <ImCross/>}</div>Monthly conferences</li>
                            <li className='flex items-center gap-2'><div className={` ${pkg.personal_guidence ? "text-green-500" : "text-red-600"}`}>{pkg.personal_guidence ? <TiTick/> : <ImCross/>}</div>Personal advice</li>
                        </ul>
                        <button className='mt-7 py-2 px-8 bg-secondary hover:bg-purple-900 font-semibold text-white rounded-lg'>Get Started</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Pricing