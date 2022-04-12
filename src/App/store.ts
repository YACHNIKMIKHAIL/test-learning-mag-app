import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {itemsReducer} from "../Features/ItemsReducer";
import {magActions} from "../Features/ItemsAction";
import {appActions, appReducer} from "./AppReducer";

const reducer = combineReducers({
    items: itemsReducer,
    app:appReducer
})

export type reducerType = ReturnType<typeof reducer>
export const store = createStore(reducer, applyMiddleware(thunk))
export type ActionsType =
    ReturnType<magReturnedActionsType<typeof magActions>>
    | ReturnType<magReturnedActionsType<typeof appActions>>

export type magReturnedActionsType<S> = S extends { [key: string]: infer T } ? T : never


export const useMagSelector: TypedUseSelectorHook<reducerType> = useSelector

export type magThunkType<ReturnType = void> = ThunkAction<ReturnType,
    reducerType,
    unknown,
    ActionsType>
// @ts-ignore
window.store = store