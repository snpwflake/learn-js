import './RecPublic.css';

function RecPublic() {
  return (
    <div className="rec-publics-container">
      <span className="rec-publics-header">Рекомендации для вас</span>
      <div className="rec-publics-list">
        <Public />
        <Public />
        <Public />
      </div>
    </div>
  );
}

function Public() {
  return (
    <div className="rec-publics-item">
      <img className="rec-publics-img" src="" alt="" />
      <div className="rec-publics-body">
        <p className="rec-publics-name">Популярная механика</p>
        <span className="rec-publics-nickname">@Хуяблик</span>
      </div>
      <a href="/read" className="rec-publics-follow">Читать</a>
    </div>
  );
}

export default RecPublic;
