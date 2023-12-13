/* eslint-disable react/prop-types */
import './ProfileCard.css';

function ProfileCard({ user }) {
  user = {
    img: '',
    username: 'Timur',
    nickname: '@basyrov',
    messages: 423,
    follows: 1444,
    followers: 123,
  };
  const {
    img, username, nickname, messages, follows, followers,
  } = user;
  return (
    <div className="profile-card-container">
      <div className="profile-card-header">
        <img src={img} alt="profile" />
        <div className="profile-card-user">
          <span className="profile-card-username">{username}</span>
          <span className="profile-card-nickname">{nickname}</span>
        </div>
      </div>
      <div className="profile-card-statistics">
        <div className="profile-card-stat">
          <span>{messages}</span>
          <span>Сообщений</span>
        </div>
        <div className="profile-card-stat">
          <span>{follows}</span>
          <span>Читаемых</span>
        </div>
        <div className="profile-card-stat">
          <span>{followers}</span>
          <span>Читателей</span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
