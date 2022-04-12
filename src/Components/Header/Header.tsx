import React from 'react';
import {CCase, HeaderCase, PBCase, TCase} from './HeaderStyles';
import {useDispatch} from "react-redux";
import {appActions, ModeType} from "../../App/AppReducer";
import {useMagSelector} from "../../App/store";

const Header = () => {
    const dispatch = useDispatch()
    const mode = useMagSelector<ModeType>(state => state.app.mode)
    const totalCost = useMagSelector<number>(state => state.items.byedItems.totalCoast)

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
    return (
        <HeaderCase>
            <TCase>
                MY <span onClick={goToAdm}>TEST</span> MAG APP
            </TCase>
            <PBCase>
                <CCase>{totalCost === 0 ? null : `${totalCost} $`}</CCase>
                <CCase>
                    <button onClick={goTo} disabled={totalCost === 0}>Go
                        to {mode === 'bye' ? 'backet' : mode === 'order' ? 'items' : mode === 'admin' ? 'blabla' : ''} </button>
                </CCase>
            </PBCase>
        </HeaderCase>
    );
};

export default Header;