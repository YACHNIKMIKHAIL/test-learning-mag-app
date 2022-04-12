import React, {useEffect} from 'react';
import {MainCase} from './MainStyles';
import {useDispatch} from "react-redux";
import ItemsMap from "../Item/ItemsMap";
import {getItemsTC} from "./../../Features/ItemsAction";
import Backet from "../Backet/Backet";
import {useMagSelector} from "../../App/store";
import {ModeType} from "../../App/AppReducer";
import Admin from "../Admin";

const Main = () => {
    const dispatch = useDispatch()
    const isLoad = useMagSelector<boolean>(state => state.app.isLoad)
    const mode = useMagSelector<ModeType>(state => state.app.mode)


    useEffect(() => {
        debugger
        console.log('useEffect')
        dispatch(getItemsTC())
    }, [])


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
                        : <> </>}


        </MainCase>
    );
};

export default Main;