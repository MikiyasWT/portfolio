import { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components';
import {MovieState} from '../movieState'
import {motion} from "framer-motion"
import {animation} from "../animation"

const MovieDetail = () => {
 const location = useLocation();
 const url = location.pathname;
 const [movies,setMovies] = useState(MovieState)
 const [movie,setMovie] = useState(null)
 useEffect(()=>{
    const currentMovie = movies.filter((movie) => movie.url === url)
    setMovie(currentMovie[0])
 },[movies,movie])

    return(
        <>
        {
            movie && (
            <Detail
            variants={animation}
            initial="hidden"
            animate="show"
            exit="exit"
            >
                <Headline>
                   <h2>{movie.title}</h2>
                   <img src={movie.mainImg} alt="movie" />
               </Headline>
               <Awards>
                 {movie.awards.map((award,index) => (
                    <Award title={award.title} description={award.description} key={index}/>
                 ))}
               </Awards>
               <ImageDisplay>
                 <img src={movie.secondaryImg} alt=""/>
               </ImageDisplay>
              </Detail>
            )
        }
        </>
 
    )
}


export default MovieDetail;

const Detail = styled(motion.div)`
color:white;
`;

const Headline = styled.div`
min-height:90vh;
padding-top:20vh;
position:relative;

h2 {
    position:absolute;
    top:10%;
    left:50%;
    transform:translate(-50%,-10%);
}


img {
    width:100%;
    height:70vh;
    object-fit:cover;
}

@media (max-width:1500px) {
    h2 {
        padding-bottom:10rem;
        font-size:3rem;

    }

    img {
        margin-top:4rem;
    }
}
`;

const Awards = styled.div`
min-height:80vh;
display:flex;
margin:5rem 10rem;
align-items:center;
justify-content:space-around;


@media (max-width:1300px) {
    display:flex;
    flex-direction:column;
    margin:5rem 2rem;

    
}

`;

const AwardStyle = styled.div`
padding:5rem;
h2 {
    font-size:2rem;
}

.line {
    width:100%;
    background:#23d997;
    height:0.5rem;
    margin:1rem 0rem;
}

p{
    padding:2rem 0rem;
}


`;


const ImageDisplay = styled.div`
min-height:50vh;

img {
    width:100%;
    height:100vh;
    object-fit:cover;
}
`;


const Award = ({title,description}) =>{

    return(
        <AwardStyle>
            <h3>{title}</h3>
            <div className='line'>
              <p>{description}</p>
            </div>
        </AwardStyle>
    )
}