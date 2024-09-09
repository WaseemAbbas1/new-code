import React, { createContext, useReducer } from "react";
export const AuthContext = createContext();
const initialValue = { isAuth: false, user: {} };
const reducer = (state, { type, payload }) => {
  
    console.log("payload",payload)
    console.log("state",state)
    switch (type) {
    case "SET_LOGGED_IN":
      return { isAuth: true, user: payload};
    case "SET_LOGGED_OUT":
      return initialValue;
    default:
      return state;
  }
};
export default function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
