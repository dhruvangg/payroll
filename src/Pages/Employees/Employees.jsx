import { Link } from "react-router-dom";
import { Page } from "../../Components/Layout";

export default function Employees() {
    return (
        <Page>
            <div className="max-w-screen-lg w-full mx-auto flex justify-between pt-8">
                <h1 className="text-2xl font-bold">Employees</h1>
                <Link to={'/employees/new'} className="bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-semibold">Add an Employee</Link>
            </div>
            <table className="mt-8 max-w-screen-lg w-full mx-auto  divide-y divide-gray-200">
                <thead className="border-b-2">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left font-semibold">Name</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold">Status</th>
                        <th scope="col" className="px-6 py-3 text-left font-semibold">Action</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-100 cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-indigo-700">John Doe</td>
                        <td className="flex items-center px-6 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <span className="ml-1">Done</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={'/employees/new'}>Edit</Link>
                        </td>
                    </tr>
                    <tr className="hover:bg-gray-100 cursor-pointer">
                        <td className="px-6 py-4 whitespace-nowrap font-semibold text-indigo-700">Jane Doe</td>
                        <td className="flex items-center px-6 py-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-green-500">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>
                            <span className="ml-1">Done</span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <Link to={'/employees/new'}>Edit</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Page>
    )
}
