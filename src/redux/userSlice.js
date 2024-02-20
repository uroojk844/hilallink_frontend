import { database } from "@/utils/firebase";
import axios from "axios";
import { collection, getDocs, limit, query, where } from "firebase/firestore";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  user: {},
  error: "",
};

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  const user = localStorage.getItem("user");
  const ref = collection(database, "users");
  let q = query(ref, where("uid", "==", user), limit(1));
  let data = await getDocs(q);
  return data.docs[0]?.data();
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
      state.user = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
export const {removeUser} = userSlice.actions