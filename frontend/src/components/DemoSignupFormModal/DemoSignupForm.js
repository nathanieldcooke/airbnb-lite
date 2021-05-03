import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { csrfFetch } from "../../store/csrf";
import * as sessionActions from "../../store/session";
import { useSelector } from 'react-redux'
import './DemoSignupForm.css';
function DemoSignupFormPage() {

    function getRandNumBetween(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailArr, setEmailArr] = useState(`demo-user${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}@random.com`.split(''));
    const [usernameArr, setUsernameArr] = useState(`demo-user${getRandNumBetween(1, 10)}${getRandNumBetween(1, 10)}`.split(''));
    const [passwordArr, setPasswordArr] = useState("1234abcd".split(''));
    const [confirmPasswordArr, setConfirmPasswordArr] = useState("1234abcd".split(''));

    const [errors, setErrors] = useState([]);

    const handleSubmit = async () => {
        setErrors([]);
        await dispatch(sessionActions.demoSignup({ email, username, password, confirmPassword }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            });
    };

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const updateFunc = async () => {
        await sleep(100)
        if (emailArr.length) {
            setEmail(email + emailArr[0])
            setEmailArr(emailArr.slice(1, emailArr.length))
        } else if (usernameArr.length) {
            console.log(2)
            setUsername(username + usernameArr[0])
            setUsernameArr(usernameArr.slice(1, usernameArr.length))
        } else if (passwordArr.length) {
            console.log(3)
            setPassword(password + passwordArr[0])
            setPasswordArr(passwordArr.slice(1, passwordArr.length))
        } else if (confirmPasswordArr.length) {
            console.log(4)
            setConfirmPassword(confirmPassword + confirmPasswordArr[0])
            setConfirmPasswordArr(confirmPasswordArr.slice(1, confirmPasswordArr.length))
        } else {
            handleSubmit()
        }
    }
    
    useEffect(()=> {
        updateFunc()
    }, [emailArr, usernameArr, passwordArr, confirmPasswordArr])

    return (
        <div 
        onClick={e => e.stopPropagation()}
        className='demo-form__container'>
            <form className='demo-form__signup' onSubmit={handleSubmit}>
                <ul>
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <label>
                    Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Username
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Confirm Password
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

export default DemoSignupFormPage;