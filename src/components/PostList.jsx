import './PostList.css';
import Post from './Post.jsx';
import objPostList from './tempdb.js';

function PostList() {
  return (
    <div className="post-list">
      {objPostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
