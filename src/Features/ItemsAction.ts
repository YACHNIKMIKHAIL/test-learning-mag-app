import {ItemsType, magAPI} from "../Api/MagAPI";
import {magThunkType} from "../App/store";
import {appActions} from "../App/AppReducer";

export enum itemsActions {
    GET_ITEMS = 'GET_ITEMS',
}

export type magReturnedActionsType<S> = S extends { [key: string]: infer T } ? T : never
export const magActions = {
    getItemsAC: (items: ItemsType[]) => ({
        type: itemsActions.GET_ITEMS,
        items
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