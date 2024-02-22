import React from 'react'

export default function Hero() {
  return (
    <>
      <a href='/docs/' className="bg-gray-950 flex h-[50vh] items-center justify-center antialiased font-sans">
        <span className="group relative inline-block overflow-hidden rounded-full p-px">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(#f388e4,#7000ff_25%,#58d2f2_50%,#055edb_75%,#f88fe9_100%)] opacity-75"></span>
          <div className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-pink-600 opacity-10 blur transition-all duration-1000 group-hover:opacity-100"></div>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950/80 px-3 py-1 text-sm font-medium leading-5 text-white/90 backdrop-blur-md">Docs pages</span>
        </span>
      </a>

      <a href='/docs/' className="bg-white flex h-[50vh] items-center justify-center antialiased font-sans">
        <span className="group relative inline-block overflow-hidden rounded-full p-px shadow-md">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(#f388e4,#7000ff_25%,#58d2f2_50%,#055edb_75%,#f88fe9_100%)] opacity-75"></span>
          <div className="pointer-events-none absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-pink-600 opacity-10 blur transition-all duration-1000 group-hover:opacity-100"></div>
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white/95 px-3 py-1 text-sm font-medium leading-5 text-gray-700 backdrop-blur-md">Docs pages</span>
        </span>
      </a></>

  )
}
