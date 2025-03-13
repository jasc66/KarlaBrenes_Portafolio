"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface SectionTitleProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function SectionTitle({ icon, title, description }: SectionTitleProps) {
  const [tooltipPosition, setTooltipPosition] = useState({ left: "50%", transform: "translateX(-50%)" })
  const buttonRef = useRef<HTMLButtonElement>(null)

  // Función para calcular la posición del tooltip
  const calculateTooltipPosition = () => {
    if (!buttonRef.current) return

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const windowWidth = window.innerWidth
    const tooltipWidth = 288 // 72 * 4 = 288px (w-72)

    // Calcular el espacio disponible a la izquierda y derecha del botón
    const spaceLeft = buttonRect.left
    const spaceRight = windowWidth - (buttonRect.left + buttonRect.width)

    // Si no hay suficiente espacio a la derecha, alinear a la derecha
    if (spaceRight < tooltipWidth / 2) {
      const rightOffset = Math.min(tooltipWidth / 2 - spaceRight, tooltipWidth / 2)
      setTooltipPosition({
        left: `calc(50% - ${rightOffset}px)`,
        transform: "translateX(-50%)",
      })
    }
    // Si no hay suficiente espacio a la izquierda, alinear a la izquierda
    else if (spaceLeft < tooltipWidth / 2) {
      const leftOffset = Math.min(tooltipWidth / 2 - spaceLeft, tooltipWidth / 2)
      setTooltipPosition({
        left: `calc(50% + ${leftOffset}px)`,
        transform: "translateX(-50%)",
      })
    }
    // Si hay suficiente espacio en ambos lados, centrar
    else {
      setTooltipPosition({
        left: "50%",
        transform: "translateX(-50%)",
      })
    }
  }

  // Calcular la posición al montar el componente y al cambiar el tamaño de la ventana
  useEffect(() => {
    calculateTooltipPosition()
    window.addEventListener("resize", calculateTooltipPosition)
    return () => window.removeEventListener("resize", calculateTooltipPosition)
  }, [])

  return (
    <div className="relative inline-block group mb-8">
      <button
        ref={buttonRef}
        className="relative px-6 py-3 text-lg font-semibold text-white bg-[#634647]/90 rounded-xl hover:bg-[#634647] focus:outline-none focus:ring-2 focus:ring-[#ddad81] focus:ring-offset-2 focus:ring-offset-gray-100 transition-all duration-300 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#ddad81]/20 to-[#634647]/20 blur-xl group-hover:opacity-75 transition-opacity"></div>

        <span className="relative flex items-center gap-2">
          {icon}
          {title}
        </span>
      </button>

      <div
        className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2 z-10"
        style={{
          left: tooltipPosition.left,
          transform: tooltipPosition.transform,
        }}
      >
        <div className="relative p-4 bg-gradient-to-br from-[#634647]/95 to-[#634647]/90 backdrop-blur-md rounded-2xl border border-[#ddad81]/30 shadow-[0_0_30px_rgba(221,173,129,0.15)]">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#ddad81]/20">{icon}</div>
            <h3 className="text-sm font-semibold text-white">{title}</h3>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-300">{description}</p>
          </div>

          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#ddad81]/10 to-[#634647]/10 blur-xl opacity-50"></div>

          <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-[#634647]/95 to-[#634647]/90 rotate-45 border-r border-b border-[#ddad81]/30"></div>
        </div>
      </div>
    </div>
  )
}

