/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import './PostInput.css';
import { useState } from 'react';

function PostInput() {
  const [height, setHeight] = useState(0);
  const [count, setCount] = useState('');
  const [y1, setY1] = useState(0);
  const [displayStatus, setDisplayStatus] = useState('none');
  let y2 = 0;
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const style = {
    '--p': (count.length) / 3.6,
  };

  function onStartClick(event) {
    const { clientY } = event.changedTouches[0];
    setY1(() => clientY);
  }

  function onMoveClick(event) {
    const { clientY } = event.changedTouches[0];
    y2 = clientY - y1;
    if (y2 < 0) {
      setHeight(() => 0);
    } else {
      setHeight(() => y2);
    }
  }

  function onEndClick(event) {
    const blockHeight = event.target.clientHeight;
    if (height * 3 >= blockHeight) {
      setHeight(() => blockHeight);
      setDisplayStatus(() => 'none');
    } else {
      setHeight(() => 0);
    }
  }

  function openModalPostAdd() {
    setHeight(() => 0);
    setDisplayStatus(() => 'flex');
  }

  return (
    <>
      <div className="post-add-open" onClick={openModalPostAdd}><img src="src\components\svgPost\post.svg" alt="addPost" /></div>
      <div className="post-add-background" />
      <div className="post-add" onTouchStart={onStartClick} onTouchMove={onMoveClick} onTouchEnd={onEndClick} style={{ '--h': `${height}px`, display: displayStatus }}>
        <div className="post-add-close-button" />
        <textarea placeholder="Что нового, name?" className="post-input-text" required value={count} onChange={handleChange} maxLength="360" />
        <div className="post-add-footer">
          <button className="add-img-in-post" type="button" aria-label="file-select"><img src="src\components\svgHeader\photo.svg" alt="" /></button>
          <div className="post-add-button">
            <div className="text-length-first" style={style}>
              <div className="text-length-second">{count.length}</div>
            </div>
            <button className="post-send" type="submit">Отправить</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostInput;
