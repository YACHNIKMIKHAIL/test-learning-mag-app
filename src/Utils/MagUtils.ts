import {ItemsType} from "../Api/MagAPI";
import {deleteItemTC, magActions, updateItemTC} from "../Features/ItemsAction";
import {ActionsType, reducerType} from "../App/store";
import {Dispatch} from "redux";
import {appActions} from "../App/AppReducer";


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
    dispatch(magActions.deleteByedItemFromBacketAC(_id, deletedPrice))

    let res = localStorage.getItem('itemsInBacket')
    if (res !== null) {
        let fromLC = JSON.parse(res)
        let toLC = fromLC.filter((f: ItemsType) => f._id !== _id)

        localStorage.setItem('itemsInBacket', JSON.stringify(toLC))
    }
}

export const addItemToLCBacket = (item: ItemsType, dispatch: Function) => {
    dispatch(magActions.byeItemAC(item))
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

export const handleError = (err: any, dispatch: Dispatch<ActionsType>) => {
    dispatch(appActions.setError(err))
}

export const byedAmountFunc = (itemsNames:string[],getState: () => reducerType) => {
    const restCount =
        getState().items.byedItems.bItems.reduce((acc, el) => {
            acc += el.amount
            return acc
        }, 0)

    let allCount: ItemsType[] = []
    for (let i = 0; i < itemsNames.length; i++) {
        let item = getState().items.items.filter(f => f.title === itemsNames[i])[0]
        allCount.push(item)
    }

    const allAmount = allCount.reduce((acc, el) => {
        acc += el.amount
        return acc
    }, 0)

    return allAmount - restCount
}