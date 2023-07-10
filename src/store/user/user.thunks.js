// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { setLoggedIn, setLoggedOut, setError } from "./login.slice";
// import { setUser } from "./user.slice";

// export const loginUser = createAsyncThunk(
//   "user/login",
//   async ({ username, password }, { dispatch }) => {
//     try {
//       const response = await axios.post("http://localhost:4200/login", {
//         username,
//         password,
//       });
//       dispatch(setUser(response.data));
//       dispatch(setLoggedIn());
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   }
// );

// export const logoutUser = createAsyncThunk(
//   "user/logout",
//   async (_, { dispatch }) => {
//     try {
//       await axios.post("http://localhost:4200/logout");
//       dispatch(setUser(null));
//       dispatch(setLoggedOut());
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   }
// );

// export const getUser = createAsyncThunk(
//   "user/getUser",
//   async (_, { dispatch }) => {
//     try {
//       const response = await axios.get("http://localhost:4200/user");
//       dispatch(setUser(response.data));
//     } catch (error) {
//       dispatch(setError(error.message));
//     }
//   }
// );
