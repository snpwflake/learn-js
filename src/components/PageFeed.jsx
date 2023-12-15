import ActualThemes from './ActualThemes.jsx';
import RecPublic from './RecPublic.jsx';
import PostLogic from './PostLogic.jsx';
import ProfileCard from './ProfileCard.jsx';
import { useState } from 'react';

function PageFeed() {
  // const [state, setState] = useState(document.querySelector('.header-li-1'));
  // console.log(state);
  return (
    <div className="app">
      <div className="app-container">
        <PostLogic />
      </div>
      <div className="app-container-second">
        <ProfileCard />
        <ActualThemes />
        <RecPublic />
      </div>
    </div>
  );
}

export default PageFeed;
