import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTaskList, handleDeleteTask } from '../../store/task/actions';
import { Link } from 'react-router-dom'
import DeleteTaskSuccessPopup from './TaskDeleted';

export default function TaskList() {
	const { taskItems = [], isLoading } = useSelector(state => state?.tasks)
	const dispatch = useDispatch();

	useEffect(() => {
		fetchAllTaskList(dispatch)();
	}, [dispatch])

	var handleOnClick = (id) => {
		handleDeleteTask(dispatch)(id)
	}

    

	return <div>
		<div className="container mx-auto p-4 mt-2 ">
			<secion className="flex justify-between items-center">
			<h2 className="text-2xl font-bold mb-4">Tasks</h2>
			<Link
				to="/add-task"
				className="text-slate-900 text-xl border-0 focus:outline-none hover:text-slate-500 hover:underline hover:transition rounded text-lg"
			>
				Add Task
			</Link>
			</secion>
			{isLoading && <p className='flex justify-center items-center text-xl'>Loading.....</p>
				

			}
			<ul className="mt-4">
				{(taskItems || []).map(task => (
					<li key={task.id} className="border p-4 mb-2">
						<Link to={`/tasks/edit/${task.id}`} className="text-blue-500">
							{task.title}
						</Link>
						<button
							onClick={() => handleOnClick(task.id)}
							className="float-right bg-red-500 text-white px-2 py-1 rounded"
						>
							Delete
						</button>
					</li>
				))}
			</ul>
			<DeleteTaskSuccessPopup />
		</div>
	</div>
} 