export default function Landing() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-2 p-6 md:p-24 mt-50 md:mt-15">
      <div className="bg-blue-100 px-8 py-10 rounded-lg text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-snug">
        Find the right <span className="text-blue-500">mentor</span> for you today
      </h2>
      <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
        Join us
      </button>
      </div>
    </main>
  );
}


