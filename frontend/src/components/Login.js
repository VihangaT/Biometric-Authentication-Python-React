import React from 'react'
import "@passageidentity/passage-auth"
export const Login = () => {
    return (
        <div className="container">
            <h1>Biometric Login</h1>
            <passage-auth app-id={process.env.REACT_APP_PASSAGE_APP_ID}></passage-auth>
        </div>
    )
}
