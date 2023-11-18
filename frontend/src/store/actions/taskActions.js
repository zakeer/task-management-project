// taskActions.js
import axios from '../../services/api';

export const fetchTasks = () => async (dispatch) => {
  try {
    const response = await axios.get('/tasks'); // Replace with your API endpoint
    dispatch({ type: 'FETCH_TASKS', payload: response.data });
  } catch (error) {
    console.error('Fetch Tasks Error:', error);
  }
};

export const addTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post('/tasks', taskData); // Replace with your API endpoint
    dispatch({ type: 'ADD_TASK', payload: response.data });
  } catch (error) {
    console.error('Add Task Error:', error);
  }
};

export const deleteTask = (taskId) => async (dispatch) => {
  try {
    await axios.delete(`/tasks/${taskId}`); // Replace with your API endpoint
    dispatch({ type: 'DELETE_TASK', payload: taskId });
  } catch (error) {
    console.error('Delete Task Error:', error);
  }
};
