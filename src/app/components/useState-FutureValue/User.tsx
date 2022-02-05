import { useState } from 'react';

type AuthUser = {
    name : string;
    email : string;
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name : 'sdfsdf',
            email : 'dgdfgdfg@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <button onClick={handleLogout}>logout</button>
            <div>UserName : {user?.name}</div>
            <div>Email : {user?.email}</div>
        </div>
    )
}