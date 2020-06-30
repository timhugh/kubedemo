import React from 'react';
import { HttpResource } from './http';
import { User, Resource } from './core'
import UserTable from './UserTable';

function App() {
  const userApi: Resource<User> = new HttpResource<User>('//api.kubedemo.local/user-service', 'users');

  return (
    <div className="App">
      <UserTable userApi={ userApi }/>
    </div>
  );
}

export default App;
