import { useState } from 'react';

type AuthUser = {
    name : string;
    email : string;
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser);

    const handleLogin = () => {
        setUser({
            name : 'sdfsdf',
            email : 'dgdfgdfg@gmail.com'
        })
    }

    return (
        <div>
            <button onClick={handleLogin}>login</button>
            <div>UserName : {user.name}</div>
            <div>Email : {user.email}</div>
        </div>
    )
}