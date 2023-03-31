import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [loginData, setLoginData] = useState({
        mobileNumber: "",
        password: ""
    })
    const [err, setErr] = useState(false)

    function handleMobile(e) {
        setLoginData({
            ...loginData, mobileNumber: e.target.value
        })

    }
    function handlepass(e) {
        setLoginData({
            ...loginData, password: e.target.value
        })

    }
    async function handleSubmit(event) {
        event.preventDefault();
        if (loginData.mobileNumber === "" || loginData.password === "") {
            setErr(true)
        } else {
            setErr(false)
        }
        console.log("clicked")
        setLoginData({
            mobileNumber: "",
            password: ""
        })
        // navigate('/')

        // https://dev123.gigin.ai/abc/index.php/Api_controller/login_email

        // {
        //     "email" : "emailforapi@gigin.ai",
        //         "password" : "65$az"
        // }


        let ans = await fetch('https://dev123.gigin.ai/abc/index.php/Api_controller/login_email', {
            method: "POST", headers: { 'Content-Type': "application/json" }, body: JSON.stringify({
                email: loginData.mobileNumber,
                password: loginData.password
            })
        })
        const res = await ans.json()
        if (res.status === "success") {
            navigate('/')
        }
        else { setErr(true) }


    }
    return (
        <div className='login_page'>
            <form onSubmit={handleSubmit} method='POST' action='index.php'>
                <input type='text' onChange={handleMobile} placeholder='Enter Mobile Number' value={loginData.mobileNumber} />
                <input type='password' onChange={handlepass} placeholder='Enter Your Password' value={loginData.password} />
                {err ? <div>Please filled All fields</div> : null}
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login