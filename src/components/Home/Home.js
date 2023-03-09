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
      <div className="flex flex-col justify-start absolute bottom-28 ml-20">
      <h3 className="mt-6 text-start tracking-tight text-white">ORIGINAL DE LITEFLIX</h3>
      <h1 className="text-start text-8xl font-bold tracking-tight text-teal-400">{topMovie[0].title.toUpperCase()}</h1>
      <div className="flex flex-row">
      <div className="mt-4 flex bg-zinc-900 flex-row px-10 py-2">
        <img className="w-4 h-4 mr-2" src="https://cdn-icons-png.flaticon.com/512/9370/9370122.png"  alt="una foto"/>
        <button className=" text-white">REPRODUCIR</button>
      </div>
      <div className="ml-6 mt-4 flex flex-row px-12  backdrop-opacity-20 backdrop-invert bg-black/30">
        <button className=" text-white">+ MI LISTA</button>
      </div>
      </div>
      </div>
      <FilmList/>
    </div>
  );
}