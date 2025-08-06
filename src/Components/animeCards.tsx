import PlayBlack from '/assets/playblack.png'

type Anime = {
    size: string
    link: string
    image: string
    title: string
    rating: string
    year: number
    seasons: number
    description: string
    tags: string[]
}

function AnimeCard({anime}:{anime: Anime}) {
    const {size, link, image, title, rating, year, seasons, description, tags } = anime
    return (
        <div className={`bg-gray-700 lg:w-[${size}] h-[380px] rounded-2xl cursor-pointer relative group overflow-hidden flex flex-col justify-end pb-5`}>
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
    )  
}

export default AnimeCard