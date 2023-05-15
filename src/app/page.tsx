/* eslint-disable react/no-unescaped-entities */
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <main className="flex flex-col items-center gap-8 p-6 md:mt-15 max-w-7xl mx-auto lg:px-7 ">
      <div className="bg-gray-100 px-8 py-10 rounded-lg text-center shadow-lg w-full bg-hero-pattern bg-cover bg-center">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-snug mb-2">
          Code smarter, not harder, with Coach Me Code!
        </h1>
        <a href="/sign-up">
          <button className="bg-green-400 hover:bg-red-400 text-white text-lg text-center font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
            Join us today
          </button>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mt-4 mb-2 ">
            Learning has never been easier
          </h3>
          <p className="text-center text-gray-600 text-lg">
            Coach Me Code grants you access to a variety of courses, with all of
            the tools you need to reach your goals.
          </p>
          <Image
            src="/landing-1.svg"
            alt="Mentors"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
            List your own courses
          </h3>
          <p className="text-center text-gray-600 text-lg">
            Coach others to gain confidence in your skills and experience. It's
            also something nice to add to your resume as a mentor.
          </p>
          <Image
            src="/landing-2.svg"
            alt="Services"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="bg-gray-100 px-8 py-10 rounded-lg text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-snug mb-4">
          Token System
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Our flagship platform uses a token system to provide benefits to our
          members. Members can earn tokens by participating in coaching
          sessions, attending events, and workshops. These tokens can be
          redeemed for various rewards, such as exclusive workshops, coaching
          sessions, and networking opportunities.
        </p>
      </div>

      <div className="bg-gray-200 px-8 py-10 rounded-lg text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-snug mb-4">
          What you'll find on Coach Me Code
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center">
            <Image
              src="/course-access.svg"
              alt="Services"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Unlimited Course Access
            </h4>
            <p className="text-gray-600 text-sm text-center">
              Browse through a range of courses and book you session at a time
              that's right for you. You'll never feel alone on your coding
              journey again. Coaching sessions are available 24/7 and are
              tailored to your needs. Simply book a session with the course
              provider and get started.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/skills-dev.svg"
              alt="Services"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Skills Development
            </h4>
            <p className="text-gray-600 text-sm text-center">
              This platform is designed to help you develop your skills and stay
              up-to-date with the latest trends in tech. Courses are up to date
              with industry standards and are designed to be practical and
              relevant to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/community.svg"
              alt="Services"
              width={400}
              height={300}
              className="rounded-lg"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Community</h4>
            <p className="text-gray-600 text-sm text-center">
              This is the place to find like-minded individuals who share a
              passion for technology and a desire to learn and grow. You'll have
              access to a supportive network of peers and mentors who can help
              you achieve your goals and advance your career.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
