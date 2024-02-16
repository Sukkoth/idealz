import { useEffect, useRef, useState } from "react";

export function useCountDown(timer) {
  const timerRef = useRef();
  const [countDown, setCountDown] = useState(timer);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCountDown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (countDown === 0) {
      clearInterval(timerRef.current);
    }
  }, [countDown, timer]);

  //get numbers
  const hours = Math.floor(countDown / 3600);
  const remainingMinutes = Math.floor((countDown % 3600) / 60);
  const remainingSeconds = countDown % 60;

  //format them
  const formattedHours = hours > 0 ? `${hours} :` : '';
  const formattedMinutes = remainingMinutes > 0 ? `${remainingMinutes} :` : '';
  const formattedSeconds = `${remainingSeconds}`;

  return {formattedHours, formattedMinutes, formattedSeconds}

}
