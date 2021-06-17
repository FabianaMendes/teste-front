import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [logged, setLogged] = useState(false);
    
    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedToken = localStorage.getItem('@App:token');
    
        if (storagedToken && storagedUser) {
          setUser(JSON.parse(storagedUser));
          setLogged(true);
          api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        }
      }, []);

    async function Login(loginData) {
        try {
            const response = await api.post('/user/login', loginData);
            setUser(response.data);
            setLogged(true);
            localStorage.setItem('@App:user', JSON.stringify(response.data));
            localStorage.setItem('@App:token', response.data.id);
            api.defaults.headers.Authorization = `Bearer ${response.data.id}`;
        } catch(error) {
            alert(`Usuário ou senha inválidos!`);
        }
    }

    function Logout() {
        setUser(null);
        setLogged(false);
        localStorage.removeItem('@App:user');
        localStorage.removeItem('@App:token');
    }

    return (
        <AuthContext.Provider value={{logged, user, Login, Logout}}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };