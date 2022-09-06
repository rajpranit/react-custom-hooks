import { useState, useEffect } from "react";

const useCounter = (counterfn) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counterfn);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counterfn]);

  return counter;
};

export default useCounter;
