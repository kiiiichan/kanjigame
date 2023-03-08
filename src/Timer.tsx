import React, { useEffect, useState } from "react";

type TimerProps = {
  startSec: number;
};

export const Timer: React.VFC<TimerProps> = ({ startSec }) => {
  const [countSec, setCountSec] = useState(startSec);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountSec((prevCountSec) => {
        const newCountSec = prevCountSec - 1;
        if (newCountSec >= 0) {
          return newCountSec;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{countSec}</h1>
    </div>
  );
};
