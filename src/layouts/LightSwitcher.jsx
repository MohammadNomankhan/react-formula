import { useState } from 'react';
import clsx from 'clsx';

const LightSwitcher = () => {
  const [on, setOn] = useState(false);

  return (
    <div
      className={clsx(
        'h-screen flex justify-center items-center',
        on ? 'bg-blue-200' : 'bg-slate-700'
      )}
    >
      <button
        className={clsx(
          'w-8 h-20 p-1 bg-white relative after:content-[""] after:absolute after:h-1/2 after:w-full after:left-0 after:bg-black transition',
          on ? 'after:top-1/2' : 'after:top-0'
        )}
        onClick={() => setOn((prevState) => !prevState)}
      ></button>
    </div>
  );
};

export default LightSwitcher;
