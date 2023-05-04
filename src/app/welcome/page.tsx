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
        <div className=" height-full bg-scroll max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header>
                <h1 className="text-lg font-bold my-4 ">Welcome, {user.firstName}!</h1>
            </header>
            <main className="container">
                <p >You took the first step! 🎉 </p>
                <p> Sharpen the tools in your coding belt through mentoring others, or find a mentor to support you on your coding journey...</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                    <div className="container bg-blue-100 p-5 grid justify-items-center shadow-md rounded">
                        <h3 className="font-bold text-lg">Want to learn?</h3>
                        <Image
                            src="/img/1.png"
                            alt="a graphic of a person studying"
                            width={300}
                            height={300}
                        />
                        <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings">Explore Services</a>
                        </button>
                    </div>
                    <div className="container bg-blue-100 p-5 grid justify-items-center shadow-xl rounded">
                        <h3 className="font-bold text-lg">Want to coach?</h3>
                        <Image
                            src="/img/2.png"
                            alt="A coding coach mentoring a student next to a whiteboard"
                            width={300}
                            height={300}
                        />
                        <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
                            <a href="/listings/create-listing">Create a listing</a>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
}