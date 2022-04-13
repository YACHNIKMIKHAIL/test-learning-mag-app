import React, {useEffect} from 'react';
import {MainCase} from './MainStyles';
import {useDispatch} from "react-redux";
import ItemsMap from "../Item/ItemsMap";
import Backet from "../Backet/Backet";
import {useMagSelector} from "../../App/store";
import {ModeType} from "../../App/AppReducer";
import Admin from "../Admin/Admin";
import {getItemsTC} from "../../Features/ItemsAction";

const Main = () => {
    const dispatch = useDispatch()
    const isLoad = useMagSelector<boolean>(state => state.app.isLoad)
    const mode = useMagSelector<ModeType>(state => state.app.mode)


    useEffect(() => {
        dispatch(getItemsTC())
    }, [dispatch])
    // useEffect(() => {
    //     let res = localStorage.getItem('itemsInBacket')
    //     if (res !== null) {
    //         let resultItems = JSON.parse(res)
    //         resultItems.forEach((i: ItemsType) => {
    //             dispatch(magActions.byeItemAC(i))
    //         })
    //     }
    // }, [dispatch])

    if (isLoad) {
        return <div>Loading...</div>
    }
    return (
        <MainCase>
            {mode === 'bye'
                ? <ItemsMap/>
                : mode === 'order'
                    ? <Backet/>
                    : mode === 'admin'
                        ? <Admin/>
                        : <></>}


        </MainCase>
    );
};

export default Main;