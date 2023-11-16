import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory } from '../../store/category/actions'
import AddCategorySuccessPopUp from './CategoryAddedPopUp'

const AddCategory = () => {
    const [name, setName] = useState('');
    const { hasError } = useSelector(state => state.category);

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
            {hasError && <p className='mb-4 text-center text-red-500 text-lg'>{hasError}</p>}
            <form onSubmit={saveCategory}>
                <div className="mb-6">
                    <input
                        type="text"
                        id="category"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="border-b border-blue-500 text-sm  block w-full p-2.5 focus:border border-blue-600"
                        placeholder="Category name"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="text-white shadow-2xl bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus:ring-blue-700 dark:border-blue-700">
                    Save
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-blue-300 focus:outline-none hover:bg-blue-400 focus:ring-2 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-500 dark:text-white dark:border-blue-500 dark:hover:bg-blue-400 dark:hover:border-blue-400 dark:focus:ring-blue-500">
                        Cancel
                    </button>
                </Link>
            </form>
            <AddCategorySuccessPopUp />
        </div>
    )
}

export default AddCategory
