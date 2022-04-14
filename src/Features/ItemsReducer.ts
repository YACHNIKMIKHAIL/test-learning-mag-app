import {ActionsType} from "../App/store";
import {itemsActions} from "./ItemsAction";
import {ItemsType} from "../Api/MagAPI";

type InitialStateType = {
    items: ItemsType[],
    byedItems: {
        bItems: ItemsType[],
        totalCoast: number
    },
    search: string
}

const initialState = {
    items: [] as ItemsType[],
    byedItems: {
        bItems: [] as ItemsType[],
        totalCoast: 0,
    },
    search: ''
}
export const itemsReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case itemsActions.GET_ITEMS: {
            return {...state, items: action.items}
        }
        case itemsActions.BYE_ITEM: {
            return {
                ...state,
                // items: state.items.filter(f => f._id !== action.item._id),
                byedItems: {
                    bItems: [action.item, ...state.byedItems.bItems],
                    totalCoast: state.byedItems.totalCoast
                }
            }
        }
        case itemsActions.CHANGE_AMOUNT: {
            return {
                ...state,
                byedItems: {
                    bItems: state.byedItems.bItems.map(m => m._id === action.id ? {
                        ...m,
                        amount: action.amount
                    } : m),
                    totalCoast: action.totalPrice
                }
            }
        }
        case itemsActions.DELETE_FROM_BACKET: {
            return {
                ...state,
                byedItems: {
                    bItems: state.byedItems.bItems.filter(m => m._id !== action.id),
                    totalCoast: state.byedItems.totalCoast
                }
            }
        }
        case itemsActions.RESET_TOTAL_PRICE: {
            return {
                ...state,
                byedItems: {
                    bItems: state.byedItems.bItems,
                    totalCoast: 0
                }
            }
        }
        case itemsActions.SEARCH_ITEMS: {
            return {
                ...state,
                search:action.v
            }
        }
        default:
            return state
    }
}



