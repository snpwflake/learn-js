/* eslint-disable react/prop-types */
import './Post.css';

function Post({ post }) {
  const {
    id, img, username, nickname, timecreate, text, repost, like, save,
  } = post;
  return (
    <div className="post" id={id}>
      <img className="post-user-img" src={img} alt="" />
      <div className="post-container">
        <div className="post-header">
          <div className="post-user">
            <span className="post-username">{username}</span>
            <span className="post-nickname">{nickname}</span>
          </div>
          <div className="post-time-create">{timecreate}</div>
        </div>
        <span className="post-text">{text}</span>
        <div className="post-stats-container">
          <div className="post-stat">
            <img src="src\components\svgPost\repost.svg" alt="" />
            <span>{repost}</span>
          </div>
          <div className="post-stat">
            <img src="src\components\svgPost\like.svg" alt="" />
            <span>{like}</span>
          </div>
          <div className="post-stat">
            <img src="src\components\svgPost\save.svg" alt="" />
            <span>{save}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
