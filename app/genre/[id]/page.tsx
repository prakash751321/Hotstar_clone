import MoviesCarousel from '@/components/MoviesCarousel'
import { getDiscoverMovies } from '@/lib/getMovies'
import React from 'react'


interface Props  {        //  type or interface is same
    params : {
        id : string
    }
    searchParams: {
        genre : string
    }
}

          //  FOR GENRE DROPDOWN PAGE   //

async function GenrePage({ params: {id}, searchParams: {genre}} : Props) {

  const movies = await getDiscoverMovies(id)

  return (
    <div className='max-w-7xl mx-auto'>

      {/* //  Azure OPENAI Service Suggestion  // */}

      <div className='flex flex-col space-y-4 mt-32 xl:mt-32'>
        <h1 className='text-6xl font-bold px-10'>
          Results for {genre}
        </h1>
        <MoviesCarousel title={`Genre`} movies={movies} isVertical/>
      </div>
    </div>

  )
}

export default GenrePage