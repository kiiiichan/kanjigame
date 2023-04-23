import React, { useEffect, useState } from "react";

type TimerProps = {
  countSec: number;
  setCountSec: any;
};

export const Timer: React.VFC<TimerProps> = ({ countSec, setCountSec }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setCountSec((prevCountSec: number) => {
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
