"use client"

import * as React from "react"

export function CoolMode({ children }: { children: React.ReactNode }) {
  const handleClick = (e: React.MouseEvent) => {
    const colors = ["#6366f1", "#22c55e", "#facc15", "#ef4444"]
    const size = 8

    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("span")
      particle.className = "pointer-events-none absolute rounded-full"
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.background = colors[Math.floor(Math.random() * colors.length)]
      particle.style.left = `${e.clientX}px`
      particle.style.top = `${e.clientY}px`
      document.body.appendChild(particle)

      const angle = Math.random() * 2 * Math.PI
      const velocity = Math.random() * 150 + 50

      const x = Math.cos(angle) * velocity
      const y = Math.sin(angle) * velocity

      particle.animate(
        [
          { transform: "translate(0,0)", opacity: 1 },
          { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
        ],
        {
          duration: 1000 + Math.random() * 500,
          easing: "ease-out",
          fill: "forwards",
        }
      )

      setTimeout(() => particle.remove(), 1500)
    }
  }

  return (
    <div className="relative inline-block" onClick={handleClick}>
      {children}
    </div>
  )
}
