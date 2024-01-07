import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProtectedRoute = (props) => {
    const { Component } = props;
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getOtem('token');
        if (!token) {
            navigate('login')
        }
    }, [])

    return (
        <>
            <Component />
        </>
    )
}
export default ProtectedRoute;