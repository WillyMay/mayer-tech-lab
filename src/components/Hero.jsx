import React from "react";
import Navbar from "./Navbar";

function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://i.postimg.cc/kMvFRGJQ/hero-image.webp"
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center animate-fade-up p-4">
        <h1 className="text-6xl font-bold leading-tight mb-4 px-10 lg:text-8xl drop-shadow-sm	text-blue-500 oswald-font uppercase">
          El mejor sitio web
        </h1>
        <h2 className="text-4xl text-gray-100 mb-8 px-10 font-bold">
          para cumplir tus metas.
        </h2>
        <h3 className="text-2xl font-semibold px-10">
          ¡Consigue el mejor sitio web para tu emprendimiento en el menor precio
          y tiempo posible!
        </h3>
        <a
          href="https://wa.link/5q8myl"
          className="bg-blue-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-10"
        >
          Get Started
        </a>
      </div>
    </div>
  );
}

export default Hero;
