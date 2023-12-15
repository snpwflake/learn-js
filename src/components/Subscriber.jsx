/* eslint-disable react/button-has-type */
import './Subscriber.css';

function Subscriber() {
  return (
    <>
      <div className="subscriber">
        <img src="" alt="" />
        <div className="subscriber-container">
          <div className="subscriber-div">
            <div className="subscriber-user">
              <span className="subscriber-username">Никнейм</span>
              <span className="subscriber-nickname">@nickaname</span>
            </div>
            <button className="subscriber-read">Читать</button>
          </div>
          <span className="subscriber-status">Делаю ставки</span>
        </div>
      </div>
      <hr className="subscriber-hr" />
    </>
  );
}

export default Subscriber;
