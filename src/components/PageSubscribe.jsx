import './PageSubscribe.css';
import SubscriberList from './SubscriberList.jsx';
import UserHeader from './UserHeader.jsx';
import ActualThemes from './ActualThemes.jsx';
import RecPublic from './RecPublic.jsx';

function PageSubscribe() {
  return (
    <div className="app">
      <div className="app-container">
        <UserHeader />
        <SubscriberList />
      </div>
      <div className="app-container-second">
        <ActualThemes />
        <RecPublic />
      </div>
    </div>
  );
}

export default PageSubscribe;
