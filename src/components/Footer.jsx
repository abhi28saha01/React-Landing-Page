import React from 'react'

const Footer = () => {
    return (
      <div className='bg-[#010851] md:px-14 p-4 max-w-screen-2xl max-auto text-white'>
          <div className='my-12 flex'>
            <div className='md:w-1/2 space-y-8'>
              <a href='/' className='text-2xl font-semibold flex items-center space-x-3 text-primary'>
                <span className='text-white'>ARUN</span>
              </a>
              <p className='md: w-1/2'>A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence.</p>
              <div>
                <input type='email' name='email' id='email' placeholder='Enter Your Email' className='bg-[#9a7af159] py-2 px-5 rounded-md focus:outline-none' />
                <button className='py-2 px-8 bg-purple-500 rounded-md ml-1 hover:bg-purple-900'>Send</button>
              </div>
            </div>
            
            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
              <div className='space-y-4 mt-5'>
                <h4 className='text-2xl'>Platform</h4>
                <ul className='space-y-3'>
                  <a href='/' className='block hover:text-gray-300'>Overview</a>
                  <a href='/' className='block hover:text-gray-300'>Features</a>
                  <a href='/' className='block hover:text-gray-300'>About</a>
                  <a href='/' className='block hover:text-gray-300'>Pricing</a>
                </ul>
              </div>
              <div className='space-y-4 mt-5'>
                <h4 className='text-2xl'>Help</h4>
                <ul className='space-y-3'>
                  <a href='/' className='block hover:text-gray-300'>How does it works?</a>
                  <a href='/' className='block hover:text-gray-300'>Where to ask question?</a>
                  <a href='/' className='block hover:text-gray-300'>How to play?</a>
                  <a href='/' className='block hover:text-gray-300'>What is needed for this?</a>
                </ul>
              </div>
              <div className='space-y-4 mt-5'>
                <h4 className='text-2xl'>Contacts</h4>
                <ul className='space-y-3'>
                  <p>(012) 1234-567-890</p>
                  <p>123 xyz xyz qwuerybaihefv, qiwu - hrebcl095467</p>
                </ul>
              </div>
            </div>
          </div>
      </div>
    )
}

export default Footer