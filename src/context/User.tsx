import { createContext, FC, useEffect, useState } from 'react';

interface UserContextProps {
  token: string;
  setToken: (token: string) => void;
}

export const UserContext = createContext<UserContextProps>({
  token: '',
  setToken: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const UserContextProvider: FC<Props> = ({ children }) => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
