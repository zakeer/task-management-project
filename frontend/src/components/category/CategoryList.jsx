import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategories } from '../../store/category/actions';

export default function CategoryList() {
    const dispatch = useDispatch();
    const { categories = [], isLoading, hasError=true } = useSelector(state => state.category)

    useEffect(() => {
        getAllCategories(dispatch)();
    }, [dispatch])


    return <div className="max-h-[500px] overflow-y-auto
    [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:bg-white
    [&::-webkit-scrollbar-thumb]:bg-gray-100
    dark:[&::-webkit-scrollbar-track]:bg-slate-100
    dark:[&::-webkit-scrollbar-thumb]:bg-slate-300">
        {isLoading && <p className='flex text-xl mt-12 items-center justify-center'>Loading....</p>}
        {hasError && <p className='flex text-xl mt-12 items-center text-red-500 justify-center'>{hasError}</p>}
        <ul>
            {categories.map(({ id, name }) => <li key={id} className='border p-4 mb-2 m-2 hover:bg-slate-200 cursor-pointer transition'>{name}</li>)}
        </ul>
    </div>
} 