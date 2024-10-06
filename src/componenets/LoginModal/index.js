import React, { useContext } from 'react'
import SignInModal from './SignInModal'
import SignUpModal from './SignUpModal'
import Codemodal from './Codemodal'
import ForgetModal from './ForgetModal'
import Category from './Category'
import ChangePassword from './ChangePassword'
import Exit from './Exit'
import UpdateItemShop from './UpdateItemShop'
import { LoginContext } from '../../contexts/LoginContext'
import Shop from './Shop'
import FilterShop from './FilterShop'
import Sound from './soundModal'
export default function Index() {
    const { state } = useContext(LoginContext)
    return (
        <>
            {state.signin ? <SignInModal /> : null}
            {state.signup ? <SignUpModal /> : null}
            {state.code ? <Codemodal /> : null}
            {state.forgetPassword ? <ForgetModal /> : null}
            {state.changePassword ? <ChangePassword /> : null}
            {state.category ? <Category /> : null}
            {state.exit ? <Exit /> : null}
            {state.updateItemShop ? <UpdateItemShop /> : null}
            {state.shop ? <Shop /> : null}
            {state.filterShop ? <FilterShop /> : null}
            {state.sound ? <Sound /> : null}

        </>
    )
}
