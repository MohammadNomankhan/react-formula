import { useState } from 'react';
import { Smile } from 'lucide-react';

const Widgets = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-4 items-center">
      <div className="bg-teal-200 rounded-lg p-6 flex gap-4 flex-col items-center justify-center">
        {first ? <Smile /> : null}
        <button
          className="bg-teal-600 text-teal-100 rounded-full py-4 px-6"
          onClick={() => setFirst((prevState) => !prevState)}
        >
          Click Me!
        </button>
      </div>
      <div className="bg-orange-200 rounded-lg p-6">
        <button
          className={`rounded-full py-4 px-6 ${
            second
              ? 'bg-blue-600 text-blue-100'
              : 'bg-orange-600 text-orange-100'
          }`}
          onClick={() => setSecond((prevState) => !prevState)}
        >
          Click Me!
        </button>
      </div>
      <div className="bg-cyan-200 rounded-lg p-6 flex gap-4 flex-col items-center justify-center">
        {third && <Smile />}
        <button
          className="bg-cyan-600 text-cyan-100 rounded-full py-4 px-6"
          onClick={() => setThird((prevState) => !prevState)}
        >
          Click Me!
        </button>
      </div>
    </div>
  );
};

export default Widgets;
