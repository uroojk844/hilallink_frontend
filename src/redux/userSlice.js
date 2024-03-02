const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  user: {
    name: "Urooj Khan",
    username: "uroojk844",
  },
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const response = await fetch("/api/my", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ uid: "mZbJkF7NfbNM30UPP1qFQQ4cFav1" }),
  });
  const data = await response.json();
  return data

});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.user = {};
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const { removeUser } = userSlice.actions;
