import React, { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory, getAllCategories } from '../../store/category/actions'
import { addTask } from '../../store/task/actions'

const AddTask = ({ edit }) => {
    const dispatch = useDispatch();
    const { categories = [] } = useSelector(state => state.category || {});
    const { isLoading, isNewTaskAdded, hasError, taskItems = [] } = useSelector(state => state.tasks || {});
    const navigate = useNavigate();
    let { taskId } = useParams();
    useEffect(() => {
        getAllCategories(dispatch)();
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        if (isLoading) {
            return false;
        }
        const { target } = e;
        const newTaskPayload = [...target.querySelectorAll("input, select")].reduce((prev, curr) => {
            prev[curr.id] = curr.value
            return prev;
        }, {})
        addTask(dispatch)(newTaskPayload);
    }

    useEffect(() => {
        if (isNewTaskAdded) {
            setTimeout(() => {
                navigate('/tasks');
            }, 3000);
        }
    }, [isNewTaskAdded, navigate]);

    const defaultValue = useMemo(() => {
        if (!taskId) return {};
        return taskItems.find(task => task.id == taskId) || {}
    }, [taskItems, taskId]);


    return (
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-lg sm:shadow sm:border">

            {hasError && <h2 className="text-lg text-red-500 font-semibold text-gray-800 dark:text-white">
                {hasError}
            </h2>}
            <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                {edit ? 'Edit' : 'Add'} Task
            </label>
            <form onSubmit={onSubmit} noValidate>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                        defaultValue={defaultValue?.title}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Description"
                        defaultValue={defaultValue?.description}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Due Date"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Due Date"
                        defaultValue="low"
                    >
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select Category
                    </label>
                    <select
                        defaultValue={defaultValue?.categoryId}
                        id="categoryId"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Category"
                    >
                        <option value>Select</option>
                        {categories?.map(category => <option value={category.id}>{category.name}</option>)}
                    </select>
                </div>

                {/* <div className="mb-4">
                    <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Category
                    </label>
                    <select
                        id="priority"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Due Date"
                        defaultValue="low"
                    >

                    </select>
                </div> */}
                <button
                    type="submit"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    {edit ? 'Update' : 'Save'}
                </button>
                <Link to="/">
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        Cancel
                    </button>
                </Link>
            </form>

            {isNewTaskAdded && <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex gap-x-5">
                        <div className="grow">
                            <h2 className="text-lg text-green-500 font-semibold text-gray-800 dark:text-white">
                                Success
                            </h2>
                            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                                New Task Added
                            </p>
                        </div>
                    </div>
                </div>
            </div>}

        </div>
    )
}

export default AddTask
