import React, {useState} from 'react';
import {deleteItemTC, updateItemTC} from "../../Features/ItemsAction";
import {useDispatch} from "react-redux";

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
                <div>title: {title};</div>
                <div style={{color: 'hotpink'}}>neWtitle:{titleX}</div>
            </div>
            <input type="text" value={titleX} onChange={(e) => setTitleX(e.currentTarget.value)}/>
            <div>
                <img src={image} alt="card" style={{height:'100px'}}/>
            </div>
            <input type="text" value={imageX} onChange={(e) => setImageX(e.currentTarget.value)}/>
            <div>
                <div>desc: {desc};</div>
                <div style={{color: 'hotpink'}}>neWdesc:{descX}</div>
            </div>
            <input type="text" value={descX} onChange={(e) => setDescX(e.currentTarget.value)}/>
            <div>
                <div> cost: {cost};</div>
                <div style={{color: 'hotpink'}}> neWcost:{costX}</div>
            </div>
            <input type="number" value={costX} onChange={(e) => setCostX(+e.currentTarget.value)}/>
            <div>
                <div>amount: {amount};</div>
                <div style={{color: 'hotpink'}}>neWamount:{amountX}</div>
            </div>
            <input type="number" value={amountX} onChange={(e) => setAmountX(+e.currentTarget.value)}/>
            <div>
                <button onClick={updateItem}>Update</button>
                <button onClick={deleteItem}>Delete</button>
            </div>
        </div>
    );
};

export default UpdatedItem;