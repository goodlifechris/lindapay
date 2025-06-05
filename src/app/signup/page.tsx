// app/page.tsx
'use client'

import RegistrationForm from "@/components/registration/RegistrationForm"

export default function Home() {

  return (
    <div>
    <div className=" h-screen justify-center items-center content-center"> {/* Prevent scrolling */}

<RegistrationForm />
    </div>

    </div>
  )
}