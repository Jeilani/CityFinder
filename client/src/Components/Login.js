import React from "react"
import "../CSS/LoginPage.css"

const Login = props => {
    const setWhichPage = props.setWhichPage
    return (
        <div className="loginPage">
                <div className="mainLoginContent">
                    <h1>City Search</h1>
                    <h3>Create an account or login to chat with people who are looking to move in your area/apartment building and visa versa</h3>
                    <h3>Apartment Hunt will let you interact anyone across the country so you can learn about the place you want to move to</h3>
                </div>
                <div className="sideLoginContent">
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
                </div>
        </div>
    )
}

export default Login