import React, { useState } from 'react';

const UserList = () => {
  const initialUsers = () => {
    console.log( 'inicializando estado' );
    return [
      {
        name: 'Kevin',
        lastName: 'Segovia'
      },
      {
        name: 'Nicole',
        lastName: 'Zambrano'
      },
      {
        name: 'Luis',
        lastName: 'Pazmiño'
      }
    ];
  };

  const [ users, setUsers ] = useState( () => initialUsers() );
  const [ count, setCount ] = useState( 0 );

  const handleAddUser = () => {
    const name = document.querySelector( '#name' ).value;
    const lastName = document.querySelector( '#lastname' ).value;
    const newUser = {
      name,
      lastName
    };
    setUsers( ( prevState ) => [
      ...prevState,
      newUser
    ] );
  };

  return (
    <div>
      <div>
        { count }
        <button onClick={ () => {setCount( count + 1 );} }>Sumar</button>
        <button onClick={ () => {setCount( 0 );} }>Resetear</button>
        <br/>
        <label htmlFor='name'>Nombre</label>
        <input type='text' id='name' />

        <label htmlFor='lastname'>Apellido</label>
        <input type='text' id='lastname' />

        <button onClick={ handleAddUser }>Agregar Usuario</button>
      </div>
      <ul>
        {
          users.map( ( user, index ) => (
            <li key={ `user-${ index }` }>{ user.name } { user.lastName }</li>
          ) )
        }
      </ul>
    </div>
  );


};

export default UserList;
