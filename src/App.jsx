import CakeView from "./features/cake/CakeView";
import CommentsView from "./features/comments/CommentsView";
import IcecreamView from "./features/icecream/IcecreamView";
import PostView from "./features/posts/PostView";
import UserView from "./features/user/UserView";

function App() {
  return (
    <>
      <CakeView />
      <IcecreamView />
      <PostView />
      <UserView />
      <CommentsView />
    </>
  );
}

export default App;
