import './UserHeader.css';

function UserHeader() {
  return (
    <div className="user-header">
      <div className="user-header-background">
        <img src="" alt="" />
      </div>
      <div className="user-header-avatar">
        <img src="" alt="" />
      </div>
      <div className="user-header-user-container">
        <div className="user-header-user">
          <span className="user-header-username">Name</span>
          <span className="user-header-nickname">@Nickname</span>
        </div>
        <span className="user-header-text">Предприниматель и ментор по программированию</span>
        <div className="user-header-info">
          <ul>
            <li>
              <img src="src\components\svgUserHeader\location.svg" alt="" />
              <span>Местоположение</span>
            </li>
            <li>
              <img src="src\components\svgUserHeader\url.svg" alt="" />
              <span>Сайт</span>
            </li>
            <li>
              <img src="src\components\svgUserHeader\burhtday.svg" alt="" />
              <span>Дата рождения</span>
            </li>
          </ul>
        </div>
        <div className="user-header-btn-stats">
          <div className="user-header-statistics">
            <div className="user-header-stat">
              <span>{0}</span>
              <span>Сообщений</span>
            </div>
            <div className="user-header-stat">
              <span>{0}</span>
              <span>Читаемых</span>
            </div>
            <div className="user-header-stat">
              <span>{0}</span>
              <span>Читателей</span>
            </div>
          </div>
          <a className="user-header-btn-read" href="# ">Читать</a>
          <a className="user-header-btn-settings" href="# ">Редактировать профиль</a>
        </div>
      </div>
    </div>
  );
}

export default UserHeader;
