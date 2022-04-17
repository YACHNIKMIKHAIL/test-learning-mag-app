import React from 'react';
import {ImageCase, ItemCase, TBCase, TCase, TextCase, TxCase} from './ItemStyles';
import {ItemsType} from "../../../Api/MagAPI";
import {useDispatch} from "react-redux";
import {useMagSelector} from "../../../App/store";
import {Button} from '@mui/material';
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import {addItemToLCBacket} from "../../../Utils/MagUtils";

type ItemPropsType = {
    item: ItemsType
}
const Item = ({item}: ItemPropsType) => {
    const {_id, title, image, desc, cost, amount} = item
    const dispatch = useDispatch()
    const isAddedToBacket = useMagSelector<string>(state => state.items.byedItems.bItems.filter(f => f._id === _id)[0]?._id)

    const addToBacket = () => {
        addItemToLCBacket(item, dispatch)
    }

    return (
        <ItemCase>
            <ImageCase url={image}/>
            <TextCase>
                <TCase>{title}</TCase>
                <TxCase>{desc}</TxCase>
                <TxCase>Amount: {amount}</TxCase>
                <TBCase>
                    <>Price: {cost}$</>
                    <Button variant="contained" disabled={!!isAddedToBacket} onClick={addToBacket}
                            style={!!isAddedToBacket ? {backgroundColor: 'rgba(0,217,255,0.05)'} : {backgroundColor: 'rgba(0,217,255,0.58)'}}
                    >Add
                        to <LocalGroceryStoreIcon style={{height: '15px'}}/></Button>
                </TBCase>
            </TextCase>
        </ItemCase>
    );
};

export default Item;