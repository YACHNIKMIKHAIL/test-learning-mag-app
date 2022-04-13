import React, {useState} from 'react';

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

    const updateItem = () => {

    }
    const deleteItem = () => {

    }
    return (
        <>
            <div>title: {title}</div>
            <input type="text" value={titleX} onChange={(e) => setTitleX(e.currentTarget.value)}/>
            <div>image: {image}</div>
            <input type="text" value={imageX} onChange={(e) => setImageX(e.currentTarget.value)}/>
            <div>desc: {desc}</div>
            <input type="text" value={descX} onChange={(e) => setDescX(e.currentTarget.value)}/>
            <div>cost: {cost}</div>
            <input type="number" value={costX} onChange={(e) => setCostX(+e.currentTarget.value)}/>
            <div>amount: {amount}</div>
            <input type="number" value={amountX} onChange={(e) => setAmountX(+e.currentTarget.value)}/>
            <button onClick={updateItem}>Update</button>
            <button onClick={deleteItem}>Delete</button>
        </>
    );
};

export default UpdatedItem;