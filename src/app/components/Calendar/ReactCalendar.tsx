"use client";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { Calendar } from "./calendar";

export default function ReactCalendar() {
  const [selected, setSelected] = useState<Date>();
  const [date, setDate] = useState<Date | undefined>(new Date())

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <>
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        footer={footer}
      />
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
    </>
  );
}
