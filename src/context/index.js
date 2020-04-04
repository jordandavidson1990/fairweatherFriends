import React, { useContext, useReducer } from "react";
import Reducer from "./reducer";

export const Context = React.createContext();

const defaultState = {
  page: ""
};

export function createProvider() {
  return function Provider({ children }) {
    const [state, dispatch] = useReducer(Reducer, defaultState);
    return (
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    );
  };
}

export function useStore() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error("useStore must be used within context provider");
  }
  return context;
}

export function useSelector(fn) {
  const { state } = useStore();
  return fn(state);
}

export function useDispatch() {
  const { dispatch } = useStore();
  return dispatch;
}
