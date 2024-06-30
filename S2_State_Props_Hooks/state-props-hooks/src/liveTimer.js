import React, { useState, useEffect } from 'react';

function Timer({ initialDays = 0, initialHours = 0, initialMinutes = 0, initialSeconds = 0, initialMilliseconds = 0}) {
  const [days, setDays] = useState(initialDays);
  const [hours, setHours] = useState(initialHours);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(initialSeconds);
  const [milliseconds, setMilliseconds] = useState(initialMilliseconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMilliseconds(nextMilliseconds => {
        if (nextMilliseconds === 99) {
      setSeconds(nextSeconds => {
        if (nextSeconds === 59) {
          setMinutes(nextMinutes => {
            if (nextMinutes === 59) {
              setHours(nextHours => {
                if (nextHours === 23) {
                  setDays(nextDays => nextDays + 1);
                  return 0;
                }
                return nextHours + 1;
              });
              return 0;
            }
            return nextMinutes + 1;
          });
          return 0;
        }
        return nextSeconds + 1;
      });
      return 0;
      }
      return nextMilliseconds + 1;
      });
    }, 10);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      <h2>Timer: {days}d {hours}h {minutes}m {seconds}s {milliseconds}ms </h2>
    </div>
  );
}

export default Timer;
