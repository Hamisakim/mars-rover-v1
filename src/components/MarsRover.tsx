import React, { useState } from 'react';

const MarsRover: React.FC = () => {
  const [input, setInput] = useState('');

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">MarsRover</h1>
      <div className="my-4">
        <textarea
          className="w-full p-2 border rounded"
          rows={10}
          value={input}
          //TODO: Add onChange handler to update input state
          onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Rover Outputs</h2>
      </div>
    </div>
  );
};

export default MarsRover;
