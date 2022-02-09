import React from 'react';
import BellIcon from '../../../assets/icons/BellIcon'
import PlusIcon from '../../../assets/icons/PlusIcon';
import UserIcon from '../../../assets/icons/UserIcon';
import * as Styled from "./AppFooter.styles"

const AppFooter = () => {
    return (
        <Styled.AppFooter>
            <BellIcon/>
            <PlusIcon/>
            <UserIcon/>
        </Styled.AppFooter>
    )
}

export default AppFooter