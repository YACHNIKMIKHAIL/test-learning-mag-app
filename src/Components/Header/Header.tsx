import React, {useEffect} from 'react';
import {CCase, HeaderCase, PBCase, TCase} from './HeaderStyles';
import {useDispatch} from "react-redux";
import {appActions, ModeType} from "../../App/AppReducer";
import {useMagSelector} from "../../App/store";
import {ItemsType} from "../../Api/MagAPI";
import {magActions} from "../../Features/ItemsAction";

const Header = () => {
    const dispatch = useDispatch()
    const mode = useMagSelector<ModeType>(state => state.app.mode)
    const totalCost = useMagSelector<number>(state => state.items.byedItems.totalCoast)
    const itemsInBacket = useMagSelector<ItemsType[]>(state => state.items.byedItems.bItems)

    const goTo = () => {
        if (mode === 'bye') {
            dispatch(appActions.changeMode('order'))
        } else if (mode === 'order') {
            dispatch(appActions.changeMode('bye'))
        } else if (mode === 'admin') {
            dispatch(appActions.changeMode('bye'))
        }
    }
    const goToAdm = () => {
        dispatch(appActions.changeMode('admin'))
    }
    const goToBack = () => {
        dispatch(appActions.changeMode('bye'))
    }

    useEffect(() => {
        let res = localStorage.getItem('itemsInBacket')
        if (res !== null) {
            let resultItems = JSON.parse(res)
            resultItems.forEach((i: ItemsType) => {
                dispatch(magActions.byeItemAC(i))
            })
        }
    }, [dispatch])

    return (
        <HeaderCase>
            <TCase>
                MY <span onClick={goToAdm}>TEST</span> MAG <span onClick={goToBack}>APP</span>
            </TCase>
            <PBCase>
                <CCase>{totalCost === 0 ? null : `${totalCost} $`}</CCase>
                <CCase>
                    <button onClick={goTo}
                            disabled={itemsInBacket.length === 0 && mode !== 'order'}
                    >Go
                        to {mode === 'bye' ? 'backet' : mode === 'order' ? 'items' : mode === 'admin' ? 'blabla' : ''} </button>
                </CCase>
            </PBCase>
        </HeaderCase>
    );
};

export default Header;