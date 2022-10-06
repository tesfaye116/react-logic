import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingComponent from "./LoadingComponent";
import ModalComponent from "./ModalComponent";

const UserData = () => {
  const [user, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await axios.get("http://localhost:4000/users");
      setLoading(false);
      setUsers(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ModalComponent />
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="overflow-x-auto relative mt-1">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
            <thead className="text-xm  text-gray-700 uppercase bg-blue-200  dark:bg-gray-700 dark:text-white">
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
                  post
                </th>
              </tr>
            </thead>
            <tbody>
              {user.map((item) => (
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
                  <td className="py-4 px-6">
                    <Link>
                      <pre className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium leading-5 bg-green-100 text-green-800 cursor-pointer">
                        <svg
                          className="w-5 h-5 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                        See more
                      </pre>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default UserData;
