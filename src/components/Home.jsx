import React from 'react'
import BannerImage from '../assets/Banner-Image.png'

const Home = () => {
  return (
    <div className='md:px-12 p-4 max-w-screen-2xl mx-auto mt-20'>
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row jus-between items-center gap-10'>
                {/* Banner Content */}
                <div className='md : w-3/5'>
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-[110px]'>Develop your skills without diligence</h2>
                    <p className='text-white text-2xl mb-8'>A good example of a paragraph contains a topic sentence, details and a conclusion. There are  many different kinds of animals that live in China.</p>
                    <div className='space-x-6 space-y-4'>
                        <button className='py-2 px-8 bg-secondary hover:bg-purple-900 font-semibold text-white rounded-lg'>Get Started</button>
                        <button className='py-2 px-8 bg-secondary hover:bg-purple-900  font-semibold text-white rounded-lg'>Discount</button>
                    </div>
                </div>
                {/* Banner Image */}
                <div>
                    <img src={BannerImage} className='lg:h-[360px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home