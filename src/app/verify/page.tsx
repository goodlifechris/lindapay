// app/page.tsx
'use client'

import VerificationForm from "@/components/registration/VerificationForm"
import { Suspense } from "react"

export default function Home() {

  return (
    <div>
    <div className=" h-screen justify-center items-center content-center"> {/* Prevent scrolling */}
        <Suspense fallback={<div>Loading...</div>}>

<VerificationForm />
</Suspense>
    </div>

    </div>
  )
}