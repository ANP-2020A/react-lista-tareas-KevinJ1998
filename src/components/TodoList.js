import React, { useState } from 'react';

const TodoList = () => {

  const [ tasks, setTasks ] = useState( [] );
  const [ completedTask, setCompletedTask ] = useState( [] );

  const handleAddTask = () => {
    const titleTask = document.querySelector( '#titleTask' ).value;
    const status = 'pending';
    const newTask = {
      titleTask,
      status
    };
    setTasks( ( prevState ) => [
      ...prevState,
      newTask
    ] );
  };

  const handleCompleteTask = ( value ) => {
    const newTasks = tasks;
    newTasks[ value ].status = 'completed';
    const compTask = newTasks.filter( ( task, index ) => task.status === 'completed' );
    setCompletedTask( () =>
      compTask
    );
    handleRemoveTask( value );
  };

  const handleRemoveTask = ( value ) => {
    const newTasks = tasks.filter( ( task, index ) => value !== index );
    setTasks( () => newTasks );
  };


  return (
    <div>
      <div>
        <h1>Lista de tareas pendientes({ tasks.length })</h1>
        <label htmlFor='titleTask'>Título tarea</label>
        <input type='text' id='titleTask' />
        <button onClick={ handleAddTask }>Añadir tarea</button>
      </div>
      <ul>
        {
          tasks.map( ( task, index ) => (
            <li key={ `task-${ index }` }>{ task.titleTask }
              <button onClick={ () => handleRemoveTask( index ) }>Eliminar</button>
              <button onClick={ () => handleCompleteTask( index ) }>Completada</button>
            </li>
          ) )
        }
      </ul>
      <div>
        <h1>Lista de tareas completadas ({ completedTask.length })</h1>
        <ul>
          {
            completedTask.map( ( task, index ) => (
              <li key={ `taskc-${ index }` }>{ task.titleTask }</li>
            ) )
          }
        </ul>
      </div>
    </div>
  );

};

export default TodoList;
