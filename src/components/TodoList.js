import React, { useState } from 'react';
import './TodoList.css';
import Todo from './Todo';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    task && setTodoList(addTask(task));
    setTask('');
  };

  const addTask = (task) => {
    let tasks = [
      ...todoList,
      {
        task: task,
        id: todoList.length + 1,
      },
    ];
    return tasks;
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (id) => {
    return setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='input-fields'>
        <input
          type='text'
          placeholder='Enter List'
          value={task}
          onChange={handleChange}
        />
        <input type='Submit' value='Add' />
      </div>
      {todoList.map((todo) => {
          return (
            <div className='tasks' key={todo.id}>
              <Todo todo={todo} onDelete={handleDelete} />
            </div>
          );
        })}
    </form>
  );
};

export default TodoList;
