// hooks/useMobileMenu.ts
'use client'

import { useState } from 'react'

export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return { isOpen, toggleMenu }
}