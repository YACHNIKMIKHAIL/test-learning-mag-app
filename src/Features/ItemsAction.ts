import {ItemsType, magAPI} from "../Api/MagAPI";
import {magThunkType} from "../App/store";

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
    // dispatch(setSeaAppStatus('loading'))
    // dispatch(seaTodolistActions.changeTodolistStatusAC(todolistID, 'loading'))
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
        // dispatch(setSeaAppStatus('succesed'))
        // dispatch(seaTodolistActions.changeTodolistStatusAC(todolistID, 'succesed'))
    }
}