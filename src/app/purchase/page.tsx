import DateTime from "../components/Calendar/DateTime";
import Calendar from "../components/Calendar/ReactCalendar";
import ShadCalendar from "../components/Calendar/ShadCalendar";

export default function Page() {
  return (
    <div className="m-10 flex justify-center flex-row">
      <div className="flex  bg-white rounded max-w-md p-0">
        <div className="text-black">
          <Calendar />
        </div>
        <div className="px-6 py-6 text-gray-700 text-base">
          <p className="text-black">Pick a time</p>
          <DateTime />
        </div>
      </div>
      <ShadCalendar />


      <div className="m-10 max-w-md rounded overflow-hidden shadow-lg flex flex-row bg-white ">
        <div className="px-6 py-6 text-gray-700 text-base">
          <h1 className="font-bold text-xl mb-2">Order Summary</h1>
          <p>Listing title</p>
          <img src="" alt="" />
          <p>
            Listing description. Lorem ipsum dolor sit amet, consectetur
          </p>
          <div className="flex flex-row justify-between py-2">
            <p className="font-bold">Token Balance</p>
            <p>50</p>
          </div>
          <div className="flex flex-row justify-between py-4">
            <p className="font-bold">Listing price</p>
            <p>50</p>
          </div>
          <div className="flex flex-row justify-center">
            <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 rounded-full">Order now</button>
          </div>
        </div>
      </div>
    </div>
  )
}
