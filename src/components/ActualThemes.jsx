/* eslint-disable jsx-a11y/anchor-is-valid */
import './ActualThemes.css';

function ActualThemes() {
  return (
    <div className="actual-themes-container">
      <span className="actual-themes-header">Актуальные темы</span>
      <div className="actual-themes-list">
        <Theme />
        <Theme />
        <Theme />
        <Theme />
        <Theme />
      </div>
    </div>
  );
}

function Theme() {
  return (
    <div className="actual-themes-item" id={111}>
      <a href="#">
        #javascript
      </a>
      <span>2 941 сообщениe</span>
    </div>
  );
}

export default ActualThemes;
