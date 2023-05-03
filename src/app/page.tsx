import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Landing() {
  return (
    <main className="flex flex-col items-center gap-8 p-6 md:p-24 mt-50 md:mt-15">
      <div className="bg-blue-100 px-8 py-10 rounded-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight md:leading-snug">
          Find the right <span className="text-blue-500">mentor</span> for you
          today
        </h2>
        <a href="/sign-up">
          <button className="bg-orange-500 text-white text-lg font-bold py-3 px-6 rounded-full mt-6 hover:bg-orange-600 transition-colors duration-300 ease-in-out">
            Join us
          </button>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">Mentors</h3>
          <p className="text-gray-600 text-lg mb-6">
            Our experienced mentors are here to help guide you towards achieving
            your goals.
          </p>
          <Image
            src="/mentors.jpg"
            alt="Mentors"
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-white shadow-lg rounded-lg p-8">
          <Image
            src="/services.jpg"
            alt="Services"
            width={400}
            height={300}
            className="rounded-lg"
          />
          <h3 className="text-3xl font-bold text-gray-800 mt-4 mb-2">
            Our Services
          </h3>
          <p className="text-gray-600 text-lg">
            We offer a range of services to help you on your journey to success.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 px-8 py-10 rounded-lg text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-snug mb-4">
          Token System
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Our mentorship program uses a token system to provide additional
          benefits to our members. Members can earn tokens by participating in
          mentorship sessions, attending events, and completing other program
          requirements. These tokens can be redeemed for various rewards, such
          as exclusive workshops, coaching sessions, and networking
          opportunities.
        </p>
      </div>

      <div className="bg-gray-200 px-8 py-10 rounded-lg text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight md:leading-snug mb-4">
          What you'll find on Coach Me Code
        </h3>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="flex flex-col items-center">
            <img
              src="/images/card1.png"
              alt="Card 1"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Mentorship Program
            </h4>
            <p className="text-gray-600 text-sm text-center">
              Our mentorship program provides personalized guidance and support
              from experienced professionals in the tech industry. Our mentors
              are carefully selected and trained to ensure that you receive the
              best possible guidance and advice.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/card2.png"
              alt="Card 2"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              Skills Development
            </h4>
            <p className="text-gray-600 text-sm text-center">
              We offer a variety of workshops, tutorials, and courses to help
              you develop your skills and stay up-to-date with the latest trends
              in tech. Our content is created and curated by industry experts
              and is designed to be practical and relevant to your needs.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/images/card3.png"
              alt="Card 3"
              className="w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
            />
            <h4 className="text-lg font-bold text-gray-800 mb-2">Community</h4>
            <p className="text-gray-600 text-sm text-center">
              Our community is made up of like-minded individuals who share a
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
