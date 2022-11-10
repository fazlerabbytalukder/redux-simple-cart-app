import { CART_ADD_PRODUCT } from "../ActionTypes/ActionTyps";
import { CART_REMOVE_PRODUCT } from "../ActionTypes/ActionTyps";

const initState = {
    products: [],
    totalQty: 0,
    totalPrice: 0
}

export const cartReducer = (state = initState, action) =>{
    switch (action.type) {
        case CART_ADD_PRODUCT:
            return {
                ...state,
                products: action.payload.products,
                totalQty: action.payload.totalQty,
                totalPrice: action.payload.totalPrice,
            }
        case CART_REMOVE_PRODUCT:
            return {
                ...state,
                products: action.payload.products,
                totalQty: action.payload.totalQty,
                totalPrice: action.payload.totalPrice,
            }
    
        default:
            return state
    }
}