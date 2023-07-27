import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import icecreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
import postReducer from "../features/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";

/*
const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("../features/cake/cakeSlice");
const icecreamReducer = require("../features/icecream/icecreamSlice");
// const logger = require("redux-logger").createLogger();
const userReducer = require("../features/user/userSlice");
const postReducer = require("../features/posts/postsSlice");
const commentsReducer = require("../features/comments/commentsSlice");
*/
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: icecreamReducer,
    users: userReducer,
    posts: postReducer,
    comments: commentsReducer,
  },
  // middleware: (getDefaultMiddeleware) => getDefaultMiddeleware().concat(logger),
});

export default store;
