import React, { useEffect, useState } from 'react';

function Mock_api() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                const data = await response.json();
                const foundUser = data.find(user => user.id === parseInt(userId));
                setUser(foundUser);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [userId]);

    const handleInputChange = (e) => {
        setUserId(e.target.value);
    };

    return (
        <div className="container d-flex align-items-center justify-content-center vh-100">
            <div>
                <p>Enter the Id to find the user</p>
                <input id='ipx' value={userId} onChange={handleInputChange} className="form-control mb-3" />
                {user ? (
                    <div>
                        <h2>User Details</h2>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default Mock_api;
