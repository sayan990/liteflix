import React from "react";



export default function ListCard(movie) {
    console.log(movie.movie.title)

    if (!movie.movie) {
        <div >
     cargando..
    </div>
    }

  return (
    <div className="my-2 ">
    <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.movie.backdrop_path})`}} 
    className={`justify-center  bg-no-repeat bg-cover bg-center  h-36 w-48 rounded relative place-content-around text-center`} >
      <div style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/482/482059.png)`}} 
    className="flex ml-16 absolute top-10 h-12 w-12 bg-no-repeat bg-cover bg-center" >      
      </div>


     <h2 className="text-white text-center absolute bottom-1 place-content-around">{movie.movie.title.toUpperCase()}</h2>
    </div>
    </div>
  );
}