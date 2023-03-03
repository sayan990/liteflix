import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";

export default function NavBar() {

  return (
    <div className="backdrop-opacity-0 navbar flex ">
  <div className="">
    <a className="ml-32 mt-4 mr-16 normal-case text-4xl text-teal-400" href="a">LITEFLIX</a>
  </div>
  <div className="justify-start">
    <a className="ml-12 mt-4  mr-96 normal-case text-xl text-white " href="a">+ AGREGAR PELICULA</a>
  </div>
  <div className="ml-96 ">
  <div className="">
    <div className="dropdown dropdown-end ml-52">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/4543/4543046.png"  alt="una foto"/>
        </div>
      </label>
    </div>
    <div className="dropdown dropdown-end ml-8">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
      <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/4971/4971550.png"  alt="una foto"/>
        </div>
      </label>
    </div>
    <div className="dropdown dropdown-end ml-8">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/4709/4709876.png"  alt="una foto"/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href="a">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href="a">Settings</a></li>
        <li><a href="a">Logout</a></li>
      </ul>
    </div>
  </div>
  </div>
</div>
  );
}