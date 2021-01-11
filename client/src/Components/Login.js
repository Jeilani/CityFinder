import React from "react"
import "../CSS/LoginPage.css"

const Login = props => {
    const setWhichPage = props.setWhichPage
    const [loginForm, setLoginForm] = React.useState(true)

    const renderLoginForm = () => {
        if (loginForm){
            return (
                <form>
                <h1>Login</h1>
                <input
                type="text"
                placeholder="Username"
                >
                </input>
                <input
                type="password"
                placeholder="Password"
                >
                </input>
                <button
                type="submit"
                onClick={()=>setWhichPage("Dashboard")}
                >
                    Login
                </button>
            </form>
            )
        } else {
            return (
                <form>
                <h1>Sign Up</h1>
                <input
                type="text"
                placeholder="Location">

                </input>
                <input
                type="text"
                placeholder="Username"
                >
                </input>
                <input
                type="text"
                placeholder="Email"
                ></input>
                <input
                type="password"
                placeholder="Password"
                >
                </input>
                <button
                type="submit"
                onClick={()=>setWhichPage("Dashboard")}
                >
                    Login
                </button>
            </form>
            )
        }
    }

    return (
        <div className="loginPage">
                <div className="mainLoginContent">
                    <h1 className="">City Search</h1>
                    <h3>Create an account or login to chat with people who are looking to move in your area/apartment building and visa versa</h3>
                    <h3>Apartment Hunt will let you interact anyone across the country so you can learn about the place you want to move to</h3>
                </div>
                <div className="sideLoginContent">
                    <div className="loginToggle">
                        <p onClick = {()=>setLoginForm(!loginForm)} className={`loginOption ${loginForm ? 'active': ''}`}>Login</p>
                        <p onClick={()=>setLoginForm(!loginForm)}className={`loginOption ${loginForm ? '': 'active'}`}>Sign Up</p>
                    </div>
                {renderLoginForm()}
                </div>
        </div>
    )
}

export default Login