import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 pt-40 noto-sans-sogdian-regular">
      <h1 className="text-4xl font-bold text-gray-900 mb-16">The Developers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-gray-100 rounded-lg">
          <a href="https://github.com/KenCab123">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Kenneth Cabral GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center text-gray-900">Kenneth Cabral</h2>
          <p className="text-center mt-2 text-gray-700">Bronx</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-gray-100 rounded-lg">
          <a href="https://github.com/JenniferPeterson1203">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Jennifer Peterson GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center text-gray-900">Jennifer Peterson</h2>
          <p className="text-center mt-2 text-gray-700">Bronx</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-gray-100 rounded-lg">
          <a href="https://github.com/iris-beckham">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Iris Beckham GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center text-gray-900">Iris Beckham</h2>
          <p className="text-center mt-2 text-gray-700">Queens</p>
        </div>
        <div className="developer-card transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 bg-gray-100 rounded-lg">
          <a href="https://github.com/haiyahperez">
            <img
              className="w-20 h-20 mx-auto"
              src="https://res.cloudinary.com/dhexjuuzd/image/upload/v1711574507/Data%20seed%20class/github-mark_edqyun.png"
              alt="Haiyah Perez GitHub"
            />
          </a>
          <h2 className="text-xl font-semibold mt-4 text-center text-gray-900">Haiyah Perez</h2>
          <p className="text-center mt-2 text-gray-700">Queens</p>
        </div>
      </div>
    </div>
  );
}
