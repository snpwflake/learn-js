/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import SettingsWrap from './SettingsWrap.jsx';

function PageSettingsEmail() {
  return (
    <div className="app">
      <div className="app-container">
        <span className="settings-header">Сменить e-mail</span>
        <div className="change-password-container">
          <div className="change-password-input">
            <label htmlFor="">Новый e-mail</label>
            <input type="text" />
          </div>
          <div className="change-password-input">
            <label htmlFor="">Пароль для подтверждения</label>
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

export default PageSettingsEmail;
