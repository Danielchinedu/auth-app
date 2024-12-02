import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Profile = () => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const userProfile = JSON.parse(localStorage.getItem('userProfile'));
        setProfile(userProfile || {});
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        localStorage.setItem('userProfile', JSON.stringify(profile));
        toast.success('Profile updated successfully!');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Toaster />
            <form className="w-full max-w-sm bg-white shadow-lg p-5 rounded" onSubmit={handleUpdate}>
                <h2 className="text-2xl font-bold mb-4">Update Profile</h2>
                {Object.keys(profile).map((field) => (
                    <div key={field} className="mb-3">
                        <label className="block mb-1 capitalize">{field}</label>
                        <input
                            type="text"
                            name={field}
                            value={profile[field]}
                            className="w-full border px-3 py-2 rounded"
                            onChange={handleInputChange}
                        />
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
                    Update Profile
                </button>
            </form>
        </div>
    );
};

export default Profile;
