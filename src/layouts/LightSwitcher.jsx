import { useState } from 'react';
import clsx from 'clsx';

const LightSwitcher = () => {
  const [on, setOn] = useState(false);

  return (
    <div
      className={clsx(
        'h-screen flex flex-col justify-center items-center',
        on ? 'bg-blue-200' : 'bg-slate-700'
      )}
    >
      <div className='w-full max-w-3xl p-4'>
      <button
        className={clsx(
          'w-20 h-10 rounded-full bg-white relative after:content-[""] after:absolute after:h-8 after:w-8 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:bg-black transition',
          on ? 'bg-yellow-300 after:left-1/2' : 'after:left-2',
          )}
          onClick={() => setOn((prevState) => !prevState)}
          ></button>
      <p className={on ? "text-slate-900" : "text-white"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia pariatur ut aut veritatis impedit officiis natus vel inventore corrupti distinctio, sapiente repellendus assumenda quidem, minus quaerat magnam debitis placeat!
      </p>
        </div>
    </div>
  );
};

export default LightSwitcher;
