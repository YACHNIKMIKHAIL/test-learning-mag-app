import {ItemsType, magAPI, PostItemType} from "../Api/MagAPI";
import {magThunkType, reducerType} from "../App/store";
import {appActions} from "../App/AppReducer";
import {handleError} from "../Utils/MagUtils";

export enum itemsActions {
    GET_ITEMS = 'GET_ITEMS',
    BYE_ITEM = 'BYE_ITEM',
    CHANGE_AMOUNT = 'CHANGE_AMOUNT',
    DELETE_FROM_BACKET = 'DELETE_FROM_BACKET',
    RESET_TOTAL_PRICE = 'RESET_TOTAL_PRICE',
    SEARCH_ITEMS = 'SEARCH_ITEMS',
}

export const magActions = {
    getItemsAC: (items: ItemsType[]) => ({
        type: itemsActions.GET_ITEMS,
        items
    } as const),
    byeItemAC: (item: ItemsType) => ({
        type: itemsActions.BYE_ITEM,
        item
    } as const),
    changeAmountByedItemAC: (id: string, amount: number, totalPrice: number) => ({
        type: itemsActions.CHANGE_AMOUNT,
        id, amount, totalPrice
    } as const),
    deleteByedItemFromBacketAC: (id: string, deletedPrice = 0, amount = 0) => ({
        type: itemsActions.DELETE_FROM_BACKET,
        id, deletedPrice, amount
    } as const),
    resetTotalPriceAC: () => ({
        type: itemsActions.RESET_TOTAL_PRICE,
    } as const),
    searchItemsAC: (v: string) => ({
        type: itemsActions.SEARCH_ITEMS,
        v
    } as const),

}

export const getItemsTC = (): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.getItems()
        if (res) {
            dispatch(magActions.getItemsAC(res))
        } else {
            handleError('Some troubles ...', dispatch)
        }
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const searchItemsTC = (s: string): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.searchItems(s)
        if (res) {
            dispatch(magActions.getItemsAC(res))
        } else {
            handleError('Some troubles ...', dispatch)
        }
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const postItemTC = (item: PostItemType): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.postItem(item)
        if (res) {
            dispatch(getItemsTC())
        } else {
            handleError('Some troubles ...', dispatch)
        }
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const deleteItemTC = (id: string): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.deleteItem(id)
        if (res) {
            dispatch(getItemsTC())
        } else {
            handleError('Some troubles ...', dispatch)
        }
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const updateItemTC = (item: ItemsType): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.updateItem(item)
        if (res) {
            dispatch(getItemsTC())
        } else {
            handleError('Some troubles ...', dispatch)
        }
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const orderItemsTC = (name: string, email: string, city: string, street: string): magThunkType => async (dispatch, getState: () => reducerType) => {
    dispatch(appActions.setLoad(true))
    const restCount =
        getState().items.byedItems.bItems.reduce((acc, el) => {
            acc += el.amount
            return acc
        }, 0)
    const price = getState().items.byedItems.totalCoast
    const itemsNames = getState().items.byedItems.bItems.map(m => {
        return m.title
    })

    let allCount: ItemsType[] = []
    for (let i = 0; i < itemsNames.length; i++) {
        let item = getState().items.items.filter(f => f.title === itemsNames[i])[0]
        allCount.push(item)
    }

    const allAmount = allCount.reduce((acc, el) => {
        acc += el.amount
        return acc
    }, 0)

    debugger
    try {
        //name, email, city, street, count, price, itemsNames
        await magAPI.sendMessage(name, email, city, street, allAmount - restCount, price, itemsNames)
        dispatch(magActions.resetTotalPriceAC())
        dispatch(appActions.sendedMessage(true))
    } catch (e) {
        handleError(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}