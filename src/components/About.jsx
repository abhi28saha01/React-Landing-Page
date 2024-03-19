import React from 'react'
import Reading from '../assets/Reading.png';
import universe from '../assets/universe.png'

const About = () => {
  return (
    <div className='md:px-14 p-4 max-w-s mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-1/2'>
                <img src={Reading} />
            </div>

            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>We have been improving our product <span className='text-secondary'> for many years.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.'There are many different kinds of animals that live in China.</p>
                <button  className='py-2 px-8 bg-secondary hover:bg-purple-900 font-semibold text-white rounded-lg'>Get Started</button>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
            <div className='md:w-2/5'>
                <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>You can Practice at any <span className='text-secondary'>time convinent for you.</span></h2>
                <p className='text-tartiary text-lg mb-7'>A good example of a paragraph contains a topic conclusion.
                There are many different kinds of animals that live in China.</p>
                <button  className='py-2 px-8 bg-secondary hover:bg-purple-900 font-semibold text-white rounded-lg'>Get Started</button>
            </div>
            <div className='md:w-1/2'>
                <img src={universe} />
            </div>
        </div>
    </div>
  )
}

export default About