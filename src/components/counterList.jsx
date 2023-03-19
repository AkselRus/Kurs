import React, { useState } from "react";

import Counter from "./counter";
const CounterList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 0, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounter = counters.filter((i) => i.id !== id);
    setCounters(newCounter);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id) {
          return { ...item, value: item.value + 1 };
        } else {
          return item;
        }
      })
    );
  };
  const handleDecrement = (id) => {
    setCounters(
      counters.map((item) => {
        if (item.id === id) {
          return { ...item, value: item.value - 1 };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          handleIncrement={() => handleIncrement(count.id)}
          handleDecrement={() => handleDecrement(count.id)}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CounterList;
