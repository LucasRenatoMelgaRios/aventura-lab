import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  user: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const verifySession = () => {
      try {
        const sessionData = localStorage.getItem('session');
        if (sessionData) {
          const { user, timestamp } = JSON.parse(sessionData);
          
          // Verificar si la sesión ha expirado (opcional)
          const sessionDuration = 24 * 60 * 60 * 1000; // 24 horas
          const isExpired = Date.now() - timestamp > sessionDuration;
          
          if (!isExpired) {
            setUser(user);
          } else {
            localStorage.removeItem('session');
          }
        }
      } catch (error) {
        console.error("Error al verificar sesión:", error);
        localStorage.removeItem('session');
      }
    };

    verifySession();
  }, []);

  const login = async (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      const sessionData = {
        user: username,
        timestamp: Date.now()
      };
      localStorage.setItem('session', JSON.stringify(sessionData));
      setUser(username);
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('session');
    setUser(null);
    navigate('/login');
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};