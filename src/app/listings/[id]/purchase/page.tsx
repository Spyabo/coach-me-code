//@ts-nocheck
"use client"
import Confirmation from "@/app/components/Confirmation";
import { useUser } from "@clerk/nextjs";
import format from "date-fns/format";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ReactCalendar from "../../../components/Calendar/ReactCalendar";

export default function Page() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [ordered, setOrdered] = useState(false);
  const listing_id = usePathname().split("/")[2];
  const { user } = useUser();
  const order = { [listing_id]: date?.toISOString() };

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
          <p>Listing title</p>
          <p>Listing description. Lorem ipsum dolor sit amet, consectetur</p>
          <div className="flex flex-row justify-between py-2">
            <p className="font-bold">Token Balance</p>
            <p>50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Listing price</p>
            <p>50</p>
          </div>
          <div className="flex flex-row justify-between">
            <p className="font-bold">Date:</p>
            <p>{date ? format(date!, "PP") : "Please pick a day"}</p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button onClick={handleOnClick} className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 m-2 rounded-full">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
}
