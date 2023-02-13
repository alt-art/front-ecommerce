import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../../context/User";
import { signUp } from "../../utils/api";

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

const SignUp = () => {
  const { token } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUp(username, password, email).then(() => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 3;
    const isValidUsername = username.length >= 3;
    const isValidConfirmPassword = password === confirmPassword;
    const isValid =
      isValidEmail &&
      isValidPassword &&
      isValidUsername &&
      isValidConfirmPassword;
    const emailMessage = isValidEmail ? "" : "Invalid email";
    const passwordMessage = isValidPassword
      ? ""
      : "Password must be at least 3 characters";
    const usernameMessage = isValidUsername
      ? ""
      : "Username must be at least 3 characters";
    const confirmPasswordMessage = isValidConfirmPassword
      ? ""
      : "Passwords do not match";
    setError(
      [
        emailMessage,
        passwordMessage,
        usernameMessage,
        confirmPasswordMessage,
      ].join(".")
    );
    setButtonDisabled(!isValid);
  }, [password, username, confirmPassword, email]);

  useEffect(() => {
    setError(error.replace(/\.+/g, ". ").trim());
  }, [error]);

  if (token) {
    return <StyleContainer>You are logged in</StyleContainer>;
  }

  return (
    <StyleContainer>
      <h1>Sign Up</h1>
      <StyleForm onSubmit={handleSubmit}>
        <StyleInput
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <StyleInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <StyleInput
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyleInput
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <StyleButton disabled={buttonDisabled} type="submit">
          Sign Up
        </StyleButton>
        <p>{error}</p>
      </StyleForm>
    </StyleContainer>
  );
};

export default SignUp;
