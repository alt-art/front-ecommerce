import { createContext, FC, useState } from 'react';

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
