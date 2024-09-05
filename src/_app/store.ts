import {MiddlewareArray, configureStore} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import { listSlice} from '../_features';
// import logger from 'redux-logger'

const rootReducer = combineReducers({
  list: listSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
