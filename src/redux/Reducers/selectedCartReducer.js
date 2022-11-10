import { SELECTED_PRODUCT_CART } from "../ActionTypes/ActionTyps";

const initState = {
    product: {},
}

export const selectedReducer = (state = initState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT_CART:
            return {
                ...state,
                product: action.payload.product,
            }
        default:
            return state
    }
}