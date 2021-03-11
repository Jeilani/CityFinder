import React from "react"
import Dashboard from "./Components/Dashboard"
import {CSSTransition} from "react-transition-group"
import Login from "./Components/Login"
import "./CSS/App.css"

function App () {
  const [whichPage, setWhichPage] = React.useState("Dashboard")

  return (
    <div className="App">
        <CSSTransition
                in={whichPage === "Login"}
                timeout={{
                  appear: 300,
                  enter: 300,
                  exit: 300
                }}
                classNames="login"
                unmountOnExit={true}
                appear={true}
                mountOnEnter={true}
                onExit={()=>setWhichPage("Dashboard")}
        >
          <Login setWhichPage={setWhichPage}/>
        </CSSTransition>
        <CSSTransition
                in={whichPage==="Dashboard"}
                timeout={{
                  appear: 300,
                  enter: 300,
                  exit: 300
                }}
                classNames="dashboardmain"
                unmountOnExit={true}
                appear={true}
                mountOnEnter={true}
                onExit={()=>setWhichPage("Login")}
          >
          <Dashboard setWhichPage={setWhichPage}/>
        </CSSTransition>
    </div>
  );
}

export default App;
