import HeroIMG from '/assets/hero-img.jpg'
import Logo from '/assets/logo.svg'
import Attack from '/assets/attack.jpg'
import DBZ from '/assets/dbz.webp'
import OnePiece from '/assets/onepiece.jpg'
import Solo from '/assets/solo.webp'
import ToBeHero from '/assets/tobehero.webp'
import WaterMagic from '/assets/water.avif'
import Play from '/assets/Play.png'
import Plus from '/assets/PLus.png'
import Info from '/assets/Info.png'
import PlayBlack from '/assets/playblack.png'
import animeCards from '../storeData/animeData.json'
import AnimeCard from '../Components/animeCards'

function Home() {
  return (
    <>
    {/* Nav Bar Start */}
<div className='w-full flex px-8 py-4 justify-between items-center '>
  <div className='flex items-center'>
<img src={Logo} alt="Logo" className='w-[86px]'/>
<p className='text-4xl font-bold hidden lg:block'>Ani<span className='text-red-700'>Flow</span></p>
</div>
<ul className='hidden lg:flex justify-between gap-12 text-xl font-semibold'>
 <a href="/"> <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Home</li></a>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Series</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Movies</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Watch Together</li>
</ul>

<div className='flex justify-between gap-6 font-bold'>
  <button className='cursor-pointer hidden lg:block'>Sign In</button>
  <button className='bg-red-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-red-300'>Sign Up</button>
</div>
      </div>
{/* Nav Bar End */}

{/* Hero Section Start */}
<section className='relative w-full h-screen mb-8'>
<img src={HeroIMG} alt="" className="w-full h-full object-cover opacity-40" />
<div className='absolute top-[5%] left-[5%] lg:top-[25%] mx-6'>
  <h1 className='font-bold lg:text-7xl lg:w-[50%] mb-4 text-6xl'>Kimetsu no Yaiba: Demon Slayer</h1>
  <div className='flex flex-wrap items-center gap-4 mt-3 mb-4'>
    <p className='bg-red-700 py-1 px-3 rounded-[6px] w-[68px]'>TV-14</p>
    <p>2019</p>
    <p>4 Seasons</p>
    <p className='bg-red-700 py-1 px-3 rounded-[6px] w-[68px]'>Action</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] w-[118px]'>Supernatural</p>
    <p className='bg-gray-700 py-1 px-3 rounded-[6px] w-[78px]'>Shonen</p>
  </div>
  <p className='lg:w-[55%] lg:text-2xl'>A young boy becomes a demon slayer to avenge his family and cure his demon sister. Follow Tanjiro's journey through breathtaking battles and emotional storytelling in this critically acclaimed series.</p>
<div className='mt-4 gap-2 lg:flex flex flex-wrap text-[18px] font-bold '>
 <a href="kimetsu"> <button className='bg-red-700 py-4 px-10 rounded-xl text-white mr-3 cursor-pointer flex gap-2  hover:bg-red-300 mb-2'> <img src={Play} alt="play" />Play</button></a>
  <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2 hover:opacity-80'> <img src={Plus} alt="Plus" />My List</button>
  <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2 hover:opacity-80'> <img src={Info} alt="Info" />More Info</button>
</div>
<div className=" flex h-20 gap-3 absolute lg:left-[45%] lg:top-[150%]">
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
  <div className='mx-6 flex gap-8 flex-wrap justify-between'>
    {animeCards.map((anime) => (
      <AnimeCard anime={anime} />
    ))}
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={OnePiece} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={Attack} alt="anime-photo" className='mb-2' />
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={Solo} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 scursor-pointer relative' >
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={DBZ} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={WaterMagic} alt="anime-photo" className='mb-2' />
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={ToBeHero}alt="anime-photo" className='mb-2' />
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={Attack} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={DBZ} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={OnePiece} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={Attack} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={Solo} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={ToBeHero} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={WaterMagic} alt="anime-photo" className='mb-2'/>
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
  <div className='gap-4 flex-row border border-gray-500 rounded-2xl p-2 mb-4 cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
    <img src={HeroIMG} alt="anime-photo" className='mb-2'/>
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

 <div className='mx-6 flex gap-8 flex-wrap'>
    {animeCards.map(({description, image, link, rating, seasons, tags, title, year,}) => (
      <div className={`bg-gray-700 lg:w-[15%] h-[480px] rounded-2xl cursor-pointer relative group overflow-hidden flex flex-col justify-end pb-5`}>
      <a href={link}> 
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
          <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
        </div>
      </a>
      <img src={image} alt="" className="w-full h-full absolute top-0 left-0 object-cover opacity-40 rounded-2xl group-hover:scale-110 transition-transform" /> 
      <div className='relative px-6'>
        <p className='text-3xl font-bold'>{title}</p>
    <div className='flex items-center gap-4 mt-3 mb-4'>
      
        <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>{rating}</p>
        <p>{year}</p>
        <p>{seasons} Seasons</p>
        </div>
        <p>{description}</p>
        <div className='flex gap-1 mt-4'>
          {tags.map((tag, index) => (
            <p className={`${index === 0? "bg-red-700" : "bg-gray-600"} py-1 px-3 rounded-[6px]`}>{tag}</p>
          ))}
        </div>
        </div>
      </div>  
    ))}
  </div>

  
</section>
{/* Recommended Section Ends */}


{/* Footer Section Start */}
<section>
  <div className='flex justify-around py-8'>
    <div>
      <h1 className='font-bold'>Navigation</h1>
      <p className='text-gray-500 cursor-pointer'>Home</p>
      <p className='text-gray-500 cursor-pointer'>Series</p>
      <p className='text-gray-500 cursor-pointer'>Movies</p>
      <p className='text-gray-500 cursor-pointer'>Watch Together</p>
    </div>

    <div>
      <h1 className='font-bold'>Genre</h1>
      <p className='text-gray-500 cursor-pointer'>Action</p>
      <p className='text-gray-500 cursor-pointer'>Romance</p>
      <p className='text-gray-500 cursor-pointer'>Comedy</p>
      <p className='text-gray-500 cursor-pointer'>Thriller</p>
    </div>

    <div>
      <h1 className='font-bold'>Support</h1>
      <p className='text-gray-500 cursor-pointer'>Help Center</p>
      <p className='text-gray-500 cursor-pointer'>Contact Us</p>
      <p className='text-gray-500 cursor-pointer'>Terms of Service</p>
      <p className='text-gray-500 cursor-pointer'>Privacy Policy</p>
    </div>

    <div>
      <h1 className='font-bold'>Account</h1>
      <p className='text-gray-500 cursor-pointer'>My Profile</p>
      <p className='text-gray-500 cursor-pointer'>My List</p>
      <p className='text-gray-500 cursor-pointer'>Account Settings</p>
      <p className='text-gray-500 cursor-pointer'>Sign out</p>
    </div>

  </div>
  <hr className='border-1 border-gray-600'/>
  <div className='text-center text-gray-500 py-4'>
  <p>© 2025 AniFlow. All rights reserved.</p>
  </div>
</section>
{/* Footer Section End */}

</>
  )
}

export default Home

