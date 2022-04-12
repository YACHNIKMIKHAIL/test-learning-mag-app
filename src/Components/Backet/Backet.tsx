import React from 'react';
import Order from "../Order/Order";
import ByedItem from "../ByedItem/ByedItem";
import {BacketCase, ByedItemsCase, OrderCase} from './BacketStyles';
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";

const Backet = () => {
    const items = useMagSelector<ItemsType[]>(state => state.items.items)

    return (
        <BacketCase>
            <ByedItemsCase>
                {items.map((m,i)=>{
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