import {deleteItemTC, getItemsTC, orderItemsTC, postItemTC, updateItemTC,searchItemsTC} from "./ItemsAction";
import {ItemsType} from "../Api/MagAPI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
        name: 'items',
        initialState: {
            items: [] as ItemsType[],
            byedItems: {
                bItems: [] as ItemsType[],
                totalCoast: 0,
            },
            search: ''
        },
        reducers: {
            getItems(state, action: PayloadAction<{ items: ItemsType[] }>) {
                return {...state, items: action.payload.items}
            },
            byeItem(state, action: PayloadAction<{ item: ItemsType }>) {
                state.byedItems.bItems = [action.payload.item, ...state.byedItems.bItems]
            },
            changeAmountByedItem(state, action: PayloadAction<{ id: string, amount: number, totalPrice: number }>) {
                state.byedItems.bItems = state.byedItems.bItems.map(m => m._id === action.payload.id ? {
                    ...m,
                    amount: action.payload.amount
                } : m)
                state.byedItems.totalCoast = action.payload.totalPrice

            },
            deleteByedItemFromBacket(state, action: PayloadAction<{ id: string, deletedPrice:number|undefined, amount: number }>) {
                state.byedItems.bItems = state.byedItems.bItems.filter(m => m._id !== action.payload.id)
                if(action.payload.deletedPrice) {
                    state.byedItems.totalCoast = state.byedItems.totalCoast - action.payload.deletedPrice
                }
            },
            resetTotalPrice(state) {
                state.byedItems = {
                    ...state.byedItems,
                    bItems: state.byedItems.bItems,
                    totalCoast: 0
                }
            },
            searchItems(state, action: PayloadAction<{ v: string }>) {
                state.search = action.payload.v
            },
        },
        extraReducers: (builder) => {
            builder
                .addCase(getItemsTC.fulfilled, () => {

                })
                .addCase(searchItemsTC.fulfilled, () => {

                })
                .addCase(postItemTC.fulfilled, ( ) => {

                })
                .addCase(deleteItemTC.fulfilled, () => {

                })
                .addCase(updateItemTC.fulfilled, () => {

                })
                .addCase(orderItemsTC.fulfilled, () => {

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