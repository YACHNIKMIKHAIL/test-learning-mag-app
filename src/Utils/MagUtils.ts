import {ItemsType} from "../Api/MagAPI";
import {deleteItemTC, updateItemTC} from "../Features/ItemsAction";


export const orderItems=(byedItems:ItemsType[],allItems:ItemsType[],dispatch:Function)=>{
    byedItems.forEach((i)=>{
        debugger
        if(i.cost===allItems.filter(f=>f._id===i._id)[0].cost){
            dispatch(deleteItemTC(i._id))
        }else if(i.cost<allItems.filter(f=>f._id===i._id)[0].cost){
            dispatch(updateItemTC(i))
        }
    })
}