import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postsSlice";

const PostView = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <h1>Posts are </h1>
      {postState.loading && <h1>Loading...</h1>}
      {!postState.loading && postState.posts.length ? (
        <ul>
          {postState.posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default PostView;
