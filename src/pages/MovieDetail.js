import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import {MovieState} from '../movieState'

const MovieDetail = () => {
 const location = useLocation();
 console.log(location.pathname)
 const [movies,setMovies] = useState(MovieState)
 const [movie,setMovie] = useState(null)
 useEffect(()=>{
    
 },[])

    return(
        <div>
           <h1>movie detail</h1>
        </div>
    )
}


export default MovieDetail;