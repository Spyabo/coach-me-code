"use client";
import { useAuth, useUser } from "@clerk/nextjs";
import Image from 'next/image';

export default function Welcome() {
    const { isLoaded, isSignedIn, user } = useUser();

    // In case the user signs out while on the page.
    if (!isLoaded || !isSignedIn) {
        return null;
    }
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px- mt-20">
            <header>
                <h1 className="text-lg font-bold my-4 ">Welcome, {user.firstName}!</h1>
            </header>
            <main className="container">
                <p >You took the first step! 🎉 </p>
                <p> Sharpen the tools in your coding belt through coaching others, or find a course to help you on your coding journey...</p>
                <div className="flex flex-col md:flex-row lg:flex-row gap-8 my-8">
                    <div className="container p-5 flex flex-col items-center justify-center shadow-md rounded">
                        <h3 className="font-bold text-lg">Want to learn?</h3>
                        <Image
                            src="/learn.svg"
                            alt="a graphic of a person studying"
                            width={300}
                            height={300}
                        />
                        <button className="bg-green-400 hover:bg-red-400 text-white text-lg text-center font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings">Explore Services</a>
                        </button>
                    </div>
                    <div className="container bg-blue-100 p-5 grid justify-items-center shadow-xl rounded">
                        <h3 className="font-bold text-lg">Want to coach?</h3>
                        <Image
                            src="/teach.svg"
                            alt="A coding coach mentoring a student next to a whiteboard"
                            width={300}
                            height={300}
                        />
                        <button className="bg-green-400 hover:bg-red-400 text-white text-lg text-center font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings/create-listing">Create a listing</a>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}