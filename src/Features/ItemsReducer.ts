import {ActionsType} from "../App/store";
import {itemsActions} from "./ItemsAction";
import {ItemsType} from "../Api/MagAPI";

type InitialStateType=ItemsType[]

export const itemsReducer = (state= [] as InitialStateType, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case itemsActions.GET_ITEMS: {
            debugger
            console.log('itemsReducer')
            return [...action.items]
        }
        default:
            return state
    }
}



