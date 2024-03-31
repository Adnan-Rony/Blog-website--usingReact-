import React from 'react';
import UseAuthForm from './UseAuthForm';

const SignIn = () => {
    return (
        <div>
            <p>{<UseAuthForm type="sign-in"/>}</p>
        </div>
    );
};

export default SignIn;