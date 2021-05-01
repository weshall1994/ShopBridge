import React, { useEffect, useState } from 'react';
import './App.css';
import './styles/app.css'
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import MessagePopUps from './Common/Componets/MessagePopUps';
import SideBar from './Components/Sidebar/SideBar';
export const appContext = React.createContext();

function App() {

  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isAuthFailed, setIsAuthFailed] = useState(false);
  const [user, setUser] = useState("")

  async function authUser(userCredentials) {
    if (userCredentials.username === "Admin" || userCredentials.username === "Customer") {
      setIsUserAuthenticated(true)
      setUser(userCredentials.username)
    }
    else {
      setIsAuthFailed(true)
      setTimeout(() => {
        setIsAuthFailed(false)
      }, 3000)
    }
  }
  useEffect(() => {
    console.log("isUserAuthenticated", isUserAuthenticated)
  }, [])
  return (
    <div>
      {isUserAuthenticated &&
        <appContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated, user }}>
          <BrowserRouter>
            <SideBar />
          </BrowserRouter>
        </appContext.Provider>
      }
      {!isUserAuthenticated &&
        <LoginForm authUser={authUser} />
      }
      {isAuthFailed &&
        <MessagePopUps
          messageText={"Username or Password Incorrect..."}
          messageType={""} />
      }

    </div>
  );
}

export default App;
