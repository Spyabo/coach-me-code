"use client";
import { format } from "date-fns";
import { useState } from "react";
import { Calendar } from "./calendar";

export default function ReactCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  let dateSelected = <p>Please pick a day.</p>;

  if (date) {
    dateSelected = <p>You picked {format(date!, "PP")}.</p>;
  }

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      footer={dateSelected}
    />
  );
}
