import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";

export default function AddMovie() {
  const [url, setUrl] = useState("");
  const [titulo, setTitulo] = useState("");
  const [misPelis, setMisPelis] = useLocalStorage("mispelis", []);
  const [loading, setLoading] = useState(false);
  const [upload, setUpload] = useState(false);

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (event) => {
    const files = event.target.files;
    console.log(files.length);
    const base64 = await convertBase64(files[0]);
    setUrl(base64);
  };

  function handleInputChange(e) {
    e.preventDefault();
    setTitulo(e.target.value);
  }

  const handleSubmit = (e) => {
    if (!url || !titulo) {
      return alert("Porfavor completar todos los datos :) ");
    }
    e.preventDefault();
    setLoading(true);
    let peli = [titulo, url];
    let aux = JSON.parse(misPelis)
    setMisPelis([...aux, peli]);
    setTimeout(() => {
      setLoading(false);
      setUpload(true)
    }, 5000);
  };

  console.log(titulo);
  console.log(url);

  if(loading){
    return(
      <div className="bg-zinc-800 w-screen h-screen absolute">
      <div className=" ">
        <h1 className="mt-6 text-center text-3xl font-medium tracking-tight text-teal-400">
          AGREGAR PELÍCULA
        </h1>
      </div>
        <h3 className="text-white text-xl text-left mt-20 mb-4 font-bold ml-36">
            100% CARGANDO 
          </h3>
        <div className="bg-teal-400 mx-36 py-4 flex flex-row justify-items-center justify-center">
          
        </div>
        <h3 className="text-teal-400 text-lg text-right  mt-4  mr-36 tracking-wider">
            ¡LISTO!
          </h3>
      
      <div className="flex justify-items-center justify-center  mt-12 text-xl text-white">
        <input
          value={titulo}
          
          placeholder="TÍTULO"
          className="border-b-4 bg-zinc-800 text-xl text-white text-center h-16 w-96"
        ></input>
      </div>
      <div className="flex justify-items-center justify-center mt-28">
        <button
          
          className="bg-white text-xl p-8 text-black px-28"
        >
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
    )
  }

  if (upload) {
    return (
      <div className="bg-zinc-800 w-screen h-screen absolute">
      <div className=" ">
        <h1 className=" text-center text-5xl font-medium tracking-tight text-teal-400 mt-14">
        LITEFLIX
        </h1>
      </div>
        <h3 className="text-white text-2xl text-center font-bold mt-24">
          ¡FELICITACIONES!
          </h3>
        <h3 className="text-white text-lg text-center tracking-wider mt-16">
          {`${titulo.toUpperCase()} FUE CORRECTAMENTE SUBIDA`}
          </h3>
      

      <div className="flex justify-items-center justify-center mt-28">
        <a
          href="/"
          className="bg-white text-xl p-6 text-black px-28"
        >
          IR A HOME
        </a>
      </div>
    </div>
    );
  }

  return (
    <div className="bg-zinc-800 w-screen h-screen absolute">
      <div className="flex mr-32 justify-end  text-xl w-auto h-auto text-white">
      <a href="/" className="text-white text-right text-xl mt-4">X</a>
      </div>
      <div className=" ">
        <h1 className="mt-6 text-center text-3xl font-medium tracking-tight text-teal-400">
          AGREGAR PELÍCULA
        </h1>
      </div>
      <label htmlFor="dropzone-file" className="cursor-pointer">
        <div className="border-dashed mt-28 border-2 border-white mx-80 py-10 flex flex-row justify-items-center justify-center">
          <img
            className="w-6 h-6 justify-center mr-2"
            src="https://cdn-icons-png.flaticon.com/512/3413/3413213.png"
            alt="una foto"
          />
          <h3 className="text-white text-xl text-center">
            AGREGÁ UN ARCHIVO O ARRASTRALO Y SOLTALO AQUÍ
          </h3>
        </div>
        <input
          onChange={uploadImage}
          id="dropzone-file"
          type="file"
          className="hidden bg-white w-screen h-screen"
          multiple
        />
      </label>
      <div className="flex justify-items-center justify-center  mt-12 text-xl text-white">
        <input
          value={titulo}
          onChange={(e) => handleInputChange(e)}
          placeholder="TÍTULO"
          className="border-b-4 bg-zinc-800 text-xl text-white text-center h-16 w-96"
        ></input>
      </div>
      <div className="flex justify-items-center justify-center mt-24">
        {(titulo && url) && <button
           onClick={(e) => handleSubmit(e)}
          className="bg-white text-xl p-6 text-black px-28"
        >
          SUBIR PELÍCULA
        </button>}
        {(!titulo && !url) && <button
        
        className="bg-zinc-500 text-xl p-6 text-black px-28"
      >
        SUBIR PELÍCULA
      </button>}
      {(!titulo && url) && <button
        
        className="bg-zinc-500 text-xl p-6 text-black px-28"
      >
        SUBIR PELÍCULA
      </button>}
      {(titulo && !url) && <button
        
        className="bg-zinc-500 text-xl p-6 text-black px-28"
      >
        SUBIR PELÍCULA
      </button>}
        
      </div>
    </div>
  );
}
