import React from "react"
import Dashboard from "./Components/Dashboard"
import {CSSTransition} from "react-transition-group"
import Login from "./Components/Login"
import "./CSS/App.css"

function App () {
  const [whichPage, setWhichPage] = React.useState("Login")

  if (whichPage === "Login") return <Login setWhichPage={setWhichPage}/>
  else return <Dashboard setWhichPage={setWhichPage}/>
}

export default App;
