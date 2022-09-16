import { useEffect, useState } from "react";

const CarouselHeader = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    let timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds -= 1;
        if (seconds < 1) {
          seconds = 59;
          minutes -= 1;
          if (minutes < 1) {
            minutes = 59;
            hours -= 1;
            if (hours < 1) {
              hours = 0;
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div style={{ paddingBottom: "10px" }}>
      Today's Deals{" "}
      <span>
        Ends in:&nbsp;
        <span style={{ backgroundColor: "yellow", padding: "0 10px" }}>
          {`${timeLeft.hours} : ${timeLeft.minutes}: ${timeLeft.seconds}`}{" "}
        </span>
      </span>
    </div>
  );
};

export default CarouselHeader;
