//@ts-nocheck
"use client"
import { useUser } from "@clerk/nextjs";
import format from "date-fns/format";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ReactCalendar from "../../../components/Calendar/ReactCalendar";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [ordered, setOrdered] = useState(false);
  const listing_id = usePathname().split("/")[2];
  const { user } = useUser();
  const order = { [listing_id]: date?.toISOString() };
  const [listingData, setListingData] = useState();

  useEffect(() => {
    async function fetchListing() {
      const res = await fetch(`http://localhost:3000/api/${listing_id}/listing`);
      const { listing } = await res.json();
      setListingData(listing);
    }
    fetchListing();
  }, [listing_id])

  const handleOnClick = async () => {
    const res = await fetch("/api/users", {
      method: "PATCH",
      //bool true = order, false = lising
      body: JSON.stringify({
        clerkID: user?.id,
        order: order,
        bool: true
      })
    })
    if (date) setOrdered(true);
  }

  return (ordered ?
    <div className="flex justify-center text-center md:flex-row m-10 p-12 gap-6">
      <div className="flex flex-col justify-around max-w-md rounded shadow-lg bg-white p-4  border-solid border-2 border-purple-200">
        <h1 className="font-bold">Congratulations! You have booked a mentor!</h1>
        <div className="py-4">
          <p>Your booking is on {date?.toString()}</p>
          <p></p>
        </div>
      </div>
    </div> :
    <div className="flex justify-center md:flex-row m-10 py-6 gap-6 ">
      <div className=" bg-white rounded max-w-md p-6 shadow-lg">
        <ReactCalendar date={date} setDate={setDate} />
      </div>
      <div className="flex flex-col justify-around items-center max-w-md rounded shadow-lg bg-white ">
        <div className="px-6 py-6 text-gray-700 text-base">
          <h1 className="font-bold text-xl mb-2">Order Summary</h1>
          <p className="font-bold text-lg py-2">{listingData?.listing_title}</p>
          <p className="py-2">{listingData?.listing_description.split(" ").slice(0, 20).join(" ").concat("...")}</p>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Token Rate:</p>
            <p>{listingData?.token_rate}</p>
          </div>
          <div className="flex flex-row justify-between mt-2">
            <p className="font-bold">Booking Date:</p>
            <p >{date ? format(date!, "PP") : "Please pick a day"}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleOnClick} className=" bg-red-500 hover:bg-yellow-400 text-black font-bold py-2 px-4 m-2 rounded-full">
            Order now
          </button>
        </div>
      </div>
    </div >
  );
}
