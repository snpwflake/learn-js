import './SettingsWrap.css';
import { Link } from 'react-router-dom';

function SettingsWrap() {
  return (
    <div className="settings-wrap">
      <span className="settings-wrap-header">Настройки</span>
      <ul>
        <li>
          <Link to="/settings">Настройки профиля</Link>
        </li>
        <li>
          <Link to="/settings/password">Сменить пароль</Link>
        </li>
        <li>
          <Link to="/settings/email">Сменить e-mail</Link>
        </li>
      </ul>
    </div>
  );
}

export default SettingsWrap;
