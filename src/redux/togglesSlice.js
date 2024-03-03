const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  editProfile: false,
  switchProfile: false,
  auth: false,
  createPost:false
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
    showSwitch: (state) => {
      state.switchProfile = true;
    },
    hideSwitch: (state) => {
      state.switchProfile = false;
    },
    showAuth: (state) => {
      state.auth = true
    },
    hideAuth: (state) => {
      state.auth = false
    },
    showCreate:(state) =>{
      state.createPost = true
    },
    hideCreate:(state) =>{
      state.createPost = false
    }
   
  },
});

export const {
  showEdit,
  hideEdit,
  showSwitch,
  hideSwitch,
  showAuth,
  hideAuth,
  showCreate,
  hideCreate
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
