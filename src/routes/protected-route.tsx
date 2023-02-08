import React from 'react';
import { Navigate } from 'react-router-dom';
import { getItem } from '../utils';

type Props = {
	children: any
};

const ProtectedRoute = ({ children }: Props) => {
    
	const token = getItem('clientToken');
	if (token) {
		return children;
	}
	return <Navigate to={'/'} replace />;
};


export  const NotProtectedRoute = ({children}:Props)=>{
    const token = getItem('clientToken');
    if(token){
        return <Navigate to={'/users-dashboard'} replace />;
    }
    return children;
}

export default ProtectedRoute;