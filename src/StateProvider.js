import React, {createContext, useContext, useReducer} from "react";

export const StateContest = createContext();

export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContest.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContest.Provider>
); 

export const useStateValue = () => useContext(StateContest);