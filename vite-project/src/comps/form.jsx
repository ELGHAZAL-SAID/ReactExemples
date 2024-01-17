// FormComponent.jsx
import React, { useMemo, memo, useState } from 'react';
import InputComponent from './input';

const FormMemo = memo(function FormComponent(){

    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const Security = useMemo(()=>{
        return checkPasswordLength(password)
    },[password])
    
    //-------------------------------------------------
    //Use the Throw error to test the ErrorBoundary
    // throw new Error('This is an intentional error');
    //-------------------------------------------------
    
    return (
        <form>
            
            <InputComponent label="Email" type="email" value={email} onChange={handleEmailChange} />
            <InputComponent label="Password" type="password" value={password} onChange={handlePasswordChange} />
            <div>
                your Password is : {Security}
            </div>
        </form>

    );
});

const checkPasswordLength = (password) => {
    let startTime = performance.now();
    while (performance.now() - startTime < 200) {
    }
    if (password.length < 4 && password.length>0) 
        return 'Weak'
    else if (password.length > 4 && password.length < 8)
        return 'Medium'
    else if (password.length> 8)
        return 'Strong'
    else
        return 'empty'
};

export default FormMemo;
