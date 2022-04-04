import Tmdb from './helpers/apiTmdb'
import { useEffect, useState } from 'react'
import './App.css'

// components
import { MovieRow } from './components/MovieRow/MovieRow'
import { FeaturedMovie } from './components/FeaturedMovie/FeaturedMovie'
import { Header } from './components/Header/Header'

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      //Pegando o featured 
      let originals = list.filter(i => i.slug === 'originals')
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv')
      setFeaturedData(chosenInfo)
    }

    loadAll()
  }, [])

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  })

  return (
    <div className='page'>

      <Header black={blackHeader}/>

      {featuredData && 
        <FeaturedMovie item={featuredData}/>
      }

      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow title={item.title} items={item.items} key={key}/>
        ))}
      </section>

      <footer>
        Feito pelo dev Geovanne Callegaro <br />
        Direitos de Imagem para Netflix <br />
        Dados do site Themoviedb.org
      </footer>

    </div>
  )
}