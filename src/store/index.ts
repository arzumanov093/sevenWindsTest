import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
    authReducer: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof rootReducer>