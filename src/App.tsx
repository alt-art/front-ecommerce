import { Outlet } from 'react-router-dom';
import StyleContainer from './components/Container';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <StyleContainer><Outlet /></StyleContainer>
    </div>
  );
}

export default App;