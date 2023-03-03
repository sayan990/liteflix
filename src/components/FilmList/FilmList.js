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




  return (
    <div >
      {topMovies && topMovies.map((m) => {
        <ListCard movie={m}/>
      })}
    </div>
  );
}