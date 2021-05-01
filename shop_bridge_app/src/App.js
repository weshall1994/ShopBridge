import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/app.css'
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
import MessagePopUps from './Common/Componets/MessagePopUps';
export const appContext = React.createContext();
function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const [isAuthFailed, setIsAuthFailed] = useState(false);
  async function authUser(userCredentials) {
    if (userCredentials.username === "Admin" || userCredentials.username === "Customer") {
      setIsUserAuthenticated(true)
    }
    else {
      setIsAuthFailed(true)
      setTimeout(() => {
        setIsAuthFailed(false)
      }, 3000)
    }
  }
  return (
    <div>
      {isUserAuthenticated &&
        <appContext.Provider value={{ isUserAuthenticated, setIsUserAuthenticated }}>
          <BrowserRouter>

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
