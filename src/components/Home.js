import React from 'react'

const Home = () => {
  return (
    <>
      <div className="  w-full h-screen mt-[110px]">
      <div className=' '>
        <p className=" font-normal text-[20px]  text-center text-[#1B31A8] ">Let's calculate <span className=' font-extrabold'>distance</span> from Google maps</p>
      </div>
      <div className=' flex flex-row mt-[33px] ml-[156px] mr-[104px]'>
        <div className=' md:w-1/2 '>
        <div className="flex flex-col  w-[100%] h-[100%] rounded-br-xl " id="bg-form">
                <label className="">Source</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Source"
                      value=""
                    />
                    <button className=" rounded-3xl ml-[280px] w-[141px] text-white p-3  bg-[#1B31A8] ">
                  Calculate
                </button>
                    <label className="">Destination</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Destination"
                      value=""
                    />
                    <label className="">Distance</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Distance"
                      value=""
                    />
                    
                </div>
        </div>
        <div className='bg-[#E5E5E5] md:w-1/2 '>
            <div>
                
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
