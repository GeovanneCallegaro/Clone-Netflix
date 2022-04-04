import Tmdb from './helpers/apiTmdb'
import { useEffect, useState } from 'react'

// components
import { MovieRow } from './components/MovieRow'

export default function App() {

  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)
    }

    loadAll()
  }, [])

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}/>
        ))}
      </section>
    </div>
  )
}