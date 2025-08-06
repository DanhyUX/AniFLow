import './App.css'
import HeroIMG from './assets/hero-img.jpg'
import Logo from './assets/logo.svg'

function App() {
  return (
    <>
    {/* Nav Bar Start */}
<div className='w-full flex px-8 py-4 justify-between items-center '>
  <div className='flex items-center'>
<img src={Logo} alt="Logo" className='w-[86px]'/>
<p className='text-4xl font-bold'>Ani<span className='text-red-700'>Flow</span></p>
</div>
<ul className='hidden lg:flex justify-between gap-12 text-xl font-semibold'>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Home</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Series</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Movies</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Watch Together</li>
</ul>

<div className='flex justify-between gap-6 font-semi'>
  <button className='cursor-pointer'>Sign In</button>
  <button className='bg-red-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-red-300'>Sign Up</button>
</div>
      </div>
{/* Nav Bar End */}

{/* Hero Section Start */}
<section className='relative w-full h-dvh mb-8'>
<img src={HeroIMG} alt="" className="w-full h-full object-cover opacity-40" />
<div className='absolute top-[5%] left-[5%] lg:top-[25%] mx-6'>
  <h1 className='font-bold lg:text-7xl lg:w-[50%] mb-4 text-6xl'>Generic Anime Name: The Real Anime</h1>
  <div className='lg:flex items-center gap-4 mt-3 mb-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px] w-[68px]'>TV-14</p>
    <p>2019</p>
    <p>4 Seasons</p>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Shonen</p>
  </div>
  <p className='w-[55%]'>A young boy becomes a demon slayer to avenge his family and cure his demon sister. Follow Tanjiro's journey through breathtaking battles and emotional storytelling in this critically acclaimed series.</p>
<div className='mt-4 gap-2 lg:flex  text-[18px] font-bold '>
  <button className='bg-red-700 py-4 px-10 rounded-xl text-white mr-3 cursor-pointer flex gap-2  hover:bg-red-300 mb-2'> <img src="./src/assets/Play.png" alt="play" />Play</button>
  <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2'> <img src="./src/assets/Plus.png" alt="Plus" />My List</button>
  <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2'> <img src="./src/assets/Info.png" alt="Info" />More Info</button>
</div>
<div className=" flex h-20 gap-3 absolute lg:left-[55%] lg:top-[130%]">
  <p className='text-red-700'>●</p>
  <p>●</p>
  <p>●</p>
  <p>●</p>
  <p>●</p>
</div>
</div>
</section>

{/* Hero Section Ends */}

{/* Popular Section Start */}
<section className='relative w-full  mt-8 '>
  <div className='flex justify-between items-center w-[auto] mx-6 mb-4'>
    <h1 className='text-2xl font-bold'>Most Popular</h1>
    <button className='text-white bg-gray-700 opacity-75 py-4 px-6 rounded-xl mr-3 cursor-pointer flex gap-2 hover:bg-white hover:text-black hover:opacity-100'> View All</button>
  </div>
<div className='mx-6 flex gap-10 flex-wrap'>

<div className='bg-gray-700 lg:w-[40%] h-[380px] rounded-2xl cursor-pointer'>
<img src="./src/assets/attack.jpg" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-50%] px-6'><p className='text-3xl font-bold'>Attacks on Titans</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2019</p>
    <p>4 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Survival</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Drama</p>
    </div>
    </div>
  </div>  
  
  <div className='bg-gray-700 lg:w-[30%]  h-[380px] rounded-2xl cursor-pointer'>
  <img src="./src/assets/onepiece.jpg" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>One Piece</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>1999</p>
    <p>14 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
     <div className='flex gap-1 mt-4'>
     <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Adventure</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Shonen</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[25%]   h-[380px] rounded-2xl cursor-pointer'>
  <img src="./src/assets/solo.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>Solo Leveling</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2019</p>
    <p>2 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Adventure</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Shonen</p>
    </div>
    </div>
  </div>  

  <div className=' bg-gray-700 lg:w-[25%]  h-[380px] rounded-2xl cursor-pointer'>
  <img src="./src/assets/tobehero.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>To Be Hero X</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Heroes</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Drama</p>
    </div>
    </div>
  </div> 

  <div className=' bg-gray-700 lg:w-[40%]   h-[380px] rounded-2xl cursor-pointer'>
  <img src="./src/assets/water.avif" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-50%] px-6'><p className='text-3xl font-bold'>The Water Magician</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Magic</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Adventure</p>
    </div>
    </div>
  </div>  

  <div className=' bg-gray-700 lg:w-[30%]   h-[380px] rounded-2xl'>
  <img src="./src/assets/dbz.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>Dragon Ball</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>1986</p>
    <p>6 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Fighting</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Adventure</p>
    </div>
    </div>
  </div> 
  </div>

  
</section>
{/* Popular Section Ends */}

{/* Release Section Start */}
<section className='relative w-full  mt-8'>
<div className='flex justify-between items-center w-[auto] mx-6 mb-4'>
  <div>
    <h1 className='text-2xl font-bold'>Release Schedule</h1>
    <p className='text-gray-500'>Never miss your favorite anime episodes</p>
    </div>
    <button className='text-white bg-gray-700 opacity-75 py-4 px-6 rounded-xl mr-3 cursor-pointer flex gap-2 hover:bg-white hover:text-black hover:opacity-100'> View All</button>
  </div>
<div className='flex flex-wrap justify-between mx-6 gap-3'>
  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Sunday</p>
    <p className='text-gray-400'>August 3rd</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2' />
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>

  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Monday</p>
    <p className='text-gray-400'>August 4th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 scursor-pointer' >
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>

  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl border-2 border-red-700 '>
  <div className='flex-row text-center mb-2 item'>
  <p className='text-xl font-bold bg-red-700 py-2 px-3 rounded-xl'>TODAY</p>
    <p className='text-xl font-bold'>Tuesday</p>
    <p className='text-gray-400'>August 5th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2' />
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2' />
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>

  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Wednesday</p>
    <p className='text-gray-400'>August 6th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>

  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Thursday</p>
    <p className='text-gray-400'>August 7th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>
  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Friday</p>
    <p className='text-gray-400'>August 8th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>
  <div className='gap-3 mr-2 lg:w-[240px] flex-row justify-center items-center bg-gray-800 py-4 px-4 rounded-2xl'>
  <div className='flex-row text-center mb-2 item'>
    <p className='text-xl font-bold'>Saturday</p>
    <p className='text-gray-400'>August 9th</p>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer'>
    <img src="./src/assets/onepiece.jpg" alt="anime-photo" className='mb-2'/>
    <div className='flex-row gap-2'>
     <div className='flex gap-2 justify-between items-center'> 
    <p className='bg-red-700 py-1 px-2 rounded-[6px]'>NEW</p>
    <p>Episode 9</p>
    </div>
    <div className='flex gap-2 mt-4 justify-between items-center'>
    <p className='bg-gray-500 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>11:00AM</p>
    
    </div>
    </div>
  </div>
    
  </div>

  </div>
</section>
{/* Release Section Ends */}


{/* Recommended Section Start */}
<section className='relative w-full mb-8 mt-8'>
  <div className='flex justify-between items-center w-[auto] mx-6 mb-4'>
    <h1 className='text-2xl font-bold'>Our Recommendation</h1>
    <button className='text-white bg-gray-700 opacity-75 py-4 px-6 rounded-xl mr-3 cursor-pointer flex gap-2 hover:bg-white hover:text-black hover:opacity-100'> View All</button>
  </div>
<div className='mx-6 flex gap-8.5 flex-wrap'>

<div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/attack.jpg" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-60%] px-6'><p className='text-3xl font-bold'>Attacks on Titans</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2019</p>
    <p>4 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  
  
<div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/onepiece.jpg" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>One Piece</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>1999</p>
    <p>16 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/dbz.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>Dragon Ball</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>1986</p>
    <p>6 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/tobehero.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>To Be Hero X</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/solo.webp" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-55%] px-6'><p className='text-3xl font-bold'>Solo Leveling</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2023</p>
    <p>2 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[500px] rounded-2xl cursor-pointer'>
<img src="./src/assets/water.avif" alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-60%] px-6'><p className='text-3xl font-bold'>The Water Magician</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
    <p>Humanity fights for survival against giant humanoid titans in this epic tale of war and survival</p>
    <div className='flex gap-1 mt-4'>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] text-[12px]'>Historical</p>
    </div>
    </div>
  </div>  

  
  
  </div>

  
</section>
{/* Recommended Section Ends */}


</>
  )
}

export default App

