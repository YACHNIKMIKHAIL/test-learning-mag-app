import {ActionsType, magReturnedActionsType} from "./store";
import {magActions} from "../Features/ItemsAction";

export type ModeType = 'bye' | 'order' | 'admin'
type InitialAppStateType = {
    mode: ModeType,
    isLoad: boolean
}

const initialAppState: InitialAppStateType = {
    mode: 'bye',
    isLoad: false
}
export const appReducer = (state = initialAppState, action: ActionsType): InitialAppStateType => {
    switch (action.type) {
        case appActionsType.CHANGE_MODE: {
            return {...state, mode: action.mode}
        }
        case appActionsType.SET_LOAD: {
            return {...state, isLoad: action.v}
        }
        default:
            return state
    }
}

export enum appActionsType {
    CHANGE_MODE = 'CHANGE_MODE',
    SET_LOAD = 'SET_LOAD',
}

// type AppActionsType = ReturnType<magReturnedActionsType<typeof appActions>>

export const appActions = {
    changeMode: (mode: ModeType) => ({
        type: appActionsType.CHANGE_MODE,
        mode
    } as const),
    setLoad: (v: boolean) => ({
        type: appActionsType.SET_LOAD,
        v
    } as const),
}