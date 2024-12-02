import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const userProfile = JSON.parse(localStorage.getItem('userProfile'));
    const username = userProfile?.username || 'User';

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold">Welcome, {username}!</h1>
            <Link to="/profile" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                Go to Profile
            </Link>
        </div>
    );
};

export default Dashboard;
