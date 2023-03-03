import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import NavBar from "../NavBar/NavBar";
import FilmList from "../FilmList/FilmList";

export default function Home() {

const [topMovie, setTopMovie] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [bgImg, setBgImg] = useState("")


useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20")
    .then(res => res.json())
    .then(data => {
        setTopMovie(data.results)
        setIsLoading(false)
        setBgImg(data.results[0].backdrop_path)
    })
}, [])



if(isLoading){
    return(
      
        <div className="App">
          <NavBar/>
        <h1>Cargando...</h1>
      </div>
    )
}

  return (
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${bgImg})`}} 
    className={`justify-center  bg-no-repeat bg-cover bg-center h-screen w-screen`} >
      <NavBar/>
      <FilmList/>
    </div>
  );
}