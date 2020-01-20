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
      registerUser: (_ , { payload }) => payload,
      updateUser: (user , { payload: {name, age, gender, lookingFor}}) => {
          return {...user, name, age, gender, lookingFor}
      },
      loginUser: (_, { payload }) => payload,
    }
  });
  
  export const userReducer = reducer;
  export const userActions = actions;