import React from 'react';
import {ImageCase, ItemCase, TBCase, TCase, TextCase, TxCase} from './ItemStyles';
import {ItemsType} from "../../Api/MagAPI";
import {useDispatch} from "react-redux";
import {magActions} from "../../Features/ItemsAction";
import {useMagSelector} from "../../App/store";

type ItemPropsType = {
    item: ItemsType
}
const Item = ({item}: ItemPropsType) => {
    const {_id, title, image, desc, cost, amount} = item
    const dispatch = useDispatch()
    const isAddedToBacket = useMagSelector<string>(state => state.items.byedItems.bItems.filter(f => f._id === _id)[0]?._id)
    const addToBacket = () => {
        dispatch(magActions.byeItemAC(item))
    }
    return (
        <ItemCase>
            <ImageCase url={image}></ImageCase>
            <TextCase>
                <TCase>{title}</TCase>
                <TxCase>{desc}</TxCase>
                <TxCase>Amount: {amount}</TxCase>
                <TBCase>
                    <div>Price: {cost}$</div>
                    <button onClick={addToBacket} disabled={!!isAddedToBacket}>Add to card</button>
                </TBCase>
            </TextCase>
        </ItemCase>
    );
};

export default Item;