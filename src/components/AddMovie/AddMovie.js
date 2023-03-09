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

  if(upload){
    return(
      <div className="bg-zinc-800 w-screen h-screen absolute">
      <div className=" ">
        <h1 className="mt-6 text-center text-3xl font-medium tracking-tight text-teal-400">
          AGREGAR PELÍCULA
        </h1>
      </div>
      <label htmlFor="dropzone-file" className="cursor-pointer">
        <div className="border-dashed mt-28 border-2 border-white mx-80 py-10 flex flex-row justify-items-center justify-center">
          <h3 className="text-white text-xl text-center">
            100% 
          </h3>
        </div>

      </label>
      <div className="flex justify-items-center justify-center  mt-12 text-xl text-white">
        <input
          value={titulo}
          
          placeholder="TÍTULO"
          className="border-b-4 bg-zinc-800 text-xl text-white text-center h-16 w-96"
        ></input>
      </div>
      <div className="flex justify-items-center justify-center mt-32">
        <button
          
          className="bg-zinc-500 text-xl p-8 text-black px-28"
        >
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
    )
  }

  if (loading) {
    return (
      <div>
        <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          Converting your image:
        </h2>
        <ul class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
          <li class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Upload your file to our website
          </li>
          <li class="flex items-center">
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            Choose your file format
          </li>
          <li class="flex items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            Preparing your file
          </li>
        </ul>
      </div>
    );
  }

  return (
    <div className="bg-zinc-800 w-screen h-screen absolute">
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
      <div className="flex justify-items-center justify-center mt-32">
        <button
          onClick={(e) => handleSubmit(e)}
          className="bg-zinc-500 text-xl p-8 text-black px-28"
        >
          SUBIR PELÍCULA
        </button>
      </div>
    </div>
  );
}
