import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useContext } from 'react';
import { UserContext } from '../../context/User';
import Modal from 'react-modal';
import { deleteUser, getUser } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import StyleContainer from '../../components/Container';

const StyleDeleteButton = styled.button`
  margin: 1rem 0;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #e75959;
  background: #ff0000;
  color: #fff;
  border-radius: 4px;
`;

const StyleLogoutButton = styled.button`
  margin: 1rem 0;
  height: 2rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  background: none;
  border-radius: 4px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem
`;

const Profile = () => {
  const { token, setToken } = useContext(UserContext);
  const { data: user } = useQuery('user', () => getUser(token), {
    enabled: !!token,
  });
  const navigate = useNavigate();

  if (!token) {
    navigate('/login');
  }

  const handleDelete = () => {
    deleteUser(token).then(() => {
      localStorage.removeItem('token');
      setToken('');
      navigate('/');
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/');
  };

  return (
    <div>
      <h1>Profile</h1>
      <p>{user?.username}</p>
      <p>{user?.email}</p>
      <p>
        {user?.first_name} {user?.last_name}
      </p>
      <ButtonContainer>
        <StyleDeleteButton onClick={handleDelete}>Delete Account</StyleDeleteButton>
        <StyleLogoutButton onClick={handleLogout}>Logout</StyleLogoutButton>
      </ButtonContainer>
    </div>
  );
};

export default Profile;
