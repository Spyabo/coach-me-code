export default function DateTime() {
    let today = new Date();
    let dd = today.getDate(); //Current day
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear(); //(Year is 2022)
    let hh = today.getHours(); //Current hour
    let m = today.getMinutes(); //Current minutes

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    today = yyyy + '-' + mm + '-' + dd + "T" + hh + ":" + m; //or YYYY-MM-DDThh:mm
    // document.getElementById("datefield").setAttribute("min", "max", today);

    return (
        <>
            <label htmlFor="meeting-time">Choose a time for your appointment:</label>

            <input type=
                "datetime-local" name="datefield" id="datefield"
                min={today} max="todayT11:00" />

        </>
    )
}