const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  editProfile: false,
  createPost: false,
  userProfile: false,
};

const editProfileSlice = createSlice({
  name: "toggles",
  initialState,
  reducers: {
    showEdit: (state) => {
      state.editProfile = true;
    },
    hideEdit: (state) => {
      state.editProfile = false;
    },

    showCreate: (state) => {
      state.createPost = true;
    },
    hideCreate: (state) => {
      state.createPost = false;
    },
    showProfile: (state) => {
      state.userProfile = true;
    },
    hideProfile: (state) => {
      state.userProfile = false;
    },
  },
});

export const {
  showEdit,
  hideEdit,
  showCreate,
  hideCreate,
  showProfile,
  hideProfile,
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
