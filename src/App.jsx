import Tmdb from './helpers/apiTmdb'
import { useEffect, useState } from 'react'
import './App.css'

// components
import { MovieRow } from './components/MovieRow/MovieRow'
import { FeaturedMovie } from './components/FeaturedMovie/FeaturedMovie'

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o featured 
      let originals = list.filter(item => item.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
    }

    loadAll()
  }, [])

  return (
    <div className='page'>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}/>
        ))}
      </section>
    </div>
  )
}