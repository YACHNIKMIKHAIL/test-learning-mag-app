import React, {useEffect} from 'react';
import {MainCase} from './MainStyles';
import {useDispatch} from "react-redux";
import ItemsMap from "../Item/ItemsMap";
import {getItemsTC} from "./../../Features/ItemsAction";
import Backet from "../Backet/Backet";

const Main = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        debugger
        console.log('useEffect')
        dispatch(getItemsTC())
    },[dispatch])

    return (
        <MainCase>
            {/*<ItemsMap/>*/}
            <Backet/>
        </MainCase>
    );
};

export default Main;