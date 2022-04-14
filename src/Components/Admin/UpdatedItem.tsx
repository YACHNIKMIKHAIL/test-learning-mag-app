import React, {useState} from 'react';
import {deleteItemTC, updateItemTC} from "../../Features/ItemsAction";
import {useDispatch} from "react-redux";
import styled from "styled-components";

type UpdatedItemPropsType = {
    _id: string
    title: string
    image: string
    desc: string
    cost: number
    amount: number
}
const UpdatedItem = ({_id, title, image, desc, cost, amount}: UpdatedItemPropsType) => {
    const [titleX, setTitleX] = useState<string>(title)
    const [imageX, setImageX] = useState<string>(image)
    const [descX, setDescX] = useState<string>(desc)
    const [costX, setCostX] = useState<number>(cost)
    const [amountX, setAmountX] = useState<number>(amount)
    const dispatch = useDispatch()

    const updateItem = () => {
        dispatch(updateItemTC({
            _id: _id,
            title: titleX,
            image: imageX,
            desc: descX,
            cost: costX,
            amount: amountX
        }))
    }
    const deleteItem = () => {
        dispatch(deleteItemTC(_id))
    }
    return (
        <div style={{
            margin: '10px 0',
            backgroundColor: 'rgba(0,175,238,0.45)',
            borderRadius: '10px',
            width: '100%',
            padding: '5px',
            border: '2px hotpink solid',
        }}>
            <div>
                <TxCase>title: {title};</TxCase>
                <TxCase style={{color: 'hotpink'}}>neWtitle:{titleX}</TxCase>
            </div>
            <input style={{margin:'0 5px'}} type="text" value={titleX} onChange={(e) => setTitleX(e.currentTarget.value)}/>
            <div style={{margin:'5px 5px'}}>
                <img src={image} alt="card" style={{height:'100px'}}/>
            </div>
            <input style={{margin:'0 5px'}} type="text" value={imageX} onChange={(e) => setImageX(e.currentTarget.value)}/>
            <div>
                <TxCase>desc: {desc};</TxCase>
                <TxCase style={{color: 'hotpink'}}>neWdesc:{descX}</TxCase>
            </div>
            <input style={{margin:'0 5px'}} type="text" value={descX} onChange={(e) => setDescX(e.currentTarget.value)}/>
            <div>
                <TxCase> cost: {cost};</TxCase>
                <TxCase style={{color: 'hotpink'}}> neWcost:{costX}</TxCase>
            </div>
            <input style={{margin:'0 5px'}} type="number" value={costX} onChange={(e) => setCostX(+e.currentTarget.value)}/>
            <div>
                <TxCase>amount: {amount};</TxCase>
                <TxCase style={{color: 'hotpink'}}>neWamount:{amountX}</TxCase>
            </div>
            <input style={{margin:'0 5px'}} type="number" value={amountX} onChange={(e) => setAmountX(+e.currentTarget.value)}/>
            <div style={{padding:'5px'}}>
                <button onClick={updateItem}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
};

export default UpdatedItem;

export const TxCase = styled.div`
  margin: 5px 20px;
  font-size: small;
  background-color: rgba(0, 175, 238, 0.91);
  padding: 5px;
  border-radius: 5px;
`