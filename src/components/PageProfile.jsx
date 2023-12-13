import PostList from './PostList.jsx';
import UserHeader from './UserHeader.jsx';
import ActualThemes from './ActualThemes.jsx';
import RecPublic from './RecPublic.jsx';

function PageProfile() {
  return (
    <div className="app">
      <div className="app-container">
        <UserHeader />
        <PostList />
      </div>
      <div className="app-container-second">
        <ActualThemes />
        <RecPublic />
      </div>
    </div>
  );
}

export default PageProfile;
