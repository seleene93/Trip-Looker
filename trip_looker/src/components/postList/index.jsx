import "./style.css";
import { Post } from "../post";

export const PostList = ({ posts, setPosts, error }) => {
  return posts.length ? (
    <ul className="post-list">
      {posts.map((post) => {
        return (
          <Post post={post} posts={posts} setPosts={setPosts} key={post.id} />
        );
      })}
    </ul>
  ) : (
    <ErrorMessage message={error} />
  );
};
