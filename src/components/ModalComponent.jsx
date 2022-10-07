import axios from "axios";
import { useState } from "react";
import "../index.css";

const ModalComponent = ({ users, setUsers }) => {
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    gender: "",
    status: false
  });
 
  console.log(users);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:4000/users/", {
        name : form.name,
        email: form.email,
        gender: form.gender,
        status: form.status,
      })
      .then((res) => {
        setShowModal(false);
        setUsers([...users,  res.data] )
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          className=" bg-blue-500 mt-3  text-white active:bg-dark-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 bg-dark"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <i className="fas fa-user-plus mr-1"></i>
          <span>Register</span>
        </button>
      </div>
      {showModal ? (
        <>
          <div className="mt-11 flex-grow-0 justify-end items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none top-0 left-0 right-0 bottom-0 animate-opacity">
            <div className="relative w-auto my-1 mx-auto max-w-2xl">
              {/*content*/}
              <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none animate-zoom">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-gray-200">
                  <h3 className="text-2xl text-gray-800 font-bold">
                    <small>Register</small>
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-1 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-1 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <i className="fas fa-times"></i>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form , name : e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-state"
                        value={form.gender}
                        onChange={(e) => setForm({ ...form, gender: e.target.value })}                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="status"
                      >
                        Status
                      </label>
                      <div className="flex">
                        <input
                          className="mr-2 leading-tight bg-gray-200"
                          type="checkbox"
                          id="status"
                          value={form.status}
                          onChange={(e) => setForm({ ...form, status: e.target.value })}                        />
                        <label className="text-sm" htmlFor="status">
                          {form.status ? "Active" : "Inactive"}
                        </label>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button
                        className="w-full bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                        type="submit"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ModalComponent;