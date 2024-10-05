import { useState } from 'react';
import clsx from 'clsx';
const NAMES = ['noman', 'madani', 'jami', 'moin', 'rehan', 'afzal', 'saeed'];
const IMAGES = NAMES.map((name) => `https://robohash.org/${name}.png?set=set5`);

const NavButton = ({ direction, handleImageChange, show }) => {
  if (show) {
    return (
      <button
        className={clsx(
          'p-2 w-20 text-lg rounded-lg',
          direction == 'left'
            ? 'bg-teal-500 text-teal-100'
            : 'bg-orange-500 text-orange-100'
        )}
        onClick={() => handleImageChange(direction)}
      >
        {direction}
      </button>
    );
  }
  return;
};

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const handleImageChange = (action) => {
    if (action == 'left') {
      setCurrent((prevState) => (prevState == 0 ? 0 : prevState - 1));
    } else {
      setCurrent((prevState) =>
        prevState == IMAGES.length - 1 ? IMAGES.length - 1 : prevState + 1
      );
    }
  };

  return (
    <div className="h-screen bg-slate-900 flex flex-col gap-2 justify-center items-center">
      <p className="text-2xl text-sky-200">{NAMES[current]}</p>
      <div className="flex gap-8 items-center">
        <NavButton
          direction="left"
          handleImageChange={handleImageChange}
          show={current != 0}
        />
        <div className="h-auto w-48 rounded-md bg-slate-100 p-4">
          <img src={IMAGES[current]} className="h-full w-full" />
        </div>
        <NavButton
          direction="right"
          handleImageChange={handleImageChange}
          show={current != IMAGES.length - 1}
        />
      </div>
    </div>
  );
};

export default ImageCarousel;
