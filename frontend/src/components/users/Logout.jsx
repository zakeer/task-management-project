import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { userLogout } from '../../store/user/actions';
import { clearAuthDetails } from '../../utils/auth';

export default function Logout() {
    const dispatch = useDispatch();
    useEffect(() => {
        clearAuthDetails();
        dispatch(userLogout());
    }, [])

    return <Navigate to="/" />
}