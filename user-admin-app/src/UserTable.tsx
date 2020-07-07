import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Resource, User } from './core';

function UserTable({ userApi }: { userApi: Resource<User> }) {

  const [users, setUsers] = useState<Array<User>>([]);
  const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Role',
    dataIndex: 'role',
  },
  ];

  useEffect(() => {
    async function fetchUsers() {
      const users = await(userApi.fetch());
      setUsers(users);
    }

    fetchUsers();
  }, [userApi]);

  return (
    <Table dataSource={ users } columns={ userColumns }/>
    );
}

export default UserTable;
