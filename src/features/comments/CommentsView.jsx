import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchComments } from "./commentsSlice";

const CommentsView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  const commentsState = useSelector((state) => state.comments);
  const { loading, error, comments } = commentsState;
  return (
    <div>
      <h1>Comments are </h1>
      {loading && <h1>Loading...</h1>}
      {!loading && error ? <div>Error : {error.message}</div> : null}
      {!loading && comments.length ? (
        <ul>
          {comments.map((comment) => {
            return <li key={comment.id}> {comment.body} </li>;
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default CommentsView;
