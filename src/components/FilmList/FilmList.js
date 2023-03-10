import React from "react";
import { useEffect, useState} from "react";
import ListCard from "./ListCard";
import { useLocalStorage } from "../useLocalStorage";


export default function FilmList() {

const [topMovies, setTopMovies] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [pelisLocal, setPelisLocal] = useState(localStorage.getItem("mispelis"))
const [ver, setVer] = useState("populares")

const handleSelect = (e) => {
  setVer(e.target.value);
};

useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20")
    .then(res => res.json())
    .then(data => {
        setTopMovies(data.results)
        setIsLoading(false)
       // setBgImg(data.results[0].backdrop_path)
    })
}, [])
  const misPelis = JSON.parse(pelisLocal)
  var popular = topMovies.slice(1, 5)
  
  

  return (
    <div className="relative justify-items-center text-center">
    <div className="flex flex-col items-end mr-32 justify-items-center"> 
      <select className="select select-ghost w-40 max-w-xs " onChange={handleSelect}>
      <option  value="populares">Populares </option>
      <option  value="misPelis">Mis Pelis </option>
      </select>
      {(ver === "populares") && popular.map((m) => {
       return <ListCard movie={m} pelis={ver}/>
      })}
      {(ver === "misPelis" && misPelis) && misPelis.slice(0, 4).map((m) => {
       return <ListCard movie={m} pelis={ver}/>
      })}
      {(ver === "misPelis" && (!misPelis || misPelis.length === 0) ) &&
       <h1 className="justify-items-center text-center text-white text-lg">Aun no haz subido ninguna pelicula</h1>}

    </div>  
    </div>
  );
}