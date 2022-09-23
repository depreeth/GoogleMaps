import React from 'react'
import {useJsApiLoader, GoogleMap , useLoadScript, Marker } from '@react-google-maps/api'

const Home = () => {

  // const {isLoaded} = useLoadScript({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  // })

  // if(!isLoaded){
  //   return <div>Loading...</div>
  // }


const options = {
	method: 'GET',
	headers: {
		'Content-Type': 'application/json',
		'X-RapidAPI-Key': '475873e768msh090c0c54a274a74p1cbcebjsn4f9ad7563d9f',
		'X-RapidAPI-Host': 'distance-calculator.p.rapidapi.com'
	}
};

fetch('https://distance-calculator.p.rapidapi.com/distance/simple?lat_1=47.373535&long_1=8.541109&lat_2=42.335321&long_2=-71.023516&unit=miles&decimal_places=2', options)
	.then(response => response.json())
  // console.log("data",response)
	.then(response => console.log(response))
	.catch(err => console.error(err));

  console.log("data",options)


  return (
    <>
      <div className="  w-full h-screen mt-[110px]">
      <div className=' '>
        <p className=" font-normal text-[20px]  text-center text-[#1B31A8] ">Let's calculate <span className=' font-extrabold'>distance</span> from Google maps</p>
      </div>
      <div className=' flex flex-col sm:flex sm:flex-row mt-[33px] ml-[156px] mr-[104px]'>
        <div className=' md:w-1/2 '>
        <div className="flex flex-col  w-[100%] h-[100%] rounded-br-xl " id="bg-form">
                <label className="">Source</label>
                    <input
                      className=""
                      type="text"
                      placeholder="Source"
                      value=""
                    />
                    <button className=" rounded-3xl md:ml-[100px] lg:ml-[200px] xl:ml-[280px] w-[141px] text-white p-3  bg-[#1B31A8] ">
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
            <div id="googlemap">
              {/* <GoogleMap zoom={10} center={{lat: 44, lng: -80}} className='w-96 h-96'>

              </GoogleMap> */}
            </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
