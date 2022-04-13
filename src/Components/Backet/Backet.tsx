import React from 'react';
import Order from "../Order/Order";
import ByedItem from "../ByedItem/ByedItem";
import {BacketCase, ByedItemsCase, OrderCase} from './BacketStyles';
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";

const Backet = () => {
    const byedItems = useMagSelector<ItemsType[]>(state => state.items.byedItems.bItems)

    return (
        <BacketCase>
            <ByedItemsCase>
                {byedItems.length === 0
                    ? <div>No items in backet</div>
                    : <>{byedItems.map((m, i) => {
                        return <ByedItem key={i} item={m}/>
                    })}</>
                }


            </ByedItemsCase>
            <OrderCase>
                <Order/>
            </OrderCase>
        </BacketCase>
    );
};

export default Backet;