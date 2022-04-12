import React from 'react';
import {ImageCase, ItemCase, TBCase, TCase, TextCase, TxCase} from './ItemStyles';
import {ItemsType} from "../../Api/MagAPI";

type ItemPropsType = {
    item: ItemsType
}
const Item = ({item}: ItemPropsType) => {
    const {_id, title, image, desc, cost, amount} = item
    return (
        <ItemCase>
            <ImageCase url={image}></ImageCase>
            <TextCase>
                <TCase>{title}</TCase>
                <TxCase>{desc}</TxCase>
                <TxCase>Amount: {amount}</TxCase>
                <TBCase>
                    <div>Price: {cost}$</div>
                    <button>Add to card</button>
                </TBCase>
            </TextCase>
        </ItemCase>
    );
};

export default Item;