import {ActionsType} from "../App/store";
import {itemsActions} from "./ItemsAction";
import {ItemsType} from "../Api/MagAPI";

type InitialStateType = {
    items: ItemsType[],
    byedItems: {
        bItems: ItemsType[],
        totalCoast: number
    }
}

const initialState = {
    items: [] as ItemsType[],
    byedItems: {
        bItems: [] as ItemsType[],
        totalCoast: 0
    }
}
export const itemsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case itemsActions.GET_ITEMS: {
            debugger
            console.log('itemsReducer')
            return {...state, items: action.items}
        }
        default:
            return state
    }
}



