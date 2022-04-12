import React from 'react';
import {CCase, HeaderCase, PBCase, TCase} from './HeaderStyles';

const Header = () => {
    return (
        <HeaderCase>
            <TCase>
                MY TEST MAG APP
            </TCase>
            <PBCase>
                <CCase>Price $</CCase>
                <CCase>
                    <button>Go to backet</button>
                </CCase>
            </PBCase>
        </HeaderCase>
    );
};

export default Header;