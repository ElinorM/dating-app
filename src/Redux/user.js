import { createSlice } from "@reduxjs/toolkit";

const { reducer, actions } = createSlice({
    name: "user",
    initialState: {
        username: "",
        password: "",
        name: "",
        age: "",
        gender: "",
        lookingFor: ""
    },
    reducers: {
      saveUser: (_ , { payload }) => payload,
    }
  });
  
  export const userReducer = reducer;
  export const userActions = actions;