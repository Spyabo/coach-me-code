import { format } from "date-fns";
import { Calendar } from "./calendar";

export default function ReactCalendar({ date, setDate }: { date: Date | undefined; setDate: any }) {
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
    />
  );
}
