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
        case itemsActions.BYE_ITEM: {
            debugger
            console.log('itemsReducer')
            return {
                ...state, items: state.items.filter(f => f._id !== action.item._id),
                byedItems: {
                    bItems: [action.item, ...state.byedItems.bItems],
                    totalCoast: state.byedItems.totalCoast + action.item.cost
                }
            }
        }
        default:
            return state
    }
}



