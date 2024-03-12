import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch()

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(
        addTodo({
            title: value,
            resetInput: resetInput,
    }))
  };

  const resetInput = () => {
    setValue("");
  }

  return (
    <form onSubmit={onSubmit} className="mt-3 mb-3 flex items-center">
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="border border-gray-300 py-2 px-4 rounded-md mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Add todo..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
};

export default AddTodoForm;
