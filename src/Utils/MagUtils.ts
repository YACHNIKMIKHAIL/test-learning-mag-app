import {ItemsType} from "../Api/MagAPI";
import {deleteItemTC, updateItemTC} from "../Features/ItemsAction";
import {reducerType} from "../App/store";
import {AxiosError} from "axios";
import {byeItem, deleteByedItemFromBacket} from "../Features/ItemsReducer";


export const orderItems = (itemsInBacket: ItemsType[], allItems: ItemsType[], dispatch: Function) => {
    itemsInBacket.forEach((i) => {
        if (i.amount === 0) {
            dispatch(deleteItemTC(i._id))
            deleteItemsFromLCBacket(i._id, dispatch)
        } else if (i.amount < allItems.filter(f => f._id === i._id)[0].amount) {
            dispatch(updateItemTC(i))
            deleteItemsFromLCBacket(i._id, dispatch)
        }
    })
}

export const deleteItemsFromLCBacket = (_id: string, dispatch: Function, deletedPrice?: number) => {
    dispatch(deleteByedItemFromBacket({id: _id, deletedPrice: deletedPrice, amount: 0}))

    let res = localStorage.getItem('itemsInBacket')
    if (res !== null) {
        let fromLC = JSON.parse(res)
        let toLC = fromLC.filter((f: ItemsType) => f._id !== _id)

        localStorage.setItem('itemsInBacket', JSON.stringify(toLC))
    }
}

export const addItemToLCBacket = (item: ItemsType, dispatch: Function) => {
    dispatch(byeItem({item}))
    let resLC = localStorage.getItem('itemsInBacket')
    if (resLC !== null) {
        const newPart = JSON.parse(resLC)
        newPart.push(item)
        localStorage.setItem('itemsInBacket', JSON.stringify(newPart))
    } else {
        const toLC = [item]
        localStorage.setItem('itemsInBacket', JSON.stringify(toLC))
    }
}
export type thunkAPIType = {
    dispatch: (action: any) => any
    rejectWithValue: Function
}
export const handleError = (err: AxiosError, thunkAPI: thunkAPIType, showError = true) => {
    // dispatch(appActions.setError(err))
    if (showError) {
        //@ts-ignore
        thunkAPI.dispatch(setError({e: err.message ? err.message[0] : 'Some troubles =( was happend!'}))
    }
    return thunkAPI.rejectWithValue({errors: [err.message], fieldsErrors: undefined})
}

export const byedAmountFunc = (itemsNames: string[], state: reducerType) => {
    const restCount = state.items.byedItems.bItems.reduce((acc: number, el: ItemsType) => {
        acc += el.amount
        return acc
    }, 0)

    let allCount: ItemsType[] = []
    for (let i = 0; i < itemsNames.length; i++) {
        let item = state.items.items.filter((f: ItemsType) => f.title === itemsNames[i])[0]
        allCount.push(item)
    }

    const allAmount = allCount.reduce((acc, el) => {
        acc += el.amount
        return acc
    }, 0)

    return allAmount - restCount
}