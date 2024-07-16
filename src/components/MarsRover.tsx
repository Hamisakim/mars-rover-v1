import React, { useState } from 'react';
import { validateInput, executeInput } from '../utils/roverLogic';

const MarsRover: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>('');

  const handleSubmit = () => {
    setError(null);
    try {
      if (!validateInput(input)) {
        setError('Invalid input');
        return;
      }
      const result = executeInput(input);
      setOutput(result);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">MarsRover</h1>
      <p>
        Enter the plateau size, rover position and instructions in the following
        format:
        <span className="font-bold">
          <br />
          Number Number <br />
          Number Number Heading
          <br />
          Instructions
        </span>
        <br />

       Note:  Case sensitive, don't leave trailing spaces!
      </p>
      <div className="my-4">
        <textarea
          className="w-full p-2 border rounded"
          aria-label="Rover Inputs"
          rows={10}
          value={input}
          placeholder="Enter input..."
          onChange={(e) => setInput(e.target.value)}
        />
        <p className={`text-xl ${error ? 'text-red-500' : 'text-green-500'}`}>
          Status: {error ? error : output ? 'Success' : ''}
        </p>
        <button
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <button
          className="m-2 px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => {
            setInput('');
            setError(null);
            setOutput('');
          }}
        >
          Reset
        </button>
      </div>
      <div className="my-4">
        <h2 className="text-xl font-semibold">Rover Outputs</h2>
        <textarea
          className="w-full p-2 border rounded"
          aria-label="Rover Outputs"
          rows={10}
          value={output}
          readOnly
        />
      </div>
    </div>
  );
};

export default MarsRover;
