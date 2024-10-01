import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (action) => {
    if (action == 'DEC') {
      setCounter((prevState) => (prevState == 0 ? 0 : prevState - 1));
    } else {
      setCounter((prevState) => prevState + 1);
    }
  };

  return (
    <div className="flex gap-6 m-8">
      <button
        className="p-2 bg-cyan-500 text-cyan-100"
        onClick={() => handleClick('DEC')}
      >
        -
      </button>
      <p className="text-3xl">{counter}</p>
      <button
        className="p-2 bg-teal-500 text-teal-100"
        onClick={() => handleClick('INC')}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
