import React from 'react'
import Image from 'next/image'

interface ClinicLogoProps {
  className?: string
  showText?: boolean
  textClassName?: string
  width?: number
  height?: number
}

/**
 * ClinicLogo Component - Single source of truth for the clinic logo
 * Uses the official Clinic 1 Medical logo with integrated "1", caduceus, golden wings, and text
 */
export default function ClinicLogo({
  className = "w-12 h-12",
  showText = false,  // Default to false since logo already contains text
  textClassName = "",
  width = 120,
  height = 120
}: ClinicLogoProps) {

  // Single source of truth for logo path
  const LOGO_PATH = '/assets/clinic1-medical-logo.jpg'
  const LOGO_ALT = 'Clinic 1 Medical Logo - Professional Medical Caduceus with Golden Wings'

  return (
    <div className="flex items-center space-x-3">
      {/* Official Clinic Logo Image */}
      <div className={`relative ${className}`}>
        <Image
          src={LOGO_PATH}
          alt={LOGO_ALT}
          width={width}
          height={height}
          priority={true}
          className="object-contain"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Optional text - only show if explicitly requested since logo already includes text */}
      {showText && (
        <div className={`flex flex-col ${textClassName}`}>
          <span className="font-bold text-xl bg-gradient-to-r from-yellow-600 to-yellow-500 bg-clip-text text-transparent">
            CLINIC 1 MEDICAL
          </span>
          <span className="text-sm text-emerald-700 font-medium">
            Family Care Excellence
          </span>
        </div>
      )}
    </div>
  )
}