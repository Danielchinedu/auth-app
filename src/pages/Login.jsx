import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        address: '',
        age: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, phone, address, age, password } = formData;

        
        if (!username || !phone || !address || !age || !password) {
            toast.error('All fields are required!');
            return;
        }
        if (isNaN(phone) || phone.length < 10) {
            toast.error('Enter a valid phone number (min 10 digits)!');
            return;
        }
        if (isNaN(age) || age <= 0) {
            toast.error('Age must be a positive number!');
            return;
        }

        
        localStorage.setItem('authToken', 'dummyAuthToken');
        localStorage.setItem('userProfile', JSON.stringify(formData));
        toast.success('Login Successful!');
        navigate('/dashboard');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <Toaster />
            <form
                className="w-full max-w-sm bg-white shadow-lg p-5 rounded-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Login
                </h2>
                {['username', 'phone', 'address', 'age', 'password'].map((field, index) => (
                    <div key={field} className="mb-4">
                        <label
                            htmlFor={field}
                            className="block mb-1 text-gray-700 capitalize"
                        >
                            {field}
                        </label>
                        <input
                            id={field}
                            type={field === 'password' ? 'password' : field === 'age' || field === 'phone' ? 'number' : 'text'}
                            name={field}
                            className="w-full border border-gray-300 px-3 py-2 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            placeholder={`Enter your ${field}`}
                            aria-label={`Enter your ${field}`}
                            onChange={handleInputChange}
                            autoFocus={index === 0}
                        />
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition duration-200"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
