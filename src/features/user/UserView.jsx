import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const userState = useSelector((state) => state.users);
  const { loading, users, error } = userState;
  return (
    <div>
      <h1>Users are </h1>
      {loading && <h1>Loading...</h1>}
      {!loading && error ? <p>{error.message}</p> : null}
      {!loading && users.length ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;
