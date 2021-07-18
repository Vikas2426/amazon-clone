import React, { useState } from 'react'

function DealEndsIn() {
    let hour = 2;
    let minutes = 15;
    let seconds = 60;
    const [time, setTime] = useState(hour + ":" + minutes + ":" + seconds);

    setInterval(() => {
        if (seconds > 1) { seconds--; }
        else { seconds = 59; minutes--; }
        setTime(hour + ":" + minutes + ":" + seconds)
    }, 1000);


    return (
        <div className="deal-time">
            {/* Ends in {time} */}
        </div>
    )
}

export default DealEndsIn
