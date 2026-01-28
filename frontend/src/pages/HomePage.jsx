import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/clerk-react'
import axios from 'axios';
import React from 'react'
import toast from "react-hot-toast";


function HomePage() {
    return <div>
    <button className="btn btn-secondary" onClick={() => toast.success("This is a success")}>Click Me</button>
        
        <SignedOut>
            <SignInButton mode='modal'>
                <button>LogIn</button>
            </SignInButton>
        </SignedOut>

        <SignedIn>
            <SignOutButton></SignOutButton>
        </SignedIn>

        <UserButton/>

    </div>
}

export default HomePage