import React, {useState} from 'react';
import {postItemTC} from "../Features/ItemsAction";
import {useDispatch} from "react-redux";
import {useMagSelector} from "../App/store";
import {ItemsType} from "../Api/MagAPI";
import UpdatedItem from "./Order/UpdatedItem";

const Admin = () => {
    const dispatch = useDispatch()
    const [image, setImage] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [desc, setDesc] = useState<string>('')
    const [cost, setCost] = useState<number>(0)
    const [amount, setAmount] = useState<number>(0)
    const itemsInMag = useMagSelector<ItemsType[]>(state => state.items.items)

    const addToMag = () => {
        dispatch(postItemTC({title, image, desc, cost, amount}))
    }
    console.log(itemsInMag)
    return (
        <div style={{width:'100%',overflow:'auto'}}>
            <div>
                image: <input type="text" value={image} onChange={(e) => setImage(e.currentTarget.value)}/>
            </div>
            <div>
                title: <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
            </div>
            <div>
                desc: <input type="text" value={desc} onChange={(e) => setDesc(e.currentTarget.value)}/>
            </div>
            <div>
                cost: <input type="number" value={cost} onChange={(e) => setCost(+e.currentTarget.value)}/>
            </div>
            <div>
                amount: <input type="number" value={amount} onChange={(e) => setAmount(+e.currentTarget.value)}/>
            </div>
            <div>
                <button onClick={addToMag}> Add to mag</button>
            </div>
            <div>
                {itemsInMag.map((m, i) => {
                    return <div key={i}>
                        <UpdatedItem
                            _id={m._id}
                            title={m.title}
                            image={m.image}
                            desc={m.desc}
                            amount={m.amount}
                            cost={m.cost}/>
                    </div>
                })}
            </div>
        </div>
    );
};

export default Admin;