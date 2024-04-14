import { useState } from "react";
import CreateUsers from "../../components/form/CreateUsersForm";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="bg-gray-200 h-screen flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Probando el tailwind en el componente Home
        </h1>
        <div className="bg-white p-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold">Funciona</h1>
          <p className="text-gray-600">
            Un dia... Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, illo.
          </p>
        </div>
        <div className="bg-white p-4 rounded-md shadow-md mt-4">
          <h1 className="text-2xl font-bold">Contador</h1>
          <p className="text-gray-600">Count: {count}</p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded-md ml-2"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>

          <CreateUsers/>
        </div>
      </div>
    </>
  );
}
