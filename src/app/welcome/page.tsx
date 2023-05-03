"use client";
import { useAuth, useUser } from "@clerk/nextjs";


export default function Welcome() {
    const { isLoaded, isSignedIn, user } = useUser();

    // In case the user signs out while on the page.
    if (!isLoaded || !isSignedIn) {
        return null;
    }
    return (
        <div>
            <h1>Welcome, {user.firstName}</h1>
            <p>You took the first step! Whether you would like to sharpen the tools in your coding belt through mentoring others, or find a mentor to support you, this is the place! </p>
            <button><a href="/listings"> Explore Services</a></button>
            <button><a href="/listings/create-listing">Create a listing</a> </button>
        </div>
    )
}