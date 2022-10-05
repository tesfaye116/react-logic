import { useState, useEffect } from "react"
import axios from "axios"

const UserData = () => {
    const [user, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await axios.get("https://gorest.co.in/public/v2/users")
                console.log(result)
                setUsers(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])


    return (
        <>
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map(item => (
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.name}
                                    </th>
                                    <td className="py-4 px-6">
                                        {item.email}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.gender}
                                    </td>
                                    <td className="py-4 px-6">
                                        {item.status}
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>

        </>
    )
}

export default UserData