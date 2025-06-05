// app/page.tsx
'use client'

// import AccountSetup from "@/components/accountsetup/AccountSetup"
import AccountSetupContainer from "@/components/accountsetup/AccountSetupContainer"

export default function Home() {

  return (
    <div>
    <div className=" h-screen justify-center items-center content-center"> {/* Prevent scrolling */}

<AccountSetupContainer />

    </div>

    </div>
  )
}