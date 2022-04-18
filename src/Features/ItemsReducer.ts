import {deleteItemTC, getItemsTC, orderItemsTC, postItemTC, updateItemTC,searchItemsTC} from "./ItemsAction";
import {ItemsType} from "../Api/MagAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// type InitialStateType = {
//     items: ItemsType[],
//     byedItems: {
//         bItems: ItemsType[],
//         totalCoast: number,
//     },
//     search: string
// }

const initialState = {
    items: [] as ItemsType[],
    byedItems: {
        bItems: [] as ItemsType[],
        totalCoast: 0,
    },
    search: ''
}


const slice = createSlice({
        name: 'items',
        initialState: initialState,
        reducers: {
            getItems(state, action: PayloadAction<{ items: ItemsType[] }>) {
                return {...state, items: action.payload.items}
            },
            byeItem(state, action: PayloadAction<{ item: ItemsType }>) {
                // return {
                //     state,
                //     byedItems: {
                //         ...state.byedItems,
                //         bItems: [action.payload.item, ...state.byedItems.bItems],
                //     }
                // }
                state.byedItems.bItems = [action.payload.item, ...state.byedItems.bItems]
            },
            changeAmountByedItem(state, action: PayloadAction<{ id: string, amount: number, totalPrice: number }>) {
                // return {
                //     ...state,
                //     byedItems: {
                //         ...state.byedItems,
                //         bItems: state.byedItems.bItems.map(m => m._id === action.payload.id ? {
                //             ...m,
                //             amount: action.payload.amount
                //         } : m),
                //         totalCoast: action.payload.totalPrice
                //     }
                // }

                state.byedItems.bItems = state.byedItems.bItems.map(m => m._id === action.payload.id ? {
                    ...m,
                    amount: action.payload.amount
                } : m)
                state.byedItems.totalCoast = action.payload.totalPrice

            },
            deleteByedItemFromBacket(state, action: PayloadAction<{ id: string, deletedPrice:number|undefined, amount: number }>) {
                // return {
                //     ...state,
                //     byedItems: {
                //         bItems: state.byedItems.bItems.filter(m => m._id !== action.payload.id),
                //         totalCoast: state.byedItems.totalCoast - action.payload.deletedPrice,
                //     }
                // }
                state.byedItems.bItems = state.byedItems.bItems.filter(m => m._id !== action.payload.id)
                if(action.payload.deletedPrice) {
                    state.byedItems.totalCoast = state.byedItems.totalCoast - action.payload.deletedPrice
                }
            },
            resetTotalPrice(state, action: PayloadAction<{}>) {
                // return {
                //     ...state,
                //     byedItems: {
                //         ...state.byedItems,
                //         bItems: state.byedItems.bItems,
                //         totalCoast: 0
                //     }
                // }
                state.byedItems = {
                    ...state.byedItems,
                    bItems: state.byedItems.bItems,
                    totalCoast: 0
                }
            },
            searchItems(state, action: PayloadAction<{ v: string }>) {
                // return {
                //     ...state,
                //     search: action.payload.v
                // }
                state.search = action.payload.v
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(getItemsTC.fulfilled, (state, action) => {
                    // state[action.payload.item.id] = []
                    // return {...state, items: action.payload.items}
                })
                .addCase(searchItemsTC.fulfilled, (state, action) => {
                    // return {...state, items: action.payload.items}
                    // state.items= action.payload.items
                })
                .addCase(postItemTC.fulfilled, (state, action) => {
                    // return {...state, items: action.payload.items}
                })
                .addCase(deleteItemTC.fulfilled, (state, action) => {
                    // return {...state, items: action.payload.items}
                })
                .addCase(updateItemTC.fulfilled, (state, action) => {
                    // return {...state, items: action.payload.items}
                })
                .addCase(orderItemsTC.fulfilled, (state, action) => {

                })

        }
    }
)

export const itemsReducer = slice.reducer
export const {
    getItems,
    byeItem,
    changeAmountByedItem,
    deleteByedItemFromBacket,
    resetTotalPrice,
    searchItems
} = slice.actions

// export const itemsReducer = (state = initialState, action: ActionsType): InitialStateType => {
//     switch (action.type) {
//         case itemsActions.GET_ITEMS: {
//             return {...state, items: action.items}
//         }
//         case itemsActions.BYE_ITEM: {
//             return {
//                 ...state,
//                 // items: state.items.filter(f => f._id !== action.item._id),
//                 byedItems: {
//                     ...state.byedItems,
//                     bItems: [action.item, ...state.byedItems.bItems],
//                 }
//             }
//         }
//         case itemsActions.CHANGE_AMOUNT: {
//             return {
//                 ...state,
//                 byedItems: {
//                     ...state.byedItems,
//                     bItems: state.byedItems.bItems.map(m => m._id === action.id ? {
//                         ...m,
//                         amount: action.amount
//                     } : m),
//                     totalCoast: action.totalPrice
//                 }
//             }
//         }
//         case itemsActions.DELETE_FROM_BACKET: {
//             return {
//                 ...state,
//                 byedItems: {
//                     bItems: state.byedItems.bItems.filter(m => m._id !== action.id),
//                     totalCoast: state.byedItems.totalCoast - action.deletedPrice,
//                 }
//             }
//         }
//         case itemsActions.RESET_TOTAL_PRICE: {
//             return {
//                 ...state,
//                 byedItems: {
//                     ...state.byedItems,
//                     bItems: state.byedItems.bItems,
//                     totalCoast: 0
//                 }
//             }
//         }
//         case itemsActions.SEARCH_ITEMS: {
//             return {
//                 ...state,
//                 search: action.v
//             }
//         }
//         default:
//             return state
//     }
// }
//
//
//
