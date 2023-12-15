/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './PageSettingsPassword.css';
import SettingsWrap from './SettingsWrap.jsx';

function PageSettingsPassword() {
  return (
    <div className="app">
      <div className="app-container">
        <span className="settings-header">Сменить пароль</span>
        <div className="change-password-container">
          <div className="change-password-input">
            <label htmlFor="">Старый пароль</label>
            <input type="text" />
          </div>
          <div className="change-password-input">
            <label htmlFor="">Новый пароль</label>
            <input type="text" />
          </div>
          <div className="change-password-input">
            <label htmlFor="">Подтверждение пароля</label>
            <input type="text" />
          </div>
          <button>Сохранить</button>
        </div>
      </div>
      <div className="app-container-second">
        <SettingsWrap />
      </div>
    </div>
  );
}

export default PageSettingsPassword;
