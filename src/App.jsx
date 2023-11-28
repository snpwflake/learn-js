import './App.css';
import PostLogic from './components/PostLogic.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import ActualThemes from './components/ActualThemes.jsx';
import RecPublic from './components/RecPublic.jsx';

function App() {
  return (
    <div className="app-container">
      <PostLogic />
      <div className="app-container-second">
        <ProfileCard />
        <ActualThemes />
        <RecPublic />
      </div>
    </div>
  );
}

export default App;
