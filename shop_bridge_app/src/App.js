import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/app.css'
import LoginForm from './LoginForm';
import { BrowserRouter } from 'react-router-dom';
export const appContext = React.createContext();
function App() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  async function authUser(userCredentials) {
    setIsUserAuthenticated(true)
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
    </div>
  );
}

export default App;
