import React from 'react';
import styled from "styled-components";
import Item from "./Item";
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";

const ItemsMap = () => {
    const items = useMagSelector<ItemsType[]>(state => state.items.items)
    return (
        <ItemsMapCase>
            {items.map((m,i)=>{return <Item key={i} item={m}/>})}
        </ItemsMapCase>
    );
};

export default ItemsMap;

export const ItemsMapCase = styled.div`
  height: 92vh;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  overflow: auto;
`