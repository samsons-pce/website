import { useState, useEffect } from "react";

function generateNewData(lastTime) {
  // Generate next time label by adding 6 hours
  const nextHour = (parseInt(lastTime.slice(0, 2)) + 6) % 24;
  const nextTime = nextHour.toString().padStart(2, "0") + ":00";

  // Random value between 20 and 120 as demo
  return {
    time: nextTime,
    value: Math.floor(Math.random() * 100) + 20,
  };
}

export function useLiveData(initialData) {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const interval = setInterval(() => {
      setData((prevData) => {
        const lastItem = prevData[prevData.length - 1];
        const newItem = generateNewData(lastItem.time);
        // Append new item and limit to the last 20 points
        const newData = [...prevData, newItem].slice(-20);
        return newData;
      });
    }, 400); // every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return data;
}
