import axios from "axios";
import { useState, useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import ModalComponent from "./ModalComponent";

const UserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editUser, setEditUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await axios.get("http://localhost:4000/users");
      setLoading(false);
      setUsers(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await axios.delete(`http://localhost:4000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async (id) => {
    const user = users.find((user) => user.id === id) || {};
    console.log(user);
    setEditUser(user);
    setEditModal(true);
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          className=" bg-blue-600 mt-3 mr-1 text-white active:bg-dark-600 font-bold uppercase text-sm  px-5 py-2 rounded shadow  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-dark"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-user-plus mr-1"></i>
          <small>Register</small>
        </button>
      </div>

      {/* Modal component  */}
      <div className="flex justify-end mb-2">
        <ModalComponent
          users={users}
          setUsers={setUsers}
          showModal={showModal}
          setShowModal={setShowModal}
          editModal={editModal}
          setEditModal={setEditModal}
          editUser={editUser}
          setEditUser={setEditUser}
        />
      </div>

      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="overflow-x-auto relative mt-1 flex justify-center align-middle">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xm  text-gray-900 uppercase bg-gray-200  dark:bg-gray-100 dark:text-white">
              <tr>
                <th scope="col" className="py-3 px-6">
                  SN
                </th>
                <th scope="col" className="py-3 px-6">
                  Name
                </th>
                <th scope="col" className="py-3 px-6">
                  Email
                </th>
                <th scope="col" className="py-3 px-6">
                  Gender
                </th>
                <th scope="col" className="py-3 px-6">
                  Status
                </th>
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((item) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={item.id}
                  >
                    <td className=" font-medium text-gray-900 whitespace-nowrap dark:text-white py-4 px-6">
                      {item.id}
                    </td>
                    <th
                      scope="row"
                      className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="py-4 px-6 text-sm leading-5 text-gray-500 dark:text-gray-400">
                      {item.email}
                    </td>
                    <td className="py-4 px-6">{item.gender}</td>
                    <td className="py-4 px-6">
                      {item.status ? (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800">
                          Active
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-red-100 text-red-800">
                          Inactive
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6 flex justify-left">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="font-medium text-blue-600"
                      >
                        <i className="fa fa-pen"></i>
                      </button>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="font-medium ml-3 text-red-500"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td
                    colSpan="6"
                    className="text-center text-gray-500 dark:text-gray-400"
                  >
                    <i className="fa fa-frown"></i> No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserData;
