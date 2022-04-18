import {combineReducers} from "redux";
import magThunk from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {itemsReducer} from "../Features/ItemsReducer";
import {appReducer} from "./AppReducer";
import {configureStore} from "@reduxjs/toolkit";

const reducer = combineReducers({
    items: itemsReducer,
    app:appReducer
})

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .prepend(
                magThunk,
            ),
})

export type reducerType = ReturnType<typeof reducer>
export const useMagSelector: TypedUseSelectorHook<reducerType> = useSelector

// @ts-ignore
window.store = store