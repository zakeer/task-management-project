import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTaskList, taskDeletion } from '../../store/task/actions'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function TaskList() {
    const navigate = useNavigate()
    const { taskItems = [], isLoading, isTaskDeleted } = useSelector(state => state?.tasks)
    const dispatch = useDispatch()

    useEffect(() => {
        fetchAllTaskList(dispatch)()
    }, [])

    useEffect(() => {
        if (isTaskDeleted) {
            setTimeout(() => {
                fetchAllTaskList(dispatch)()
            }, 2000)
        }
    }, [isTaskDeleted])

    const handleDeleteTask = async taskId => {
        try {
            await taskDeletion(dispatch)(taskId)
        } catch (error) {
            console.error('Error deleting task:', error)
        }
    }

    return (
        <div>
            <div className="container mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                <Link to="/add-task" className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    Add Task
                </Link>

                {isLoading && 'Tasks are loading...'}
                <ul className="mt-4">
                    {(taskItems || []).map(task => (
                        <li key={task.id} className="border p-4 mb-2">
                            <Link to={`/tasks/edit/${task.id}`} className="text-blue-500">
                                {task.title}
                            </Link>
                            <button
                                onClick={() => {
                                    handleDeleteTask(task.id)
                                }}
                                className="float-right bg-red-500 text-white px-2 py-1 rounded">
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>

                {isTaskDeleted && (
                    <div className="fixed bottom-0 end-0 z-[60] max-w-sm w-full mx-auto p-6">
                        <div className="p-4 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <div className="flex gap-x-5">
                                <div className="grow">
                                    <h2 className="text-lg text-red-500 font-semibold text-gray-800 dark:text-white">Deleted</h2>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Task deleted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
