import React from 'react';
import { HttpResource } from './http';
import { User, Resource } from './core'
import UserTable from './UserTable';

function App() {
  const apiHost: string = "//localhost:8080";
  const userApi: Resource<User> = new HttpResource<User>(apiHost, 'users');

  return (
    <div className="App">
      <UserTable userApi={ userApi }/>
    </div>
  );
}

export default App;
