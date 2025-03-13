"use client"

import { ArrowDownIcon } from "lucide-react"

export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center relative rounded-3xl overflow-hidden"
    >
      {/* Fondo con gradiente y patrón */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#634647] to-[#8a5a5c] opacity-95 z-0">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ddad81' fillOpacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#ddad81]/10 rounded-full blur-xl z-0"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#ddad81]/20 rounded-full blur-xl z-0"></div>

      {/* Contenido */}
      <div className="relative z-10 px-6 py-12 backdrop-blur-sm rounded-3xl max-w-4xl mx-auto">
        <div className="relative w-48 h-48 mb-8 mx-auto overflow-hidden rounded-full border-4 border-[#ddad81] shadow-[0_0_25px_rgba(221,173,129,0.3)]">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/karla.jpg-Z0FHaTH0kvkfTGdqwWmGfhIN70UDfl.jpeg"
            alt="Karla Tatiana Brenes Campos"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
          <span className="text-[#ddad81]">Karla Tatiana</span> <span className="text-white">Brenes Campos</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-white/80 mb-8">Analista Programador</h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => (window.location.href = "#contact")}
            className="bg-[#ddad81] text-[#634647] border border-[#ddad81] border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md hover:brightness-110 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(255,255,255,0.3)]"></span>
            Contactar
          </button>

          <button
            onClick={() => (window.location.href = "#about")}
            className="bg-transparent text-white border border-white border-b-4 font-medium overflow-hidden relative px-6 py-3 rounded-md hover:bg-white/10 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
          >
            <span className="bg-white shadow-white absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(255,255,255,0.3)]"></span>
            Conocer más <ArrowDownIcon className="ml-2 h-4 w-4 inline" />
          </button>
        </div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDownIcon className="h-6 w-6 text-white/70" />
        </div>
      </div>
    </section>
  )
}

