import OnePiece from '../assets/hero-img.jpg'
import Play from '../assets/Play.png'
import Plus from '../assets/PLus.png'
import Share from '../assets/share.png'
import Users from '../assets/users.png'
import Attack from '../assets/attack.jpg'
import DBZ from '../assets/dbz.webp'
import Solo from '../assets/solo.webp'
import ToBeHero from '../assets/tobehero.webp'
import WaterMagic from '../assets/water.avif'
import PlayBlack from '../assets/playblack.png'
import HeroIMG from '../assets/hero-img.jpg'
import Back from '../assets/chevronback.png'
import Logo from '../assets/logo.svg'

function DemonSlayer() {
  return (
    <>
 {/* Nav Bar Start */}
 
<div className='w-full flex px-8 py-4 justify-between items-center '>
  <div className='flex items-center'>
<a href="/"><img src={Logo} alt="Logo" className='w-[86px]'/></a>
<p className='text-4xl font-bold'>Ani<span className='text-red-700'>Flow</span></p>
</div>
<ul className='hidden lg:flex justify-between gap-12 text-xl font-semibold'>
 <a href="/"> <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Home</li></a>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Series</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Movies</li>
  <li className='cursor-pointer hover:bg-gray-800  bg-transparent px-4 py-2 rounded-xl'>Watch Together</li>
</ul>

<div className='flex justify-between gap-6 font-bold'>
  <button className='cursor-pointer'>Sign In</button>
  <button className='bg-red-700 py-4 px-8 rounded-xl text-white cursor-pointer hover:bg-red-300'>Sign Up</button>
</div>
      </div>
{/* Nav Bar End */}

 {/* Hero Section Start */}
 <section className='relative w-full h-dvh mb-8'>
  <img src={OnePiece} alt="" className="w-full h-full object-cover opacity-30" />
  <div className='absolute top-[5%] left-[5%] lg:top-[5%] mx-6 bg-red-700 rounded-[100%]'>
  <a href="/"><img src={Back} alt="" className='py-2 px-2 '/></a>

  </div>
  <div className='absolute top-[5%] left-[5%] lg:top-[25%] mx-6'>
  <div className='flex flex-wrap items-center gap-4 mt-3 mb-4'>
      <p className='bg-red-700 py-1 px-3 rounded-[6px] w-[68px]'>TV-14</p>
      <p>1999</p>
      <p>1100+ Episodes</p>
      <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Ongoing</p>
        </div>
    <h1 className='font-bold lg:text-7xl lg:w-[50%] mb-4 text-6xl'>Kimetsu No Yaiba: Demon Slayer</h1>
    <div className='lg:flex items-center gap-4 mt-3 mb-4'>
      <p>⭐9.1</p>
      <p className='text-gray-300 flex items-center gap-1'> <img src={Users} alt="users" />96% Popularity</p>
        </div>

   
    <p className='lg:w-[55%] lg:text-2xl'>Demon Slayer," also known as "Kimetsu no Yaiba," tells the story of Tanjiro Kamado, a young boy whose life is shattered when his family is brutally murdered by demons, with only his sister Nezuko surviving, but transformed into a demon herself. Driven by a desire to avenge his family and find a cure for Nezuko, Tanjiro embarks on a perilous journey to become a demon slayer.</p>
  <div className='flex flex-wrap items-center gap-4 mt-3 mb-4  '>
      
      <p className='bg-red-700 py-1 px-3 rounded-[6px]' >Action</p>
      <p className='bg-gray-700 py-1 px-3 rounded-[6px] '>Adventure</p>
      <p className='bg-gray-700 py-1 px-3 rounded-[6px] '>Shounen</p>
      <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Drama</p>
      <p className='bg-gray-700 py-1 px-3 rounded-[6px]'>Comedy</p>
    </div>
  <div className='mt-4 gap-2 lg:flex  text-[18px] font-bold '>
    <button className='bg-red-700 py-4 px-10 rounded-xl text-white mr-3 cursor-pointer flex gap-2  hover:bg-red-300 mb-2'> <img src={Play} alt="play" />Play</button>
    <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2 hover:opacity-80'> <img src={Plus} alt="Plus" />My List</button>
    <button className='bg-white py-4 px-10 text-black rounded-xl mr-3 cursor-pointer flex gap-2 mb-2 hover:opacity-80'> <img src={Share} alt="Info" width={24}/>Share</button>
  </div>

  </div>
  </section>
  {/* Hero Section Ends */}

   {/* Episodes Section Start */}
<section className='px-8'>
<div className='flex items-center gap-4'>
  <p className='font-bold'>Episodes:</p>
  <select name="episodes" id="dropdown" className='px-4 py-2  bg-gray-300 text-black rounded-[6px]'>
    <option value="text">1 - 24</option>
    <option value="text">25 - 48</option>
    <option value="text">49 - 72</option>
    <option value="text">73 - 96</option>
  </select>
</div>
 <div className='flex flex-wrap mt-10 gap-3'>
<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 1:</span>  I'm Luffy! The Man Who's Gonna Be King of the Pirates!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'> Episode 2:</span>  Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 3:</span>  Morgan vs. Luffy! Who's the Mysterious Pretty Girl?  </p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 4:</span>  Luffy's Past! Enter Red-Haired Shanks!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 5:</span>  Fear, Mysterious Power! Pirate Clown Captain Buggy!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 6:</span>  Desperate Situation! Beast Tamer Mohji vs. Luffy!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 7: </span> Epic Showdown! Swordsman Zoro vs. Acrobat Cabaji!</p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 8:</span>  Who Will Win? Showdown Between the True Powers of the Devil!  </p>
</div>

<div className='relative cursor-pointer  hover:opacity-80' >
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-88 font-bold mt-2'><span className='text-gray-400'>Episode 9:</span> The Honorable Liar? Captain Usopp  </p>
</div>

<div className='relative cursor-pointer  hover:opacity-80'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
  <img src={OnePiece} alt="card" className='w-88 rounded-2xl'/>
  <p className='w-84 font-bold mt-2'><span className='text-gray-400'>Episode 10:</span> The Weirdest Guy Ever! Jango the Hypnotist!</p>
</div>

 </div>


</section>
 {/* Episodes Section Ends */}

 {/* Releated Section Start */}
 <section className='relative w-full mb-8 mt-8'>
  <div className='flex justify-between items-center w-[auto] mx-6 mb-4'>
    <h1 className='text-2xl font-bold'>Related Animes</h1>
    <button className='text-white bg-gray-700 opacity-75 py-4 px-6 rounded-xl mr-3 cursor-pointer flex gap-2 hover:bg-white hover:text-black hover:opacity-100'> View All</button>
  </div>
<div className='mx-6 flex gap-8.5 flex-wrap'>

<div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative '>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
 <a href="attack">   <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' /></a>
  </div>
  
<img src={Attack} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>Attacks on Titans</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2019</p>
    <p>4 Seasons</p>
    </div>
   
    </div>
  </div>  
  
<div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative'>
<div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
<img src={HeroIMG} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>Kimetsu No Yaiba</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2019</p>
    <p>3 Seasons</p>
    </div>
    
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
<img src={DBZ} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>Dragon Ball</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>1986</p>
    <p>6 Seasons</p>
    </div>
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
<img src={ToBeHero} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>To Be Hero X</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
   
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
<img src={Solo} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>Solo Leveling</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2023</p>
    <p>2 Seasons</p>
    </div>
  
    </div>
  </div>  

  <div className='bg-gray-700 lg:w-[15%] h-[250px] rounded-2xl cursor-pointer relative'>
  <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-10 opacity-0 hover:opacity-100 transition-opacity">
    <img src={PlayBlack} alt="Play" className='py-4 px-4 bg-white rounded-[100%]' />
  </div>
<img src={WaterMagic} alt="" className="w-full h-full  object-cover opacity-40 rounded-2xl" /> 
  <div className='relative top-[-40%] px-6'><p className='text-xl font-bold'>The Water Magician</p>
<div className='flex items-center gap-4 mt-3 mb-4'>
  
    <p className='bg-gray-600 py-1 px-3 rounded-[6px] '>TV-14</p>
    <p>2025</p>
    <p>1 Seasons</p>
    </div>
  
    </div>
  </div>  

  
  
  </div>

  
</section>

  {/* Releated Section Ends */}

</>
  )
}

export default DemonSlayer