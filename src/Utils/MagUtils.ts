import {ItemsType} from "../Api/MagAPI";
import {deleteItemTC, magActions, updateItemTC} from "../Features/ItemsAction";


export const orderItems = (itemsInBacket: ItemsType[], allItems: ItemsType[], dispatch: Function) => {
    itemsInBacket.forEach((i) => {
        if (i.amount === 0) {
            dispatch(deleteItemTC(i._id))
            deleteItemsFromBacket(i._id, dispatch)
        } else if (i.amount < allItems.filter(f => f._id === i._id)[0].amount) {
            dispatch(updateItemTC(i))
            deleteItemsFromBacket(i._id, dispatch)
        }
    })
}

export const deleteItemsFromBacket = (_id: string, dispatch: Function) => {
    dispatch(magActions.deleteByedItemFromBacketAC(_id))

    let res = localStorage.getItem('itemsInBacket')
    if (res !== null) {
        let fromLC = JSON.parse(res)
        let toLC = fromLC.filter((f: ItemsType) => f._id !== _id)

        localStorage.setItem('itemsInBacket', JSON.stringify(toLC))
    }
}