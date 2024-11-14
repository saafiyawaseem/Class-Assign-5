import React from 'react'
import Header from './Component/Header'
import Image from 'next/image'

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex flex-col md:flex-row justify-center items-center h-[80%] px-4 md:px-10">
        <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
          <h1 className='text-[40px] font-bold font-[Roboto] mb-2 leading-loose w-full'>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className='text-[34px] text-lg text-[#787054] mb-5 w-full gap-2'>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className='bg-[#A29875] rounded-[10px] w-[288px] text-xl px-5 py-2 mb-2 text-white font-medium'>
            Explore Now
          </button>
        </div>
        
        <div className='w-full md:w-1/2 flex justify-end items-center'>
          <Image
            src="/images/fashion.svg"
            alt="Figma"
            width={200} 
            height={200} 
            className="object-contain w-[200px] h-[200px] md:w-[300px] md:h-[300px] mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  )
}

export default Home;

