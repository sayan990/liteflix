import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const pc = window.matchMedia("(min-width: 640px)");

  return (
    <div className="text-center justify-center justify-items-center space-x-16 flex flex-row w-full h-16">
      {!pc.matches && 
      <div className="w-10 h-10 mt-4 bg-white">
      <label tabIndex={0} className="">
        <div className="">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9959/9959272.png"
            alt="plus"
          />
        </div>
      </label>
    </div>}
      <div className="justify-content-center p-5">
        <a className="text-teal-400 text-2xl text-center" href="/">
          LITEFLIX
        </a>
      </div>
      {pc.matches && 
      <div className="">
      <a className="" href="/agregarPelicula">
        + AGREGAR PELICULA
      </a>
    </div>
      }
      
      <div className=" ">
        <div className="">
          {pc.matches && (
            <div className="w-10 h-10">
              <label tabIndex={0} className="">
                <div className="">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4543/4543046.png"
                    alt="tres rayitas"
                  />
                </div>
              </label>
            </div>
          )}

          {pc.matches && (
            <div className="w-10 h-10">
              <label tabIndex={0} className="">
                <div className="">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4971/4971550.png"
                    alt="una campana"
                  />
                </div>
              </label>
            </div>
          )}

          <div className=" ">
            <label tabIndex={0} className="">
              <div className="w-10 h-10 mt-4 bg-white">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4709/4709876.png"
                  alt="una foto"
                />
              </div>
            </label>
            
          </div>
        </div>
      </div>
    </div>
  );
}
