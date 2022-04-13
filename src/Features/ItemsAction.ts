import {ItemsType, magAPI, PostItemType} from "../Api/MagAPI";
import {magThunkType} from "../App/store";
import {appActions} from "../App/AppReducer";

export enum itemsActions {
    GET_ITEMS = 'GET_ITEMS',
    BYE_ITEM = 'BYE_ITEM',
    CHANGE_AMOUNT = 'CHANGE_AMOUNT',
    DELETE_FROM_BACKET = 'DELETE_FROM_BACKET',
}

export type magReturnedActionsType<S> = S extends { [key: string]: infer T } ? T : never
export const magActions = {
    getItemsAC: (items: ItemsType[]) => ({
        type: itemsActions.GET_ITEMS,
        items
    } as const),
    byeItemAC: (item: ItemsType) => ({
        type: itemsActions.BYE_ITEM,
        item
    } as const),
    changeAmountByedItemAC: (id: string, amount: number,totalPrice:number) => ({
        type: itemsActions.CHANGE_AMOUNT,
        id, amount,totalPrice
    } as const),
    deleteByedItemFromBacketAC: (id: string) => ({
        type: itemsActions.DELETE_FROM_BACKET,
        id
    } as const),

}

export const getItemsTC = (): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        debugger
        let res = await magAPI.getItems()
        if (res) {
            dispatch(magActions.getItemsAC(res))
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const postItemTC = (item: PostItemType): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.postItem(item)
        if (res) {
            alert('Success!')
            dispatch(getItemsTC())
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const deleteItemTC = (id: string): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.deleteItem(id)
        if (res) {
            alert('Success!')
            dispatch(getItemsTC())
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const updateItemTC = (item: ItemsType): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        let res = await magAPI.updateItem(item)
        if (res) {
            alert('Success!')
            dispatch(getItemsTC())
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}