import React from "react";



export default function ListCard(movie) {
    

    if (movie.pelis === "misPelis") {
      return(
        <div className="my-2 ">
    <div style={{ backgroundImage: `url(${movie.movie[1]})`}} 
    className={`justify-center  bg-no-repeat bg-cover bg-center  h-28 w-36 rounded relative place-content-around text-center`} >
      <div style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/482/482059.png)`}} 
    className="flex ml-14 absolute top-10 h-8 w-8 bg-no-repeat bg-cover bg-center" >      
      </div>

      <h4 className="text-white text-center absolute bottom-1 place-content-around text-sm">{movie.movie[0]}</h4>
    </div>
    </div>

      
      )
    }
  
  return (
    <div className="my-2 ">
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.movie.backdrop_path})`}} 
    className={`justify-center  bg-no-repeat bg-cover bg-center  h-28 w-36 rounded relative place-content-around text-center`} >
      <div style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/482/482059.png)`}} 
    className="flex ml-14 absolute top-10 h-8 w-8 bg-no-repeat bg-cover bg-center" >      
      </div>


     <h4 className="text-white text-center absolute bottom-1 place-content-around text-sm">{movie.movie.title.toUpperCase()}</h4>
    </div>
    </div>
  );
}