import {ItemsType, magAPI, PostItemType} from "../Api/MagAPI";
import {reducerType} from "../App/store";
import {sendedMessage, setLoad} from "../App/AppReducer";
import {byedAmountFunc, handleError} from "../Utils/MagUtils";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AxiosError} from "axios";
import {getItems, resetTotalPrice} from "./ItemsReducer";

export enum itemsActions {
    GET_ITEMS = 'GET_ITEMS',
    BYE_ITEM = 'BYE_ITEM',
    CHANGE_AMOUNT = 'CHANGE_AMOUNT',
    DELETE_FROM_BACKET = 'DELETE_FROM_BACKET',
    RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE',
    SEARCH_ITEMS = 'SEARCH_ITEMS',
}

export const magActions = {
    getItems: (items: ItemsType[]) => ({
        type: itemsActions.GET_ITEMS,
        items
    } as const),
    byeItem: (item: ItemsType) => ({
        type: itemsActions.BYE_ITEM,
        item
    } as const),
    changeAmountByedItem: (id: string, amount: number, totalPrice: number) => ({
        type: itemsActions.CHANGE_AMOUNT,
        id, amount, totalPrice
    } as const),
    deleteByedItemFromBacket: (id: string, deletedPrice = 0, amount = 0) => ({
        type: itemsActions.DELETE_FROM_BACKET,
        id, deletedPrice, amount
    } as const),
    resetTotalPrice: () => ({
        type: itemsActions.RESET_TOTAL_PRICE,
    } as const),
    searchItems: (v: string) => ({
        type: itemsActions.SEARCH_ITEMS,
        v
    } as const),
}

// export const getItemsTC_ = (): magThunkType => async (dispatch) => {
//     dispatch(appActions.setLoad(true))
//     try {
//         let res = await magAPI.getItems()
//         if (res) {
//             dispatch(magActions.getItemsAC(res))
//         } else {
//             handleError('Some troubles ...', dispatch)
//         }
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }
export type FielErrorType = { field: string, error: string }
export type ThunkErrorAPIConfigType = {
    rejectValue: { errors?: string[], fieldsErrors?: FielErrorType[] }
}
export const getItemsTC = createAsyncThunk<undefined, undefined, ThunkErrorAPIConfigType>('e', async (params, thunkAPI) => {
    thunkAPI.dispatch(setLoad({v: true}))
    try {
        let res = await magAPI.getItems()
        if (res) {
            thunkAPI.dispatch(getItems({items: res}))
            return {res}
        }
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})

// export const searchItemsTC_ = (s: string): magThunkType => async (dispatch) => {
//     dispatch(appActions.setLoad(true))
//     try {
//         let res = await magAPI.searchItems(s)
//         if (res) {
//             if (res === 'No items') {
//                 dispatch(magActions.getItemsAC([]))
//                 handleError(res, dispatch)
//             } else {
//                 dispatch(magActions.getItemsAC(res))
//             }
//         } else {
//             handleError('Some troubles ...', dispatch)
//         }
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }

export const searchItemsTC = createAsyncThunk<{ s: string }, string, ThunkErrorAPIConfigType>('d', async (s, thunkAPI) => {
    thunkAPI.dispatch(setLoad({v: true}))
    try {
        let res = await magAPI.searchItems(s)
        thunkAPI.dispatch(getItems({items: res}))
        return {res}
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})
// export const postItemTC_ = (item: PostItemType): magThunkType => async (dispatch) => {
//     dispatch(appActions.setLoad(true))
//     try {
//         let res = await magAPI.postItem(item)
//         if (res) {
//             dispatch(getItemsTC())
//         }
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }
export const postItemTC = createAsyncThunk<{ item: PostItemType }, PostItemType, ThunkErrorAPIConfigType>('a', async (item, thunkAPI) => {
    thunkAPI.dispatch(setLoad({v: true}))
    try {
        let res = await magAPI.postItem(item)
        if (res) {
            thunkAPI.dispatch(getItemsTC())
        }
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})

// export const deleteItemTC_ = (id: string): magThunkType => async (dispatch) => {
//     dispatch(appActions.setLoad(true))
//     try {
//         let res = await magAPI.deleteItem(id)
//         if (res) {
//             dispatch(getItemsTC())
//         } else {
//             handleError('Some troubles ...', dispatch)
//         }
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }

export const deleteItemTC = createAsyncThunk<{ id: string }, string, ThunkErrorAPIConfigType>('b', async (id, thunkAPI) => {
    thunkAPI.dispatch(setLoad({v: true}))
    try {
        let res = await magAPI.deleteItem(id)
        if (res) {
            thunkAPI.dispatch(getItemsTC())
        }
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})

// export const updateItemTC_ = (item: ItemsType): magThunkType => async (dispatch) => {
//     dispatch(appActions.setLoad(true))
//     try {
//         let res = await magAPI.updateItem(item)
//         if (res) {
//             dispatch(getItemsTC())
//         } else {
//             handleError('Some troubles ...', dispatch)
//         }
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }
export const updateItemTC = createAsyncThunk<{ item: ItemsType }, ItemsType, ThunkErrorAPIConfigType>('c', async (item, thunkAPI) => {
    thunkAPI.dispatch(setLoad({v: true}))
    try {
        let res = await magAPI.updateItem(item)
        if (res) {
            thunkAPI.dispatch(getItemsTC())
        }
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})


// export const orderItemsTC_ = (name: string, email: string, city: string, street: string): magThunkType => async (dispatch, getState: () => reducerType) => {
//     dispatch(appActions.setLoad(true))
//     const price = getState().items.byedItems.totalCoast
//     const itemsNames = getState().items.byedItems.bItems.map(m => {
//         return m.title
//     })
//     try {
//         await magAPI.sendMessage(name, email, city, street, byedAmountFunc(itemsNames, getState), price, itemsNames)
//         dispatch(magActions.resetTotalPriceAC())
//         dispatch(appActions.sendedMessage(true))
//     } catch (e) {
//         handleError(e, dispatch)
//     } finally {
//         dispatch(appActions.setLoad(false))
//     }
// }
export const orderItemsTC = createAsyncThunk<{ name: string, email: string, city: string, street: string },
    { name: string, email: string, city: string, street: string }, ThunkErrorAPIConfigType>
('f', async (params, thunkAPI) => {
    const {dispatch, getState} = thunkAPI
    const state = getState() as reducerType

    dispatch(setLoad({v: true}))
    const price = state.items.byedItems.totalCoast
    const itemsNames = state.items.byedItems.bItems.map((m: ItemsType) => {
        return m.title
    })
    try {
        await magAPI.sendMessage(params.name, params.email, params.city, params.street, byedAmountFunc(itemsNames, state), price, itemsNames)
        dispatch(resetTotalPrice({}))
        dispatch(sendedMessage({v: true}))
    } catch (e: any) {
        const err: AxiosError = e
        return handleError(err, thunkAPI)
    } finally {
        thunkAPI.dispatch(setLoad({v: false}))
    }
})