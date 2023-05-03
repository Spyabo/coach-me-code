"use client";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Welcome() {
    const { isLoaded, isSignedIn, user } = useUser();

    // In case the user signs out while on the page.
    if (!isLoaded || !isSignedIn) {
        return null;
    }
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header>
                <h1 className="p-4 text-lg font-bold ">Welcome, {user.firstName}!</h1>
            </header>
            <main className="container p-4">
                <p>You took the first step! 🎉 </p>
                <p> Whether you would like to sharpen the tools in your coding belt through mentoring others, or find a mentor to support you, this is the place for you...</p>
                <div className="flex gap-5 mt-3">
                    <div className="container bg-blue-100 p-5 flex flex-col">
                        <img src="" alt="an overview of our listings" />
                        <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings"> Explore Services</a>
                        </button>
                    </div>
                    <div className="container bg-blue-100 flex justify-center p-5 flex-col">
                        <img src="" alt="an overview of our listing form" />
                        <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings/create-listing">Create a listing</a>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}