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
      <div className="text-center justify-center justify-items-center">
      <div className="flex flex-col text-center justify-center justify-items-center">
      <h3 className="mt-72 text-center tracking-tight text-xl text-white">ORIGINAL DE LITEFLIX</h3>
      <h1 className="text-center text-6xl font-bold tracking-tight text-teal-400">{topMovie[0].title.toUpperCase()}</h1>
      </div>
      <div className="flex flex-col bg-gradient-to-t from-zinc-800 mt-5 text-center justify-center justify-items-center">
      <div className=" flex p-5 w-56 ml-24 bg-zinc-800 flex-row text-center justify-center justify-items-center">
        <img className="w-4 h-4 mr-2 mt-1" src="https://cdn-icons-png.flaticon.com/512/9370/9370122.png"  alt="una foto"/>
        <button className=" text-white text-center text-xl">REPRODUCIR</button>
      </div>
      <div className=" flex flex-col p-5 mt-4 w-56 ml-24  backdrop-opacity-20 backdrop-invert bg-zinc-800/30">
        <button className=" text-white text-xl">+ MI LISTA</button>
      </div>
      </div>
      </div>
       <FilmList/>
    </div>
  );
}