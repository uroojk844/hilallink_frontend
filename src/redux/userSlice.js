import { database } from "@/utils/firebase";
import { doc, getDoc } from "firebase/firestore";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
    const docref = doc(database, "user", localStorage.getItem('user'))
    const docsnap = await getDoc(docref)
    return docsnap.data()
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
      state.user = {}
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const {removeUser} = userSlice.actions