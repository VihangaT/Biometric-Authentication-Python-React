import React from 'react'
import { useCurrentUser } from '../hooks/useCurrentUSer'
import { Link } from 'react-router-dom';

export const Profile = () => {
    const {isLoading,isAuthorized,username}=useCurrentUser();

    function sendRequest(){
        fetch('/get-user-info')
        .then((res)=>res.json())
        .then((data)=>console.log(data))
    }






    if(isLoading) return null;

    if(!isAuthorized){
        return <p>You must <Link to ='/'>Login</Link> to view this page</p>
    }
    return (
        <div>
            <h1>You are signed in as <strong>{username}</strong></h1>
            <button onClick={sendRequest}>Send Request to the Backend</button>
        </div>
    )
}
