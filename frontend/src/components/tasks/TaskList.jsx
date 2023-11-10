import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllTaskList } from '../../store/task/actions';

export default function TaskList() {
    const taskState = useSelector(state => state?.tasks)
    const dispatch = useDispatch();

    useEffect(() => {
        fetchAllTaskList(dispatch)();
    }, [])


    return <div>
        <pre>{JSON.stringify(taskState, null, 2)}</pre> 
    </div>
} 