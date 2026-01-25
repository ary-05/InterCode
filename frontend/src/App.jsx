import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
      <h1>Welcome to ProjectX</h1>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="">
            Log In
          </button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
        </SignOutButton>
      </SignedIn>

      <UserButton/>
    </>
  )
}

export default App
