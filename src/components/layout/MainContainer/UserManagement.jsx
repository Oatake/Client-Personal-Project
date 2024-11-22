import React, { useEffect, useState } from "react";
import TableMember from "./Component/TableMember";
import axios from "axios";

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const resp = await axios.get("http://localhost:8000/user/");
    setUsers(resp.data);
  };
  const removeUser = async (userId) => {
    try {
      const resp = await axios.delete(`http://localhost:8000/user/${userId}`);
      console.log(resp);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
    console.log("users : ", users);
  }, []);
  return (
    <div className="flex-1 mx-auto">
      <TableMember
        users={users}
        removeUser={removeUser}
        setUsers = {setUsers}
      />
    </div>
  );
}
