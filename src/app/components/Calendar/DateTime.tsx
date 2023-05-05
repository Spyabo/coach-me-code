import { useState } from "react";

export default function DateTime() {
    // let today = new Date();
    // // let dd = today.getDate(); //Current day
    // // let mm = today.getMonth() + 1; //January is 0!
    // // let yyyy = today.getFullYear(); //(Year is 2022)
    // let hh = today.getHours(); //Current hour
    // let m = today.getMinutes(); //Current minutes

    // if (dd < 10) {
    //     dd = '0' + dd;
    // }
    // if (mm < 10) {
    //     mm = '0' + mm;
    // }
    // today = hh + ":" + m; //or YYYY-MM-DDThh:mm
    // document.getElementById("datefield").setAttribute("min", "max", today);

    const [time, setTime] = useState();

    return (
        <>
            {/* <label htmlFor="appt">Choose a time for your meeting:</label> */}

            <input type="time" id="appt" name="appt"
                min="09:00" max="18:00" required
            />

            {/* <small>Office hours are 9am to 6pm</small> */}

        </>
    )
}