"use client"

import { useState, useEffect } from "react"
import { CreditCard, Wifi } from "lucide-react"

export default function Component() {
  const [isEncrypting, setIsEncrypting] = useState(false)
  const [displayNumber, setDisplayNumber] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  // Card details
  const cardNumber = "4532 1234 5678 9012"
  const encryptedNumber = "4532 •••• •••• 9012"
  const cardHolder = "JOHN SMITH"
  const expiryDate = "12/28"

  // Typewriter effect for encryption/decryption
  const typewriterEffect = async (targetText: string, isEncryption: boolean) => {
    setIsEncrypting(true)
    const currentText = displayNumber

    // Clear current text first
    for (let i = currentText.length; i >= 0; i--) {
      setDisplayNumber(currentText.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, 30))
    }

    // Type new text
    for (let i = 0; i <= targetText.length; i++) {
      setDisplayNumber(targetText.slice(0, i))
      await new Promise((resolve) => setTimeout(resolve, isEncryption ? 50 : 40))
    }

    setIsEncrypting(false)
  }

  // Auto cycle between encrypted and decrypted
  useEffect(() => {
    setDisplayNumber(cardNumber)

    const cycle = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000))
      await typewriterEffect(encryptedNumber, true)
      await new Promise((resolve) => setTimeout(resolve, 3000))
      await typewriterEffect(cardNumber, false)
    }

    const interval = setInterval(cycle, 6000)
    return () => clearInterval(interval)
  }, [])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute right-0 top-10 origin-top scale-75 rounded-md  transition-all duration-300 ease-out  group-hover:scale-90 opacity-90">
      <div className="relative w-96 h-60">
        {/* Card Container */}
        <div className="relative w-full h-full transition-all duration-500 hover:scale-105">
          <div className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl shadow-purple-500/30">
            <div className="relative w-full h-full bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 rounded-2xl overflow-hidden">
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse" />
              </div>

              {/* Encryption effect overlay */}
              {isEncrypting && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-violet-400/30 to-purple-500/20 animate-pulse" />
              )}

              {/* Card content */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-between text-white">
                {/* Top section */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-yellow-300 rounded-full animate-pulse" />
                    </div>
                    <Wifi className="w-6 h-6 rotate-90 opacity-80" />
                  </div>
                  <CreditCard className="w-8 h-8 opacity-80" />
                </div>

                {/* Card number with typewriter effect */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="font-mono text-xl tracking-wider min-h-[28px] flex items-center">
                      <span className={isEncrypting ? "text-purple-200" : ""}>{displayNumber}</span>

                      {/* Magic Sparkler Cursor - only during typewriter effect */}
                      {isEncrypting && (
                        <div className="relative ml-2 inline-block">
                          {/* Main glowing orb */}
                          <div className="relative">
                            <div className="w-3 h-6 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full blur-sm opacity-80 animate-pulse" />
                            <div className="absolute inset-0 w-3 h-6 bg-gradient-to-r from-purple-300 to-violet-300 rounded-full opacity-60" />
                            <div className="absolute inset-0.5 w-2 h-5 bg-white rounded-full opacity-90 animate-pulse" />

                            {/* Magic particles around cursor */}
                            <div className="absolute -top-1 -left-1 w-1 h-1 bg-purple-300 rounded-full animate-ping" />
                            <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-violet-300 rounded-full animate-ping animation-delay-300" />
                            <div className="absolute top-0 -right-2 w-0.5 h-0.5 bg-purple-200 rounded-full animate-pulse animation-delay-500" />
                            <div className="absolute -top-2 left-1 w-0.5 h-0.5 bg-violet-400 rounded-full animate-ping animation-delay-700" />
                            <div className="absolute bottom-0 -left-2 w-1 h-1 bg-purple-300 rounded-full animate-pulse animation-delay-900" />

                            {/* Sparkle trail effect */}
                            <div className="absolute top-1 -left-3 w-1.5 h-1.5 bg-purple-200 rounded-full animate-ping animation-delay-200" />
                            <div className="absolute top-3 -left-4 w-1 h-1 bg-violet-300 rounded-full animate-pulse animation-delay-400" />
                            <div className="absolute top-2 -left-5 w-0.5 h-0.5 bg-purple-400 rounded-full animate-ping animation-delay-600" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Additional encryption particles around the number */}
                    {isEncrypting && (
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 left-10 w-1 h-1 bg-purple-300 rounded-full animate-ping" />
                        <div className="absolute top-4 left-32 w-1 h-1 bg-violet-300 rounded-full animate-ping animation-delay-200" />
                        <div className="absolute top-1 left-52 w-1 h-1 bg-purple-400 rounded-full animate-ping animation-delay-400" />
                        <div className="absolute top-5 left-20 w-0.5 h-0.5 bg-violet-200 rounded-full animate-pulse animation-delay-800" />
                        <div className="absolute top-0 left-40 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping animation-delay-1000" />
                      </div>
                    )}
                  </div>

                  {/* Card holder and expiry */}
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-70 uppercase tracking-wide">Card Holder</div>
                      <div className="font-semibold text-sm">{cardHolder}</div>
                    </div>
                    <div>
                      <div className="text-xs opacity-70 uppercase tracking-wide">Expires</div>
                      <div className="font-semibold text-sm">{expiryDate}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Holographic effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 transform translate-x-full rotate-12 animate-pulse" />

              {/* Magic sparkles around card */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 right-12 w-2 h-2 bg-purple-300 rounded-full animate-ping animation-delay-1000" />
                <div className="absolute bottom-16 left-8 w-1 h-1 bg-violet-400 rounded-full animate-pulse animation-delay-1500" />
                <div className="absolute top-20 left-20 w-1.5 h-1.5 bg-purple-200 rounded-full animate-ping animation-delay-2000" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Status indicator */}
      
    </div>
  )
}
