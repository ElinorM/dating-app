import { createSlice } from "@reduxjs/toolkit";

const createUser = (
    username, 
    password,
    name = "",
    age = "",
    gender = "",
    lookingFor = ""
    ) => ({
        username,
        password,
        name,
        age,
        gender,
        lookingFor
});

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
      registerUser: (_ , { payload: {username, password} }) => {
        return createUser(username, password) 
      },
      updateUser: (user , { payload: {name, age, gender, lookingFor}}) => {
          return {...user, name, age, gender, lookingFor}
      },
      loginUser: (_, { payload: {username, password,name, age, gender, lookingFor}}) => {
          return createUser(username, password,name, age, gender, lookingFor)
      }
    }
  });
  
  export const userReducer = reducer;
  export const userActions = actions;