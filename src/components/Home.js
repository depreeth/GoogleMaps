import React from 'react'
import {useJsApiLoader, GoogleMap , useLoadScript, Marker } from '@react-google-maps/api'

const Home = () => {

  const {isLoaded} = useLoadScript({
    googleMapsApiKey: "AIzaSyAolXVBph__8LXk-JukgnxDUI4LPDQAsxQ",
  })

  if(!isLoaded){
    return <div>Loading...</div>
  }





  return (
    <div className='bg-[#E5E5E5]'>
      <div className="  w-full h-[85vh] mt-[90px] ">
      <div className=' '>
        <p className=" font-normal text-[20px]  text-center text-[#1B31A8] ">Let's calculate <span className=' font-extrabold'>distance</span> from Google maps</p>
      </div>
      <div className=' flex flex-col sm:flex sm:flex-row mt-[33px] ml-[156px] mr-[104px]'>
        <div className=' md:w-1/2 '>
        <div className="flex flex-col  w-[100%] h-[100%] rounded-br-xl " id="bg-form">
                <label className="">Source</label>
                    <input
                      className=" bg-white placeholder:font-bold rounded-md w-[190px] xl:w-[272px] h-[56px] placeholder:p-3"
                      type="text"
                      placeholder="Mumbai"
                      value=""
                    />
                    <button className=" rounded-3xl md:ml-[100px] lg:ml-[200px] xl:ml-[280px] w-[141px] my-3 text-white p-3  bg-[#1B31A8] ">
                  Calculate
                </button>
                    <label className="">Destination</label>
                    <input
                      className=" bg-white placeholder:font-bold rounded-md w-[190px] xl:w-[272px] h-[56px] placeholder:p-3"
                      type="text"
                      placeholder="Delhi"
                      value=""
                    />
                    <div className=' w-[250px] xl:w-[490px] h-[155px] mt-[49px]' >
                      <div className=' flex justify-between bg-white h-[78px] '>
                      <div className=' my-auto ml-7'>
                        Distance
                      </div>
                      <div className=' my-auto mr-7 '>
                        1,427 Kms
                      </div>
                      </div>
                      <div className=' h-[77px] '>
                      <p className=' my-5 ml-7'>The distance between Mumbai and Delhi is 1,427 kms.</p>
                      </div>
                    </div>
                    
                </div>
        </div>
        <div className='bg-[#17a040] md:w-1/2 '>
            <div id="googlemap">
              <GoogleMap zoom={10} center={{lat: 44, lng: -80}} className='w-96 h-96'>

              </GoogleMap>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
