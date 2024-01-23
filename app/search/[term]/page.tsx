import MoviesCarousel from '@/components/MoviesCarousel'
import { getPopularMovies, getSearchedMovies } from '@/lib/getMovies'
import { notFound } from 'next/navigation'
import React from 'react'

type Props = {
    params: {
        term: string
    }
}

            //  FOR SEARCH PAGE    //

async function SearchPage({params: {term}} : Props) {
   
    if(!term) notFound()        //  if after search their is no /
    
    const termToUse = decodeURI(term)

    const movies = await getSearchedMovies(termToUse)
    const popularMovies = await getPopularMovies()

    return (
    <div className='max-w-7xl mx-auto'>
       <div className='flex flex-col space-y-4 mt-32 xl:mt-32'>
        <h1 className='text-6xl font-bold px-10'>Results for {termToUse}</h1>

                {/* AI Suggestion */}

        <MoviesCarousel title='Movies' movies={movies} isVertical />
        <MoviesCarousel title='You may also like :)' movies={popularMovies} />
       </div>
    </div>
  )
}

export default SearchPage