import { createContext, useReducer, useContext } from "react";

import { InitialState, reducer } from "./AppReducer";

export const AppStateContext = createContext();
export const AppDispatcherContext = createContext();

export const useAppState = () => {
  const context = useContext(AppStateContext);

  if (!context) {
    throw Error("useAppState Must be Used With a AppContextProvider.");
  }

  return context;
};

export const useAppDispatcher = () => {
  const context = useContext(AppDispatcherContext);

  if (!context) {
    throw Error("useAppDispatcher Must be Used With a AppContextProvider.");
  }

  return context;
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatcherContext.Provider value={dispatch}>
        {children}
      </AppDispatcherContext.Provider>
    </AppStateContext.Provider>
  );
};
