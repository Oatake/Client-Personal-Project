import axios from "axios";
import React, { useEffect, useState } from "react";

export default function TableMember(props) {
  const { users, removeUser, setUsers } = props;
  const [roleIndicator, setRoleIndicator] = useState({});

  
  const createRoleIndicator = () => {
    const initialIndicator = users.reduce((prev, curr) => {
      const roleStatus = { ...curr.Role }; // Copy the Role object
      delete roleStatus.id; // Remove the role ID if you don't need it
      prev[curr.id] = roleStatus; // Associate role status with user ID
      return prev;
    }, {});
    // console.log("Initial Role Indicator:", initialIndicator); // Debugging line
    setRoleIndicator(initialIndicator);
  };
  
  useEffect(() => {
    createRoleIndicator();
  }, [users]); // Run when users change

  const checkHandler = (e) => {
    const id = e.target.id; // User ID
    const name = e.target.name; // Role name (e.g., isAdmin)
    const value = e.target.checked; // Get the checkbox value (true/false)

    setRoleIndicator((prev) => ({
      ...prev,
      [id]: {
        ...prev[id], // Retain existing role statuses
        [name]: value, // Update the specific role
      },
    }));
  };

  const updateUser = async (id,roleId) => {
    try {
      const body = {id:id, roleId:roleId, role:roleIndicator[id]}
      const resp = await axios.patch("http://localhost:8000/user/",body)
    } catch (error) {}
  };

  return (
    <div className="px-4 py-4">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-center">
              <th rowSpan={2}></th>
              <th rowSpan={2}>ID</th>
              <th rowSpan={2}>UserName</th>
              <th colSpan={4}>Permission</th>
              <th colSpan={2} className="">
                Remove/Update
              </th>
            </tr>
            <tr className="text-center">
              <th>ADMIN</th>
              <th>RECEPTION</th>
              <th>WAITER</th>
              <th>COOK</th>
              <th>REMOVE</th>
              <th>UPDATE</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((el, index) => {
              return (
                <tr className="hover text-center" key={index}>
                  <th>{index + 1}</th>
                  <td>{el.id}</td>
                  <td>{el.userName}</td>
                  <td>
                    <input
                      type="checkbox"
                      id={el.id}
                      name="isAdmin"
                      value={true}
                      checked={roleIndicator[el.id]?.isAdmin || false}
                      onChange={checkHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      id={el.id}
                      name="isReception"
                      value={true}
                      checked={roleIndicator[el.id]?.isReception || false}
                      onChange={checkHandler}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      id={el.id}
                      name="isButler"
                      value={true}
                      checked={roleIndicator[el.id]?.isButler || false}
                      onChange={checkHandler}
                    />
                  </td>
                  <td>
                    <input
                      id={el.id}
                      type="checkbox"
                      name="isKitchenHand"
                      value={true}
                      checked={roleIndicator[el.id]?.isKitchenHand || false}
                      onChange={checkHandler}
                    />
                  </td>
                  <td
                    className="cursor-pointer hover:underline"
                    onClick={() => removeUser(el.id)}
                  >
                    remove
                  </td>
                  <td
                    className="cursor-pointer hover:underline"
                    onClick={() => updateUser(el.id, el.Role.id)}
                  >
                    update
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
