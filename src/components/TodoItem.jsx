import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete, deleteTodo, editTodo } from '../redux/todoSlice';

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteClick = () => {
    dispatch(toggleComplete({id: id, completed: !completed}));
  };

  const handleDeleteClick = () => {
        dispatch(deleteTodo({ id: id }));
  }
  
  const handleEditClick = () => {
    const newTitle = prompt("Enter new title:", title);
    if (newTitle !== null) {
        dispatch(editTodo({ id: id, title: newTitle }))
    }
  };

    return (
    <li
      className={`border p-3 mb-2 ${
        completed ? 'bg-green-100' : 'bg-white'
      } flex justify-between items-center`}
    >
      <span className="flex items-center">
        <input
          type="checkbox"
          className="mr-3 form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
          checked={completed}
          onChange={handleCompleteClick}
        />
        {title}
      </span>
      <div className='flex gap-5'>
      <button onClick={handleDeleteClick} className="bg-red-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-red-600">
        Delete
      </button>
      <button onClick={handleEditClick} className="bg-yellow-300 text-black py-2 px-4 rounded-md focus:outline-none hover:bg-yellow-400">
        Edit
      </button>
      </div>
    </li>
  );
};

export default TodoItem;
