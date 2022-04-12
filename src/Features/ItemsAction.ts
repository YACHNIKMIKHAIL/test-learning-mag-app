import {ItemsType, magAPI, PostItemType} from "../Api/MagAPI";
import {magThunkType} from "../App/store";
import {appActions} from "../App/AppReducer";

export enum itemsActions {
    GET_ITEMS = 'GET_ITEMS',
    BYE_ITEM = 'BYE_ITEM',
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

}

export const getItemsTC = (): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        debugger
        console.log('getItemsTC')
        let res = await magAPI.getItems()
        if(res) {
            dispatch(magActions.getItemsAC(res))
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}
export const postItemTC = (item:PostItemType): magThunkType => async (dispatch) => {
    dispatch(appActions.setLoad(true))
    try {
        debugger
        console.log('postItemsTC')
        let res = await magAPI.postItem(item)
        if(res) {
            dispatch(getItemsTC())
        }
    } catch (e) {
        // seaHandleNetwork(e, dispatch)
    } finally {
        dispatch(appActions.setLoad(false))
    }
}