import { useContext, useState } from 'react';
import { useQuery } from 'react-query';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { UserContext } from '../../context/User';
import { login } from '../../utils/api';

const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyleForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyleInput = styled.input`
  margin: 1rem;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const StyleButton = styled.button`
  margin: 1rem;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background: none;
  border-radius: 4px;
`;

const Login = () => {
  const { setToken, token } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(username, password).then(({ token }) => {
      setToken(token);
      navigate('/');
    });
  };

  if (token) {
    return <StyleContainer>You are logged in</StyleContainer>;
  }

  return (
    <StyleContainer>
      <h1>Login</h1>
      <StyleForm onSubmit={handleSubmit}>
        <StyleInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyleInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyleButton type="submit">Login</StyleButton>
        <NavLink to="/signup">Sign up</NavLink>
      </StyleForm>
    </StyleContainer>
  );
};

export default Login;
