import React from "react"
import Dashboard from "./Components/Dashboard"
import Login from "./Components/Login"
import "./CSS/App.css"

function App () {
  const [whichPage, setWhichPage] = React.useState("Login")

  const renderPage = () => {
    switch (whichPage){
      case "Dashboard":
        return <Dashboard setWhichPage = {setWhichPage}/>
      case "Login":
        return <Login setWhichPage = {setWhichPage}/>
      default:
        return <Login setWhichPage = {setWhichPage}/>
    }
  }

  return (
    <div className="App">
      {renderPage()}
    </div>
  );
}

export default App;
