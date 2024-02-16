import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { Storage } from '../utils/Storage';

// Create the AuthContext
const AuthContext = createContext();

// Create a custom hook to use the AuthContext
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your app and provide authentication context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initial state is no user
  const [error, setError] = useState('')

  const loginUser = (email, password) => {
    setError(null)
    const users = Storage.get("users");
    if (!users?.length > 0) {
      return null;
    }
    const foundUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );
    if (foundUser) {
      Storage.set("auth", foundUser);
      setUser(foundUser);
    } else {
      setError('Could not find user')
    }
  }
  const registerUser = (userData) => {
    setError(null)
    console.log("🚀 ~ registerUser ~ userData:", userData)
    const users = Storage.get("users") || [];
    const id = "user" + new Date().toISOString();
    const user = { ...userData, id }
    users.push(user);
    console.log("🚀 ~ registerUser ~ users:", users)
    Storage.set("users", users);
    Storage.set("auth", user);
    setUser(user);
  }

  // Function to log out a user
  const logout = () => {
    Storage.remove('auth');
    setUser(null);
  };

  // Value object to be provided by the context
  const contextValue = {
    user,
    loginUser, registerUser,
    logout,
    error
  };

  useEffect(() => {
    setUser(Storage.get('auth'))
  }, [])

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object
}