import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom'

export const AuthRoute = ({ component, protectedRoute = true }) => {
    return (props) => {
        const token = useSelector(state => state.token);
        const Component = component;
        const redirectUrl = protectedRoute ? '/login' : '/';
        if(protectedRoute) {
            return token ? <Component {...props} /> : <Navigate to={redirectUrl} replace={true} /> 
        } 
        return token ? <Navigate to={redirectUrl} replace={true} />  : <Component {...props} />
    }
}

export default  AuthRoute;



