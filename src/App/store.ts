import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {itemsReducer} from "../Features/ItemsReducer";
import {magActions} from "../Features/ItemsAction";

const reducer = combineReducers({
    items: itemsReducer
})

export type reducerType = ReturnType<typeof reducer>
export const store = createStore(reducer, applyMiddleware(thunk))
export type ActionsType = ReturnType<magReturnedActionsType<typeof magActions>>
export type magReturnedActionsType<S> = S extends { [key: string]: infer T } ? T : never


export const useMagSelector: TypedUseSelectorHook<reducerType> = useSelector
export type magThunkType<ReturnType = void> = ThunkAction<ReturnType,
    reducerType,
    unknown,
    ActionsType>
// @ts-ignore
window.store = store