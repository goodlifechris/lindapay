// app/page.tsx
'use client'

import AccountSetup from "@/components/accountsetup/AccountSetup"

export default function Home() {

  return (
    <div>
    <div className=" h-screen justify-center items-center content-center"> {/* Prevent scrolling */}

<AccountSetup />

    </div>

    </div>
  )
}