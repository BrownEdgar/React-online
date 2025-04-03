import { useState } from "react";

function useArray({ length = 10, start = 1, end = 100 }) {
  const [value, setValue] = useState(() => {
    return Array.from({ length }, () => Math.round(Math.random() * (end - start) + start))
  });

  const sort = () => {
    setValue(value.toSorted((a, b) => a - b))
  }
  const add = (...arg) => {
    setValue((prev) => [...prev, ...arg])
  }

  return { value, sort, add, setValue }
}

export default useArray;
