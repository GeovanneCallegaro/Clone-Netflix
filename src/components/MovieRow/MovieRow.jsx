import './MovieRow.css'
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'
import { useState } from 'react'

export const MovieRow = ({title, items}) => {
    const [scrollX, setScrollX] = useState(0)

    const handleLeftArrow = () => {
        let valueScroll = scrollX + Math.round(window.innerWidth / 2);
        if(valueScroll > 0) {
            valueScroll = 0
        }
        setScrollX(valueScroll)
    }

    const handleRightArrow = () => {
        let valueScroll = scrollX - Math.round(window.innerWidth / 2);
        let listWidth = items.results.length * 150
        if((window.innerWidth - listWidth) > valueScroll) {
            valueScroll = (window.innerWidth - listWidth) - 60
        }
        setScrollX(valueScroll)
    }

    return (
        <div className='movieRow'>
            <h2>{title}</h2>
            <div className='movieRow--left' onClick={handleLeftArrow}>
                <MdKeyboardArrowLeft style={{
                    fontSize: 50
                }}/>
            </div>
            <div className='movieRow--right' onClick={handleRightArrow}>
                <MdKeyboardArrowRight style={{
                    fontSize: 50
                }}/>
            </div>
            <div className='movieRow--listarea'>
                <div className='movieRow--list' style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className='movieRow--item'>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}></img>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}