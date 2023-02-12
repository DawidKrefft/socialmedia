import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: state => {
      // first state.mode represents prev condition
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
    setLogin: (state, action) => {
      // sending user parameter from this function
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: state => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('user friends do not exist');
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map(post => {
        if (post._id === action.payload.post_id) {
          return action.payload.post;
        }
        return post;
      });
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;