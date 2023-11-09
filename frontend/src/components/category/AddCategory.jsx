import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { createCategory } from '../../store/category/actions'

const AddCategory = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const saveCategory = async e => {
        e.preventDefault();
        createCategory(dispatch)(name);
        setName('');
    }

    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg sm:shadow sm:border">
            <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Add new category
            </label>
            <form onSubmit={saveCategory}>
                <div className="mb-6">
                    <input
                        type="text"
                        id="category"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Category name"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Save
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>
                </Link>
            </form>
        </div>
    )
}

export default AddCategory
