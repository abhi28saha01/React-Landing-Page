import React from 'react'
import fellingHappy from '../assets/Feeling_happy.png'

const NewsLetter = () => {
  return (
    <div className='md: px-14 p-4 max-w-screen-2xl mx-auto my-12'>
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row jus-between items-center gap-10'>
                {/* Banner Content */}
                <div className='md : w-3/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-[110px]'>Each student can share their discount code for friends</h2>
                    <p className='text-white text-2xl mb-8'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.”</p>
                    <div className='space-x-6 space-y-4'>
                        <button className='py-4 px-12 bg-secondary hover:bg-purple-900  font-semibold text-white rounded-lg'>Get Code</button>
                    </div>
                </div>
                {/* Banner Image */}
                <div>
                    <img src={fellingHappy} className='lg:h-[360px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter