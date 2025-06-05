// app/page.tsx
'use client'

import RegistrationForm from "@/components/registration/RegistrationForm"

export default function Home() {

  return (
    <div>
    <div className="overflow-hidden h-screen"> {/* Prevent scrolling */}

<RegistrationForm />
    </div>

    </div>
  )
}