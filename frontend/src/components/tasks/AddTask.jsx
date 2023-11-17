import React, { useEffect, useMemo } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  getAllCategories } from '../../store/category/actions'
import { addTask, handleUpdateTask } from '../../store/task/actions'
import AddTaskSuccessPopUp from './TaskAdded'
import UpdateTaskSuccessPopUp from './TaskUpdated'

const AddTask = ({ edit }) => {
    const dispatch = useDispatch();
    const { categories = [] } = useSelector(state => state.category || {});
    const { isLoading, isNewTaskAdded,  hasError, taskItems = [] } = useSelector(state => state.tasks || {});
    const navigate = useNavigate();
    let { taskId } = useParams();

    useEffect(() => {
        getAllCategories(dispatch)();
    }, [dispatch])

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
       
        if(edit){
            handleUpdateTask(dispatch)({id:taskId, ...newTaskPayload})
            console.log(newTaskPayload, "FROM ADD TASK")
        } else {
            addTask(dispatch)(newTaskPayload);
        }
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
        <div className="max-w-lg mx-auto my-10 bg-slate-200 p-8 rounded-lg sm:shadow sm:border">

        
            <label htmlFor="category" className="block mb-2 text-lg font-medium text-gray-900 dark:text-slate-900">
                {edit ? 'Edit' : 'Add'} Task
            </label>
            {hasError && <h2 className="text-lg text-red-500  mb-2 text-gray-800 dark:text-red-500">
                {hasError}
            </h2>}
            <form onSubmit={onSubmit} noValidate>
                <div className="mb-4">
                    <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="bg-white border border-slate-900 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-slate-900 dark:placeholder-slate-900 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Title"
                        defaultValue={defaultValue?.title}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className="bg-white border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-slate-900 dark:placeholder-slate-900 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Description"
                        defaultValue={defaultValue?.description}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="dueDate" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">
                        Due Date
                    </label>
                    <input
                        type="date"
                        id="dueDate"
                        className="bg-white border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-slate-900 dark:placeholder-slate-900 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Due Date"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="priority" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">
                        Priority
                    </label>
                    <select
                        id="priority"
                        className="bg-white border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-slate-900 dark:placeholder-slate-900 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Due Date"
                        defaultValue="low"
                    >
                        <option value="low">low</option>
                        <option value="medium">medium</option>
                        <option value="high">high</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label htmlFor="categoryId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-slate-900">
                        Select Category
                    </label>
                    <select
                        defaultValue={defaultValue?.categoryId}
                        id="categoryId"
                        className="bg-white border border-blue-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-slate-900 dark:placeholder-gray-400 dark:text-slate-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Category"
                    >
                        <option value>Select</option>
                        {categories?.map(category => <option value={category.id}>{category.name}</option>)}
                    </select>
                </div>

                <button
                    type="submit"
                    className="text-white bg-blue-500 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
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
        <AddTaskSuccessPopUp />
        <UpdateTaskSuccessPopUp />
        </div>
    )
}

export default AddTask
