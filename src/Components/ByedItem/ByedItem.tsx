import React, {useState} from 'react';
import {ByedItemCase, ImageCase, TBCase, TCase, TextCase, TxCase} from './ByedItemStyle';
import {ItemsType} from "../../Api/MagAPI";
import {useDispatch} from "react-redux";
import {magActions} from "../../Features/ItemsAction";
import {useMagSelector} from "../../App/store";

type ByedItemPropsType = {
    item: ItemsType
}
const ByedItem = ({item}: ByedItemPropsType) => {
    const {_id, title, image, desc, amount} = item
    const [amountX, setAmountX] = useState<number>(0)
    const dispatch = useDispatch()
    const maxItemAmount = useMagSelector<number>(state => state.items.items.filter(f => f._id === _id)[0].amount)
    const totalCost = useMagSelector<number>(state => state.items.byedItems.totalCoast)

    const minusAmount = () => {
        if (amountX === 0) {
            return
        } else {
            setAmountX(amountX - 1)
            dispatch(magActions.changeAmountByedItemAC(_id, amount + 1,totalCost-item.cost))
        }
    }
    const plusAmount = () => {
        if (amountX === maxItemAmount) {
            return
        } else {
            setAmountX(amountX + 1)
            dispatch(magActions.changeAmountByedItemAC(_id, amount - 1,totalCost+item.cost))
        }
    }
    const deleteItenFromBacket = () => {
        dispatch(magActions.deleteByedItemFromBacketAC(_id))

        let res = localStorage.getItem('itemsInBacket')
        if (res !== null) {
            let fromLC = JSON.parse(res)
            let toLC = fromLC.filter((f: ItemsType) => f._id !== _id)

            localStorage.setItem('itemsInBacket',JSON.stringify(toLC) )
        }
    }
    return (
        <ByedItemCase>
            <ImageCase url={image}></ImageCase>
            <TextCase>
                <TCase>{title}
                    <button onClick={deleteItenFromBacket}>x</button>
                </TCase>
                <TxCase>
                    {desc}
                </TxCase>
                <TxCase>Amount: {amount} ; Price: {item.cost}</TxCase>
            </TextCase>
            <TBCase>
                <button onClick={minusAmount} disabled={amountX === 0}>-</button>
                {amountX}
                <button onClick={plusAmount} disabled={amountX === maxItemAmount}>+</button>
            </TBCase>

        </ByedItemCase>
    );
};

export default ByedItem;