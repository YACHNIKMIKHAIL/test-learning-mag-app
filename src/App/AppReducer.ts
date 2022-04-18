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

export const slice = createSlice({
    name: 'app',
    initialState: initialAppState,
    reducers: {
        changeMode(state, action: PayloadAction<{ mode: ModeType }>) {
            state.mode = action.payload.mode
        },
        setLoad(state, action: PayloadAction<{ v: boolean }>) {
            state.isLoad = action.payload.v
        },
        setError(state, action: PayloadAction<{ e: string | null }>) {
            state.error = action.payload.e
        },
        sendedMessage(state, action: PayloadAction<{ v: boolean }>) {
            state.messageSended= action.payload.v
        },
    }
})
export const appReducer = slice.reducer
export const {changeMode, setLoad, setError, sendedMessage} = slice.actions