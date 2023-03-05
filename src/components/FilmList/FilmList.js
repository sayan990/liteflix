import React from "react";
import { useEffect, useState} from "react";
import ListCard from "./ListCard";


export default function FilmList() {

const [topMovies, setTopMovies] = useState([])
const [isLoading, setIsLoading] = useState(true)
const [bgImg, setBgImg] = useState("")


useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20")
    .then(res => res.json())
    .then(data => {
        setTopMovies(data.results)
        setIsLoading(false)
       // setBgImg(data.results[0].backdrop_path)
    })
}, [])

  var popular = topMovies.slice(1, 5)


  return (
    <div className="relative justify-items-center mt-16">
    <div className="flex flex-col items-end mr-32 justify-items-center"> 
      <select className="select select-ghost w-56 max-w-xs ">
      <option disabled selected>VER : </option>
      <option>Svelte</option>
      </select>
      {topMovies && popular.map((m) => {
       return <ListCard movie={m}/>
      })}
    </div>
    </div>
  );
}