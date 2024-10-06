import { useState } from "react";
import CatCard from "../components/CatDirectory/CatCard";
import { allCats } from "../components/CatDirectory/cats";

const CatDirectory = () => {
  const [cats, setCats] = useState(allCats);

  const handleCatSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = {
      name: formData.get("name") ?? "",
      age: formData.get("age") ?? "",
      image: formData.get("imageUrl") ?? "",
      description: formData.get("interests") ?? "",
    };
    const updatedCats = [...cats, obj];
    setCats(updatedCats);
    e.target.reset();
  };

  return (
    <div className="flex justify-center bg-gradient-to-br from-blue-50 to-purple-100 py-10">
      <div className="w-full max-w-lg flex flex-col items-center">
        <form onSubmit={handleCatSubmit} className="bg-white shadow-lg rounded-xl overflow-hidden w-full max-w-md">
          <h3 className="p-5 text-center text-2xl font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500">
            Create a Cat Profile
          </h3>
          <div className="p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Luna"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <div className="flex gap-4">
              <div className="w-1/4 flex flex-col gap-1">
                <label htmlFor="age" className="text-sm text-gray-700 font-semibold">Age</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <label htmlFor="imageUrl" className="text-sm text-gray-700 font-semibold">Image URL</label>
                <input
                  type="url"
                  id="imageUrl"
                  name="imageUrl"
                  placeholder="https://example-cat-image.com"
                  className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="interests" className="text-sm text-gray-700 font-semibold">Interests</label>
              <textarea
                id="interests"
                name="interests"
                placeholder="Loves to scratch"
                className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white text-lg font-semibold p-2 rounded-md w-full mt-4 transition-all">
              Create
            </button>
          </div>
        </form>
        <div className="mt-6 space-y-4">
          {cats.map((cat, index) => (
            <CatCard
              key={index}
              name={cat.name}
              age={cat.age}
              image={cat.image}
              description={cat.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatDirectory;
