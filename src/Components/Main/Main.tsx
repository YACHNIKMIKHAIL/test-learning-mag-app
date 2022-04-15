import React, {useEffect} from 'react';
import {MainCase} from './MainStyles';
import {useDispatch} from "react-redux";
import ItemsMap from "../Item/ItemsMap";
import Backet from "../Backet/Backet";
import {useMagSelector} from "../../App/store";
import {ModeType} from "../../App/AppReducer";
import Admin from "../Admin/Admin";
import {getItemsTC} from "../../Features/ItemsAction";
import Loader from "../Loader/Loader";

const Main = () => {
    const dispatch = useDispatch()
    const mode = useMagSelector<ModeType>(state => state.app.mode)
    const isLoad = useMagSelector<boolean>(state => state.app.isLoad)

    useEffect(() => {
        dispatch(getItemsTC())
    }, [dispatch])

    if (isLoad) {
        return <Loader/>
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