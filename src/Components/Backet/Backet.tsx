import React from 'react';
import {Order} from "../Order/Order";
import ByedItem from "../ByedItem/ByedItem";
import {BacketCase, ByedItemsCase} from './BacketStyles';
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";
import NoItemsInBacket from "./NoItemsInBacket";

const Backet = () => {
    const byedItems = useMagSelector<ItemsType[]>(state => state.items.byedItems.bItems)

    return (
        <BacketCase>
            <ByedItemsCase>
                {byedItems.length === 0
                    ? <NoItemsInBacket/>
                    : <>{byedItems.map((m, i) => {
                        return <ByedItem key={i} item={m}/>
                    })}</>
                }
            </ByedItemsCase>
            <>
                <Order/>
            </>
        </BacketCase>
    );
};

export default Backet;