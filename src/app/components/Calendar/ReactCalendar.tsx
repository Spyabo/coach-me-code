"use client";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function ReactCalendar() {
  const [selected, setSelected] = useState<Date>();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, "PP")}.</p>;
  }

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}
