"use client"
import { DayPicker } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"


export default function ShadCalendar() {
    const [date, setDate] = useState<Date | undefined>(new Date())
    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
        />
    )
}


