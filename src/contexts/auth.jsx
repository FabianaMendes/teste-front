import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
    
        if (storagedToken && storagedUser) {
          setUser(JSON.parse(storagedUser));
          api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
      }, []);
      
    async function Login(loginData) {
        const response = await api.post('/user/login', loginData);
        setUser(response.data);
        api.defaults.headers.Authorization = `Bearer ${response.data.id}`;
        localStorage.setItem('@App:user', JSON.stringify(response.data.name));
        localStorage.setItem('@App:token', response.data.id);
    }

    function Logout() {
        setUser(null);
        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:token');
    }

    


    return (
        <AuthContext.Provider value={{logged: Boolean(user), user, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };