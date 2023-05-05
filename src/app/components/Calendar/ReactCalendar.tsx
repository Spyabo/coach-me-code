"use client"
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

export default function Calendar() {

    const [selected, setSelected] = useState<Date>();

    let footer = <p>Please pick a day.</p>;
    if (selected) {
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    console.log(selected, "<==selected")
    return (
        <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
        />
    );
}


