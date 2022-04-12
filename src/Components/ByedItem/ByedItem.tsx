import React from 'react';
import {ByedItemCase, ImageCase, TBCase, TCase, TextCase, TxCase} from './ByedItemStyle';
import {ItemsType} from "../../Api/MagAPI";

type ByedItemPropsType = {
    item: ItemsType
}
const ByedItem = ({item}: ByedItemPropsType) => {
    const {_id, title, image, desc, cost, amount} = item
    console.log(image)
    return (
        <ByedItemCase>
            <ImageCase url={image}></ImageCase>
            <TextCase>
                <TCase>{title}</TCase>
                <TxCase>
                    {desc}
                </TxCase>
                <TxCase>Amount: {amount}</TxCase>
            </TextCase>
            <TBCase>
                <button>-</button>
                3
                <button>+</button>
            </TBCase>
        </ByedItemCase>
    );
};

export default ByedItem;