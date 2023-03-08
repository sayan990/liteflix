import React, { useState } from "react";
import {useLocalStorage} from "../useLocalStorage"

export default function AddMovie() {
  const [url, setUrl] = useState("");
  const [titulo, setTitulo] = useState(""); 
  const [misPelis, setMisPelis] = useLocalStorage("mispelis", [])

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

  function handleInputChange(e){
    e.preventDefault()
    setTitulo(e.target.value);
}

 const handleSubmit = (e) => {
    if (!url || !titulo) {
        return alert("me faltan datos ")
    }
    e.preventDefault();
    let peli = [titulo, url]
    setMisPelis([...misPelis, peli])
    //localStorage.setItem("0", JSON.stringify(peli))
   
  } 

  console.log(titulo)
  console.log(url)

  return (
    <div className="bg-zinc-800 w-screen h-screen absolute">
      <div className=" ">
        <h1 className="mt-8 text-center text-3xl font-medium tracking-tight text-teal-400">
          AGREGAR PELÍCULA
        </h1>
      </div>
      <label htmlFor="dropzone-file" className="cursor-pointer">
      <div className="border-dashed mt-32 border-2 border-white mx-80 py-10 flex flex-row justify-items-center justify-center">
        
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
      <div className="flex justify-items-center justify-center  mt-16 text-xl text-white">
        <input
          value={titulo}
          onChange={(e) => handleInputChange(e)}
          placeholder="TÍTULO"
          className="border-b-4 bg-zinc-800 text-xl text-white text-center h-16 w-96"
        ></input>
      </div>
      <div className="flex justify-items-center justify-center mt-32">
        <button onClick={(e) => handleSubmit(e)} className="bg-zinc-500 text-xl p-8 text-black px-28">
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
  );
}
