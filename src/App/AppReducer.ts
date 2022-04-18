import {AxiosError} from "axios";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type ModeType = 'bye' | 'order' | 'admin'
type InitialAppStateType = {
    mode: ModeType,
    isLoad: boolean,
    error: string | AxiosError | null
    messageSended: boolean
}

const initialAppState: InitialAppStateType = {
    mode: 'bye',
    isLoad: false,
    error: null,
    messageSended: false
}

// export enum appActionsType {
//     CHANGE_MODE = 'CHANGE_MODE',
//     SET_LOAD = 'SET_LOAD',
//     SET_ERROR = 'SET_ERROR',
//     MASSAGE_SENDED = 'MASSAGE_SENDED',
// }

export const slice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        changeMode(state, action: PayloadAction<{ mode: ModeType }>) {
            // return {...state, mode: action.payload.mode}
            state.mode = action.payload.mode
        },
        setLoad(state, action: PayloadAction<{ v: boolean }>) {
            // return {...state, isLoad: action.payload.v}
            state.isLoad = action.payload.v
        },
        setError(state, action: PayloadAction<{ e: string | null }>) {
            // return {...state, error: action.payload.e}
            state.error = action.payload.e
        },
        sendedMessage(state, action: PayloadAction<{ v: boolean }>) {
            // return {...state, messageSended: action.payload.v}
            state.messageSended= action.payload.v
        },
    }
})
export const appReducer = slice.reducer
export const {changeMode, setLoad, setError, sendedMessage} = slice.actions

// export const appReducer = (state = initialAppState, action: ActionsType): InitialAppStateType => {
//     switch (action.type) {
//         case appActionsType.CHANGE_MODE: {
//             return {...state, mode: action.mode}
//         }
//         case appActionsType.SET_LOAD: {
//             return {...state, isLoad: action.v}
//         }
//         case appActionsType.SET_ERROR: {
//             return {...state, error: action.e}
//         }
//         case appActionsType.MASSAGE_SENDED: {
//             return {...state, messageSended: action.v}
//         }
//         default:
//             return state
//     }
// }


// type AppActionsType = ReturnType<magReturnedActionsType<typeof appActions>>

// export const appActions = {
//     changeMode: (mode: ModeType) => ({
//         type: appActionsType.CHANGE_MODE,
//         mode
//     } as const),
//     setLoad: (v: boolean) => ({
//         type: appActionsType.SET_LOAD,
//         v
//     } as const),
//     setError: (e: string | null) => ({
//         type: appActionsType.SET_ERROR,
//         e
//     } as const),
//     sendedMessage: (v: boolean) => ({
//         type: appActionsType.MASSAGE_SENDED,
//         v
//     } as const),
// }