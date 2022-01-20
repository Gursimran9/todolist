import React from 'react';
import { FaTimes } from 'react-icons/fa';
import './Todo.css';

const Todo = ({ todo, onDelete }) => {
  return (
    <div className='todolist'>
      <h1>
        {todo.task}
        <FaTimes onClick={() => onDelete(todo.id)} />
      </h1>
    </div>
  );
};

export default Todo;
