// app/page.tsx
'use client'

import RegistrationForm from "@/components/registration/RegistrationForm"

export default function Home() {

  return (
    <div>
    <div className="overflow-hidden"> {/* Prevent scrolling */}

<RegistrationForm />
    </div>

    </div>
  )
}