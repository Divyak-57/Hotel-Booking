import React from 'react'
import { assets } from '../assets/assets' 

const Hero = () => {

  const cities = ["New York", "London", "Dubai", "Singapore", "Mumbai"];

  return (
    <div className='flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroImage.jpeg")] bg-no-repeat bg-cover bg-center h-screen'>
        
        {/* Top Badge */}
        <p className='bg-[#49B9FF]/50 text-black font-semibold px-3.5 py-1 rounded-full mt-20'> The Ultimate Hotel Experience</p>
        
        {/* Main Heading */}
        <h1 className='font-playfair text-2xl md:text-5xl md:text-[56px] md:leading-[56px] font-bold md:font-extrabold max-w-xl mt-4'>
            Discover Your Perfect Getaway Destination
        </h1>
        
        <p className='bg-[#49B9FF]/50 text-lg max-w-130 mt-2 text- md:text-base px-3.5 py-1 rounded-full mt-20 font-bold'>
            Unparalleled luxury and comfort await at the world's most exclusive hotels and resort. Start your journey today.
        </p>

        {/* Search Form */}
        <form className='bg-white text-gray-500 rounded-lg px-6 py-4 flex flex-col md:flex-row max-md:items-start gap-4 mt-8'>

            {/* Destination Input */}
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.locationIcon || assets.searchIcon} alt="" className='h-4'/>
                    <label htmlFor="destinationInput">Destination</label>
                </div>
                <input list='destination' id="destinationInput" type="text" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" placeholder="Type here" required />
                <datalist id='destination'> 
                    {cities.map((city, index) => (
                        <option value={city} key={index} />
                    ))}
                </datalist>
            </div>

            {/* Check In */}
            <div>
                <div className='flex items-center gap-2'>
                   <img src={assets.calendarIcon} alt="" className='h-4'/>
                   <label htmlFor="checkIn">Check in</label>
                </div>
                <input id="checkIn" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            {/* Check Out */}
            <div>
                <div className='flex items-center gap-2'>
                    <img src={assets.calendarIcon} alt="" className='h-4'/>
                    <label htmlFor="checkOut">Check out</label>
                </div>
                <input id="checkOut" type="date" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none" />
            </div>

            {/* Guests */}
            <div className='flex flex-col'>
                <label htmlFor="guests">Guests</label>
                <input min={1} max={4} id="guests" type="number" className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none max-w-16" placeholder="0" />
            </div>

            {/* Search Button [00:55:00] */}
            <button className='flex items-center justify-center gap-1 rounded-md bg-black py-3 px-4 text-white my-auto cursor-pointer max-md:w-full' >
               <img src={assets.searchIcon} alt="searchIcon" className='h-5'/>
               <span>Search</span>
            </button>
        </form>
    </div>
  )
}

export default Hero