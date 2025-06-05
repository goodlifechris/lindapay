// app/page.tsx
'use client'

import VerificationForm from "@/components/registration/VerificationForm"

export default function Home() {

  return (
    <div>
    <div className=" h-screen justify-center items-center content-center"> {/* Prevent scrolling */}

<VerificationForm />
    </div>

    </div>
  )
}