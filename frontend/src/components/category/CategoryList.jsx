import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories, deleteCategory } from '../../store/category/actions';

export default function CategoryList() {
    const dispatch = useDispatch();
    const { categories = [] } = useSelector(state => state.category)
    const [editName, setEditName] = useState('')

    useEffect(() => {
        getAllCategories(dispatch)();
    }, [dispatch]);


    const handleDelete = (categoryId) => {
        dispatch(deleteCategory(dispatch)(categoryId))
    }

   

    return <div>
        List Of Categories
        <ul>
            {categories.map(({ id, name }) => (
            <li key={id}>
                {name}
              
             <button onClick={() => handleDelete(id)}>Delete</button>
                </li>))}
        </ul>
    </div>
    
} 