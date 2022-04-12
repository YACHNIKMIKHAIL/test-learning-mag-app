import React, {useEffect, useState} from 'react';
import Order from "../Order/Order";
import ByedItem from "../ByedItem/ByedItem";
import {BacketCase, ByedItemsCase, OrderCase} from './BacketStyles';
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";
import {useDispatch} from "react-redux";

const Backet = () => {
    const byedItems=useMagSelector<ItemsType[]>(state=>state.items.byedItems.bItems)

    const [byedI, setByedI] = useState<ItemsType[]>(byedItems)

    // useEffect(() => {
    //     let result = localStorage.getItem('itemsInBacket')
    //     if (result !== null) {
    //         setByedI(JSON.parse(result))
    //     }
    // }, [])


    return (
        <BacketCase>
            <ByedItemsCase>
                {byedItems?.map((m, i) => {
                    return <ByedItem key={i} item={m}/>
                })}

            </ByedItemsCase>
            <OrderCase>
                <Order/>
            </OrderCase>
        </BacketCase>
    );
};

export default Backet;