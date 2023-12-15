/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './PageSettingsProfile.css';
import SettingsWrap from './SettingsWrap.jsx';

function PageSettingsProfile() {
  return (
    <div className="app">
      <div className="app-container">
        <span className="settings-header">Редактировать профиль</span>
        <div className="settings-profile-container">
          <div className="setting-profile-header">
            <div className="setting-profile-name-nickname">
              <div className="settings-input-container">
                <label htmlFor="">Ваше имя</label>
                <input className="setting-profile-name" type="text" />
              </div>
              <div className="settings-input-container">
                <label htmlFor="">Никнейм</label>
                <input className="setting-profile-name" type="text" />
              </div>
            </div>
            <div className="setting-profile-img">
              <img className="setting-profile-img-1" src="" alt="" />
              <img className="setting-profile-img-2" src="src\components\svgHeader\photo.svg" alt="" />
            </div>
          </div>
          <div className="settings-input-container">
            <label htmlFor="">О себе</label>
            <input className="setting-profile-name" type="text" />
          </div>
          <div className="settings-input-container">
            <label htmlFor="">Геолокация</label>
            <input className="setting-profile-name" type="text" />
          </div>
          <div className="settings-profile-footer">
            <div className="settings-input-container">
              <label htmlFor="">День рождения</label>
              <input className="setting-profile-name" type="text" />
            </div>
            <div className="settings-input-container">
              <label htmlFor="">Показывать дату рождения</label>
              <input className="setting-profile-name" type="text" />
            </div>
          </div>
          <button className="settings-profile-save">Сохранить</button>
        </div>
      </div>
      <div className="app-container-second">
        <SettingsWrap />
      </div>
    </div>
  );
}

export default PageSettingsProfile;
