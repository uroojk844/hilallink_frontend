const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  editProfile: false,
  switchProfile: false,
  auth: false
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
    }
   
  },
});

export const {
  showEdit,
  hideEdit,
  showSwitch,
  hideSwitch,
  showAuth,
  hideAuth
} = editProfileSlice.actions;

export default editProfileSlice.reducer;
