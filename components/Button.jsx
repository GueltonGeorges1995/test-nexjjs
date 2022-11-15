import React from 'react';

export default function Button() {
  return (
    <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-white group-hover:text-white">See the list</span>
    </button>
  )
}
