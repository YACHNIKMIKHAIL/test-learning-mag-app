import React, {useState} from 'react';
import {ByedItemCase, ImageCase, TBCase, TCase, TextCase, TxCase} from './ByedItemStyle';
import {ItemsType} from "../../../../Api/MagAPI";
import {useDispatch} from "react-redux";
import {magActions} from "../../../../Features/ItemsAction";
import {useMagSelector} from "../../../../App/store";
import {deleteItemsFromLCBacket} from "../../../../Utils/MagUtils";
import {IconButton} from "@mui/material";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

type ByedItemPropsType = {
    item: ItemsType
}
const ByedItem = ({item}: ByedItemPropsType) => {
    const {_id, title, image, desc, amount, cost} = item
    const dispatch = useDispatch()
    const maxItemAmount = useMagSelector<number>(state => state.items.items.filter(f => f._id === _id)[0].amount)
    const currentItemAmount = useMagSelector<number>(state => state.items.byedItems.bItems.filter(f => f._id === _id)[0].amount)
    const totalCost = useMagSelector<number>(state => state.items.byedItems.totalCoast)
    const [amountX, setAmountX] = useState<number>(maxItemAmount - currentItemAmount)

    const minusAmount = () => {
        if (amountX === 0) {
            return
        } else {
            setAmountX(amountX - 1)
            dispatch(magActions.changeAmountByedItemAC(_id, amount + 1, totalCost - item.cost))
        }
    }
    const plusAmount = () => {
        if (amountX === maxItemAmount) {
            return
        } else {
            setAmountX(amountX + 1)
            dispatch(magActions.changeAmountByedItemAC(_id, amount - 1, totalCost + item.cost))
        }
    }
    const deleteItenFromBacket = () => {
        deleteItemsFromLCBacket(_id, dispatch, amountX * cost)
    }
    return (
        <ByedItemCase>
            <ImageCase url={image}/>
            <TextCase>
                <TCase>{title}
                    <IconButton size="small"
                                edge="start"
                                color="inherit"
                                onClick={deleteItenFromBacket}>
                        <RemoveShoppingCartIcon/>
                    </IconButton>
                </TCase>
                <TxCase>
                    {desc}
                </TxCase>
                <TxCase>Amount: {amount} </TxCase>
                <div style={{margin: '5px 20px'}}>Price:<span style={{color: 'hotpink'}}> {item.cost}</span> $</div>
            </TextCase>
            <TBCase>
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            onClick={plusAmount}
                            disabled={amountX === maxItemAmount}>
                    <ExpandLessIcon/>
                </IconButton>
                {amountX}
                <IconButton size="large"
                            edge="start"
                            color="inherit"
                            onClick={minusAmount}
                            disabled={amountX === 0}>
                    <ExpandMoreIcon/>
                </IconButton>
            </TBCase>

        </ByedItemCase>
    );
};

export default ByedItem;