import {
    CHANGE_PASSWORD,
    FORGET_PASSWORD,
    CODE,
    SIGNIN,
    SIGNUP,
    CATEGORY,
    EXIT,
    UPDATEITEMSHOP,
    SHOP,
    FILTERSHOP,
    SOUND
} from '../constants/ActionTypes'
function reducer(state, action) {
    switch (action.type) {
        case SIGNIN:
            return {
                signin: true,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case SIGNUP:
            return {
                signin: false,
                signup: true,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case CODE:
            return {
                signin: false,
                signup: false,
                code: true,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case FORGET_PASSWORD:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: true,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case CHANGE_PASSWORD:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: true,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case CATEGORY:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: true,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case EXIT:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: true,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }
        case UPDATEITEMSHOP:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: true,
                shop: false,
                filterShop:false,
                sound:false
            }
        case SHOP:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: true,
                filterShop:false,
                sound:false
            }
            case FILTERSHOP:
                return {
                    signin: false,
                    signup: false,
                    code: false,
                    forgetPassword: false,
                    changePassword: false,
                    category: false,
                    exit: false,
                    updateItemShop: false,
                    shop: false,
                    filterShop:true,
                    sound:false
                }
                case SOUND:
                return {
                    signin: false,
                    signup: false,
                    code: false,
                    forgetPassword: false,
                    changePassword: false,
                    category: false,
                    exit: false,
                    updateItemShop: false,
                    shop: false,
                    filterShop:false,
                    sound:true
                }

        default:
            return {
                signin: false,
                signup: false,
                code: false,
                forgetPassword: false,
                changePassword: false,
                category: false,
                exit: false,
                updateItemShop: false,
                shop: false,
                filterShop:false,
                sound:false
            }

    }
}
export default reducer